<template>
	<v-navigation-drawer
		v-bind="$attrs"
		v-on="$listeners"
		ref="resizeDrawer"
		class="v-resize-drawer"
		:class="classes"
		:width="drawerOptions.width"
		:style="drawerStyle"
	>
		<!-- Resize handle -->
		<div
			v-if="resizable"
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
import Vue from 'vue';
import { merge as _merge } from 'lodash';
import { VNavigationDrawer } from 'vuetify/lib';

// const VNavigationDrawer = Vue.options.components.VNavigationDrawer;

// const VResizeDrawer = {
// 	extends: VNavigationDrawer,
// 	methods: {
// 		genContent() {
// 			console.log('yo');
// 			return this.$createElement(
// 				'div',
// 				{
// 					staticClass: 'v-btn__contents',
// 				},
// 				['Activate ', this.$slots.default],
// 			);
// 		},
// 	},
// };

export default {
	extends: VNavigationDrawer,
	name: 'ResizeDrawer',
	props: {
		options: {
			type: Object,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		width: {
			type: String,
			required: false,
			default: '75%',
		},
		// Updated //
		handlePosition: {
			type: String,
			default: 'center',
		},
		overflow: Boolean,
		paddingTop: {
			type: [Number, String],
			default: 0,
		},
		resizable: {
			type: Boolean,
			default() {
				return !this.miniVariant;
			},
		},
		saveWidth: {
			type: Boolean,
			default: true,
		},
		storageName: {
			type: String,
			default: 'v-resize-drawer',
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
			// handlePosition: 'center',
			// overflow: false,
			// paddingTop: 0,
			// resizable: true,
			// saveWidth: true,
			// storageName: 'v-resize-drawer',
			width: '256px',
		},
		loading: false,
		offsetWith: '256px',
		events: {
			handle: {
				mouseUp: true,
				mouseDown: false,
			},
		},
	}),
	computed: {
		classes() {
			return {
				'v-navigation-drawer': true,
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
				'v-navigation-drawer--open': this.isActive,
				'v-navigation-drawer--open-on-hover': this.expandOnHover,
				'v-navigation-drawer--right': this.right,
				'v-navigation-drawer--temporary': this.temporary,
				'v-navigation-drawer--overflow': this.overflow,
			};
		},
		drawerStyle() {
			// const options = this.drawerOptions;
			let styles = '';
			let paddingValue = this.paddingTop;

			if (+this.paddingTop) {
				paddingValue = `${this.paddingTop}px`;
			}

			styles += `padding-top: ${paddingValue}`;

			return styles;
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
			const options = this.drawerOptions;
			let className = `handle-container-${this.handlePosition}`;

			if (this.$scopedSlots.handle && options.handlePosition === 'top-icon') {
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
	},
	watch: {
		item: {
			handler() {
				this.getDailyBreakdown();
			},
			deep: true,
		},
		options: {
			handler() {
				this.setOptions();
			},
			deep: true,
		},
		// ! BUG ! //
		// TODO: Fix input event throwing off offset width //
		value: {
			handler(val) {
				console.log('======= value', val, this.drawerOptions.width);
				this.offsetWith = this.drawerOptions.width;

				if (!val) {
					this.offsetWith = 0;
				}
			},
			deep: true,
		},
	},
	mounted() {
		// this.setOptions();
		console.log('MOUNTED', this);

		// console.log('$attrs', this.$attrs);
	},
	beforeDestroy() {
		if (this.resizable) {
			document.removeEventListener('mouseup', this.handleMouseUp, false);
			document.removeEventListener('mousemove', this.drawerResize, false);
		}
	},
	methods: {
		genContent() {
			return this.$createElement('div', {
				staticClass: 'v-navigation-drawer__content',
			}, this.$slots.default);
		},
		emitEvent(name, evt) {
			console.log('emitEvent', { name, evt });
			console.log('emitEvent this.offsetWith', this.offsetWith);
			// this.offsetWidth = '0px';

			this.$emit(name, { evt, action: name, offsetWidth: this.offsetWith, width: this.drawerOptions.width });
		},

		// Handle Events //
		handleClick(evt) {
			console.log('handleClick', { evt });
			this.emitEvent('handle:click', evt);
		},
		handleDoubleClick(evt) {
			console.log('handleDoubleClick', { evt });
			this.drawerOptions.width = this.defaultWidth;
			this.offsetWith = this.defaultWidth;
			this.setLocalStorage();

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
				console.log('handleMouseDown', { evt });
				this.events.handle.mouseDown = true;
				document.addEventListener('mouseup', this.handleMouseUp, false);
				this.emitEvent('handle:mousedown', evt);
			}
		},
		handleMouseUp(evt) {
			console.log('handleMouseUp', { evt });
			evt.preventDefault();
			evt.stopPropagation();

			const drawer = this.$refs.resizeDrawer.$el;

			this.events.handle.mouseDown = false;
			this.drawerOptions.width = drawer.style.width;

			document.body.style.cursor = '';

			this.setLocalStorage();

			if (!this.events.handle.mouseUp) {
				this.events.handle.mouseUp = true;
				this.offsetWidth = this.drawerOptions.width;
				console.log('this.offsetWidth', this.offsetWidth);
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
		drawerResize(el) {
			let width = el.clientX;

			if (this.right) {
				width = document.body.scrollWidth - width;
			}

			this.drawerOptions.width = `${width}px`;

			document.body.style.cursor = 'grabbing';
			this.offsetWith = this.drawerOptions.width;
			this.emitEvent('handle:drag', el);
		},

		drawerInput(val) {
			console.log('drawerInput', { val });
			this.$emit('input', val);
		},

		// Storage Events //
		getLocalStorage(name = this.storageName) {
			return localStorage.getItem(name);
		},
		setLocalStorage(settings = { name: this.storageName, width: this.drawerOptions.width }) {
			if (!this.saveWidth) {
				return false;
			}

			const name = settings.name;
			let newValue = settings.width;
			newValue = newValue ?? undefined;

			const oldValue = (localStorage.getItem(name) === 'true');
			newValue = newValue || !oldValue;

			localStorage.setItem(name, newValue);
			return newValue;
		},

		// Mounted Event //
		setOptions() {
			this.drawerOptions = _merge(this.drawerOptions, this.options);
			const isMiniVariant = this.$attrs['mini-variant'] !== undefined && this.$attrs['mini-variant'] !== false;

			// Disable resize if mini-variant is set //
			if (isMiniVariant) {
				this.drawerOptions.width = this.drawerOptions['mini-variant-width'] || undefined;
			}
			const storageWidth = this.getLocalStorage(this.storageName);

			if (this.saveWidth && storageWidth && !isMiniVariant) {
				this.defaultWidth = this.drawerOptions.width;
				this.drawerOptions.width = this.getLocalStorage(this.storageName);
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.v-resize-drawer {
	&.v-navigation-drawer--overflow {
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
