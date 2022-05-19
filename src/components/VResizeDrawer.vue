<template>
	<v-navigation-drawer
		v-bind="$attrs"
		ref="resizeDrawer"
		class="v-resize-drawer"
		:class="classes"
		:style="styles"
		tag="nav"
		:value="value"
		:stateless="stateless"
		:width="computedWidth"
	>
		<!-- Resize handle -->
		<div
			v-if="isResizable"
			class="handle-container d-flex"
			:class="{ [handleContainerClass]: handlePosition }"
			:style="handleContainerStyle"
			@dblclick="handleDoubleClick"
			@mousedown="handleMouseDown"
			@mouseup="handleMouseUp"
			@click="handleClick"
		>
			<!-- Icon -->
			<div
				v-if="
					handlePosition === 'left' ||
					handlePosition === 'right' ||
					handlePosition === 'center'
				"
				class="
					handle-container-icon
					d-flex
					align-items-center
					justify-content-center
				"
				:class="{
					[`handle-container-${handlePosition}-icon`]: handlePosition,
				}"
			>
				<slot v-if="$scopedSlots.handle" name="handle"></slot>
				<div v-else :class="{ 'handle-container-handle-flip': right }">
					&raquo;
				</div>
			</div>

			<!-- Top Icon -->
			<template v-if="$scopedSlots.handle && handlePosition === 'top-icon'">
				<slot
					v-if="$scopedSlots.handle"
					name="handle"
					:class="{
						'theme--dark': dark,
						'theme--light': !dark,
						'float-end': right,
						'float-start': !right,
					}"
				></slot>
			</template>

			<v-icon
				v-else-if="handlePosition === 'top-icon'"
				:class="{
					'theme--dark': dark,
					'theme--light': !dark,
					'float-end': right,
					'float-start': !right,
				}"
			>
				mdi-resize-bottom-right
			</v-icon>

			<!-- Top -->
			<div
				v-else-if="handlePosition === 'top'"
				class="handle-container-lines"
			></div>
		</div>

		<!-- Prepend Slot -->
		<template v-if="$scopedSlots.prepend">
			<slot name="prepend"></slot>
		</template>

		<!-- Default Slot -->
		<slot name="default"></slot>

		<!-- Append Slot -->
		<template v-if="$scopedSlots.append">
			<slot name="append"></slot>
		</template>
	</v-navigation-drawer>
</template>

<script>
import { merge as _merge } from 'lodash';
import { VNavigationDrawer } from 'vuetify/lib';

export default {
	extends: VNavigationDrawer,
	name: 'v-resize-drawer',
	props: {
		handlePosition: {
			type: String,
			default: 'center',
		},
		options: {
			type: Object,
			required: true,
		},
		overflow: Boolean,
		resizable: {
			type: Boolean,
			default() {
				return !this.isMiniVariant;
			},
		},
		saveWidth: {
			type: Boolean,
			default: true,
		},
		storageName: {
			type: String,
			default: 'v-resize-drawer-width',
		},
		width: {
			type: [Number, String],
			required: false,
			default: '256px',
		},
	},
	data: () => ({
		defaultWidth: '256px',
		drawerOptions: {
			handle: {
				color: {
					dark: '#555',
					light: '#ccc',
				},
			},
			width: '256px',
		},
		events: {
			handle: {
				mouseUp: true,
				mouseDown: false,
			},
		},
		loading: false,
		resizedWidth: '256px',
		unicornLog: {
			styles: [
				'background: black',
				'color: #0f0',
				'padding: 5px',
			],
			prefix: '[VResizeDrawer.vue]',
		},
	}),
	computed: {
		classes() {
			return {
				'v-navigation-drawer--absolute': this.absolute,
				'v-navigation-drawer--bottom': this.bottom,
				'v-navigation-drawer--clipped': this.clipped,
				'v-navigation-drawer--close': !this.isActive,
				'v-navigation-drawer--fixed': !this.absolute && (this.app || this.fixed),
				'v-navigation-drawer--floating': this.floating,
				'v-navigation-drawer--is-mobile': this.isMobile,
				'v-navigation-drawer--is-mouseover': this.isMouseover,
				'v-navigation-drawer--mini-variant': this.isMiniVariant,
				'v-navigation-drawer--custom-mini-variant': Number(this.miniVariantWidth) !== 56,
				'v-navigation-drawer--open-on-hover': this.expandOnHover,
				'v-navigation-drawer--right': this.right,
				'v-navigation-drawer--temporary': this.temporary,
				'v-navigation-drawer--overflow': this.overflow,
			};
		},
		computedWidth() {
			return this.convertToUnit(this.resizedWidth);
		},
		containerClass() {
			const position = this.handlePosition;
			let className = '';

			if (position === 'center' || position === 'border' || position === 'left' || position === 'right') {
				const paddingSide = this.right ? 's' : 'e';
				className += ` p${paddingSide}-8`;
			}

			return className;
		},
		handleContainerClass() {
			let className = `handle-container-${this.handlePosition}`;

			if (this.$scopedSlots.handle && this.handlePosition === 'top-icon') {
				className += '-slot';
			}

			if (this.handlePosition === 'border' || this.handlePosition === 'left' || this.handlePosition === 'right' || this.handlePosition === 'center') {
				className += ' align-center justify-center';
			}

			// Parent //
			const parentPosition = this.right ? 'right' : 'left';
			className += ` handle-container-parent-${parentPosition}`;

			return className;
		},
		handleContainerStyle() {
			const options = this.drawerOptions;
			const color = this.dark ? options.handle.color.dark : options.handle.color.light;
			let styles = `border-${this.handlePosition}-color: ${color};`;

			if (this.handlePosition === 'left' || this.handlePosition === 'right' || this.handlePosition === 'border') {
				styles = `
					background-color: ${color};
					color: ${color};
				`;
			}

			if (this.handlePosition === 'center') {
				styles = `
					background-color: transparent;
					color: ${color};
				`;
			}

			return styles;
		},
		isResizable() {
			return this.resizable && !this.isMiniVariant && !this.expandOnHover;
		},
		styles() {
			const translate = this.isBottom ? 'translateY' : 'translateX';
			let top = this.$vuetify.application.bar;

			top += this.clipped ? this.$vuetify.application.top : 0;

			const styles = {
				height: this.convertToUnit(this.height),
				top: !this.isBottom ? this.convertToUnit(top) : 'auto',
				maxHeight: this.computedMaxHeight != null ?
					`calc(100% - ${this.convertToUnit(this.computedMaxHeight)})` :
					undefined,
				transform: `${translate}(${this.convertToUnit(this.computedTransform, '%')})`,
				width: this.convertToUnit(this.isMiniVariant ? this.miniVariantWidth : this.resizedWidth),
			};

			return styles;
		},
	},
	watch: {
		// options: {
		// 	handler() {
		// 		this.setOptions();
		// 	},
		// 	deep: true,
		// },
		isMouseover: {
			handler(val) {
				if (this.miniVariant || this.expandOnHover) {
					this.resizedWidth = val ? this.width : this.miniVariantWidth;
				}
			},
			deep: true,
		},
	},

	mounted() {
		this.setOptions();
		this.genListeners();
		this.setLocalStorage('set');
	},
	beforeDestroy() {
		const drawer = this.$refs.resizeDrawer.$el;

		drawer.removeEventListener('mouseenter', this.drawerMouseenter, false);
		drawer.removeEventListener('mouseleave', this.drawerMouseleave, false);

		if (this.isResizable) {
			document.removeEventListener('mouseup', this.handleMouseUp, false);
			document.removeEventListener('mousemove', this.drawerResize, false);
		}
	},
	methods: {
		computeTop() {
			if (!this.hasApp) return 0;

			let top = this.$vuetify.application.bar;

			top += this.clipped ?
				this.$vuetify.application.top :
				0;

			return top;
		},
		convertToUnit(str, unit = 'px') {
			if (str == null || str === '') {
				return undefined;
			}
			else if (!+str) {
				return String(str);
			}

			return `${Number(str)}${unit}`;
		},
		emitEvent(name, evt) {
			const drawerData = {
				eventName: name,
				evt,
				resizedWidth: this.resizedWidth,
				width: this.resizedWidth,
			};

			if (name !== 'handle:drag') {
				this.$unicornLog({
					text: `emitEvent: ${name}`,
					styles: this.unicornLog.styles,
					logPrefix: this.unicornLog.prefix,
					objects: { evt, drawerData },
				});
			}

			this.$emit(name, drawerData);
		},
		genContent() {
			return this.$createElement('div', {
				staticClass: 'v-navigation-drawer__content',
			}, this.$slots.default);
		},
		genListeners() {
			const drawer = this.$refs.resizeDrawer.$el;
			drawer.addEventListener('mouseenter', this.drawerMouseenter, false);
			drawer.addEventListener('mouseleave', this.drawerMouseleave, false);
		},
		updateApplication() {
			if (
				!this.isActive ||
				this.isMobile ||
				this.temporary ||
				!this.$el
			) return 0;

			let intWidth = typeof this.computedWidth === 'number' ? this.computedWidth : this.computedWidth.replace('px', '');

			if (!this.miniVariant && this.expandOnHover) {
				intWidth = typeof this.width === 'number' ? this.width : this.width.replace('px', '');
			}

			return intWidth;
		},
		updateAppWidth(width) {
			if (!this.app || this.isMiniVariant) {
				return false;
			}

			const intWidth = typeof width === 'number' ? width : width.replace('px', '');

			if (this.right) {
				this.$vuetify.application.right = intWidth;
				return false;
			}

			this.$vuetify.application.left = intWidth;
			return false;
		},

		// Handle Events //
		handleClick(evt) {
			this.$unicornLog({
				text: 'handleClick',
				styles: this.unicornLog.styles,
				logPrefix: this.unicornLog.prefix,
				objects: evt,
			});

			this.emitEvent('handle:click', evt);
		},
		handleDoubleClick(evt) {
			this.$unicornLog({
				text: 'handleDoubleClick',
				styles: this.unicornLog.styles,
				logPrefix: this.unicornLog.prefix,
				objects: evt,
			});

			this.resizedWidth = this.defaultWidth;
			this.setLocalStorage();

			this.updateAppWidth(this.resizedWidth);
			this.emitEvent('handle:dblclick', evt);
		},
		handleMouseDown(evt) {
			evt.preventDefault();
			evt.stopPropagation();

			this.events.handle.mouseUp = false;

			if (evt.offsetX < 25) {
				document.addEventListener('mousemove', this.drawerResize, false);
			}

			if (!this.events.handle.mouseDown) {
				this.$unicornLog({
					text: 'handleMouseDown',
					styles: this.unicornLog.styles,
					logPrefix: this.unicornLog.prefix,
					objects: evt,
				});

				this.events.handle.mouseDown = true;
				document.addEventListener('mouseup', this.handleMouseUp, false);
				this.emitEvent('handle:mousedown', evt);
			}
		},
		handleMouseUp(evt) {
			evt.preventDefault();
			evt.stopPropagation();

			const drawer = this.$refs.resizeDrawer.$el;

			this.events.handle.mouseDown = false;
			this.resizedWidth = drawer.style.width;

			document.body.style.cursor = '';

			this.setLocalStorage();

			if (!this.events.handle.mouseUp) {
				this.events.handle.mouseUp = true;

				this.updateAppWidth(this.resizedWidth);

				const logStuff = {
					drawerOptionsWidth: this.resizedWidth,
					resizedWidth: this.resizedWidth,
				};

				this.$unicornLog({
					text: 'handleMouseUp',
					styles: this.unicornLog.styles,
					logPrefix: this.unicornLog.prefix,
					objects: logStuff,
				});
				document.removeEventListener('mouseup', this.handleMouseUp, false);
				document.removeEventListener('mousemove', this.drawerResize, false);
				this.emitEvent('handle:mouseup', evt);
			}
		},

		// Drawer Events //
		drawerClose(evt) {
			this.emitEvent('close', evt);
		},
		drawerDrag(e) {
			e.preventDefault();
			e.stopPropagation();

			const el = this.$refs.resizeDrawer.$el;

			if (e.offsetX < 25) {
				el.style.transition = 'initial';
				document.addEventListener('mousemove', this.drawerResize, false);
			}
		},
		drawerInput(val) {
			this.emitEvent('input', val);
		},
		drawerMouseenter() {
			this.isMouseover = true;
		},
		drawerMouseleave() {
			this.isMouseover = false;
		},
		drawerResize(el) {
			let width = el.clientX;

			if (this.right) {
				width = document.body.scrollWidth - width;
			}

			this.resizedWidth = this.convertToUnit(width);

			document.body.style.cursor = 'grabbing';

			this.updateAppWidth(width);

			this.emitEvent('handle:drag', el);
		},

		// Storage Events //
		getLocalStorage() {
			return localStorage.getItem(this.storageName);
		},
		setLocalStorage(action = 'update') {
			if (!this.saveWidth) {
				return false;
			}

			let width = this.resizedWidth;
			width = width ?? undefined;

			if (action === 'set') {
				width = this.getLocalStorage();
				width = width || this.resizedWidth;

				this.updateAppWidth(width);
			}

			localStorage.setItem(this.storageName, width);

			return width;
		},

		// Mounted Event //
		setOptions() {
			this.drawerOptions = _merge(this.drawerOptions, this.options);
			const width = this.convertToUnit(this.width);
			this.resizedWidth = width;

			// Disable resize if mini-variant is set //
			if (this.isMiniVariant) {
				this.resizedWidth = this.miniVariantWidth || undefined;
				return false;
			}

			const storageWidth = this.getLocalStorage();

			this.defaultWidth = this.resizedWidth;

			if (this.saveWidth && storageWidth && !this.isMiniVariant) {
				this.resizedWidth = this.getLocalStorage();
			}

			this.updateAppWidth(this.resizedWidth);
			return false;
		},

	},
};
</script>

<style lang="scss" scoped>
.v-resize-drawer {
	&.v-navigation-drawer--overflow {
		overflow: visible;

		::v-deep .v-navigation-drawer__content {
			overflow: visible;
		}
	}

	.close-drawer {
		cursor: pointer;
	}

	::v-deep .v-navigation-drawer__content {
		position: relative;

		.handle-container {
			cursor: grab;
			position: absolute;
			width: 24px;
			z-index: 1;

			&:active {
				cursor: grabbing;
			}

			&-parent {
				&-left {
					left: initial;
					right: 0;
				}
			}

			&-top {
				border-right: 24px solid transparent;
				border-top-style: solid;
				border-top-width: 24px;
				height: 24px;
				left: 0;
				top: 0;
				width: 24px;

				&.handle-container-parent {
					&-left {
						border-left: 24px solid transparent;
						border-right: transparent;
						left: initial;
						right: 0;

						.handle-container-lines {
							left: initial;
							right: -5px;
							top: -19px;
							transform: rotate(45deg);
						}
					}
				}

				.handle-container-lines {
					top: -19px;
					transform: rotate(-45deg);
				}
			}

			&-top-icon {
				height: 24px;
				opacity: 0.5;
				left: initial;
				right: 0;
				top: 0;
				transition: opacity 0.3s ease;
				transform: rotate(-90deg);
				width: 24px;

				&:hover {
					opacity: 1;
				}

				&.handle-container-parent {
					&-right {
						left: 0;
						right: initial;
						transform: rotate(-180deg);
					}
				}
			}

			&-top-icon-slot {
				align-items: center;
				height: 24px;
				right: 0;
				opacity: 0.5;
				padding: 2px;
				top: 0;
				transition: opacity 0.3s ease;
				width: auto;

				&:hover {
					opacity: 1;
				}

				&.handle-container-parent {
					&-right {
						left: 0;
					}
				}
			}

			&-border {
				background-color: transparent !important;
				cursor: col-resize;
				height: 100%;
				top: 0;
				width: 8px;
			}

			&-left,
			&-right {
				height: 100%;
				top: 0;
				width: 12px;
			}

			&-center {
				height: 24px;
				top: 50%;
				transform: translateY(-50%);
			}

			&-lines {
				align-items: center;
				display: flex;
				flex-direction: column;
				height: auto;
				justify-content: center;
				left: -5px;
				position: absolute;
				width: 24px;

				&::before,
				&::after {
					border-radius: 4px;
					border-top: 2px inset #ccc;
					content: '';
					display: block;
					height: 1px;
				}

				&::before {
					margin-bottom: 3px;
					width: 30%;
				}

				&::after {
					width: 60%;
				}
			}

			&-icon {
				height: auto;
				width: 7px;
			}

			&-handle-flip {
				transform: scaleX(-1);
			}
		}
	}
}
</style>
