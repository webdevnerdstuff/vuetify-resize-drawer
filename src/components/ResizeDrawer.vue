<template>
	<v-navigation-drawer
		v-bind="$attrs"
		v-on="$listeners"
		ref="resizeDrawer"
		class="resize-drawer"
		:class="`resize-drawer-overflow-${drawerOptions.overflow}`"
		:width="drawerOptions.width"
		:style="drawerStyle"
	>
		<!-- Resize handle -->
		<div
			v-if="drawerOptions.resizable"
			class="handle-container d-flex"
			:class="{ [handleContainerClass]: drawerOptions.handlePosition }"
			:style="handleContainerStyle"
			@dblclick="handleDoubleClick"
			@mousedown="handleMouseDown"
			@mouseup="handleMouseUp"
			@click="handleClick"
		>
			<!-- Icon -->
			<div
				v-if="
					drawerOptions.handlePosition === 'left' ||
					drawerOptions.handlePosition === 'right' ||
					drawerOptions.handlePosition === 'center'
				"
				class="
					handle-container-icon
					d-flex
					align-items-center
					justify-content-center
				"
				:class="{
					[`handle-container-${drawerOptions.handlePosition}-icon`]:
						drawerOptions.handlePosition,
				}"
			>
				<slot v-if="$scopedSlots.handle" name="handle"></slot>
				<div v-else>&raquo;</div>
			</div>

			<!-- Top Icon -->
			<template
				v-if="
					$scopedSlots.handle && drawerOptions.handlePosition === 'top-icon'
				"
			>
				<slot
					v-if="$scopedSlots.handle"
					name="handle"
					:class="{
						'theme--dark': isDark,
						'theme--light': !isDark,
						'float-end': drawerOptions.right,
						'float-start': !drawerOptions.right,
					}"
				></slot>
			</template>

			<v-icon
				v-else-if="drawerOptions.handlePosition === 'top-icon'"
				:class="{
					'theme--dark': isDark,
					'theme--light': !isDark,
					'float-end': drawerOptions.right,
					'float-start': !drawerOptions.right,
				}"
			>
				mdi-resize-bottom-right
			</v-icon>

			<!-- Top -->
			<div
				v-else-if="drawerOptions.handlePosition === 'top'"
				class="handle-container-lines"
			></div>
		</div>

		<!-- Header Slot -->
		<v-row class="text-center" v-if="$scopedSlots.header">
			<v-col cols="12">
				<!-- Close Icon -->
				<slot v-if="$scopedSlots.closeIcon" name="closeIcon"></slot>

				<v-icon
					v-else-if="drawerOptions.showCloseIcon"
					:class="{
						'theme--dark': isDark,
						'theme--light': !isDark,
						'float-end': drawerOptions.right,
						'float-start': !drawerOptions.right,
					}"
					class="close-drawer float-end v-icon"
					@click="drawerClose"
				>
					mdi-close
				</v-icon>
			</v-col>
		</v-row>

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
import Vuetify, { VNavigationDrawer } from 'vuetify/lib';

Vue.use(Vuetify, {
	components: { VNavigationDrawer },
});

export default {
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
			handlePosition: 'center',
			overflow: false,
			paddingTop: 0,
			resizable: true,
			saveWidth: true,
			showCloseIcon: false,
			storageName: 'vuetify-resize-drawer',
			width: '256px',
		},
		isDark: false,
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
		drawerStyle() {
			const options = this.drawerOptions;
			let styles = '';
			let paddingValue = options.paddingTop;

			if (+options.paddingTop) {
				paddingValue = `${options.paddingTop}px`;
			}

			styles += `padding-top: ${paddingValue}`;

			return styles;
		},
		containerClass() {
			const position = this.drawerOptions.handlePosition;
			let className = '';

			if (position === 'center' || position === 'border' || position === 'left' || position === 'right') {
				const paddingSide = this.$attrs.right ? 's' : 'e';
				className += ` p${paddingSide}-8`;
			}

			return className;
		},
		handleContainerClass() {
			const options = this.drawerOptions;
			let className = `handle-container-${options.handlePosition}`;

			if (this.$scopedSlots.handle && options.handlePosition === 'top-icon') {
				className += '-slot';
			}

			if (options.handlePosition === 'border' || options.handlePosition === 'left' || options.handlePosition === 'right' || options.handlePosition === 'center') {
				className += ' align-center justify-center';
			}

			// Parent //
			const parentPosition = this.$attrs.right ? 'right' : 'left';
			className += ` handle-container-parent-${parentPosition}`;

			return className;
		},
		handleContainerStyle() {
			const options = this.drawerOptions;
			const color = this.isDark ? options.handle.color.dark : options.handle.color.light;
			let styles = `border-${options.handlePosition}-color: ${color};`;

			if (options.handlePosition === 'left' || options.handlePosition === 'right' || options.handlePosition === 'border') {
				styles = `
					background-color: ${color};
					color: ${color};
				`;
			}

			if (options.handlePosition === 'center') {
				styles = `
					background-color: transparent;
					color: ${color};
				`;
			}

			return styles;
		},
	},
	watch: {
		darkModeStatus: {
			handler(newValue) {
				this.isDark = newValue;
			},
			deep: true,
		},
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
		'$attrs.value': {
			handler(val) {
				this.offsetWith = this.drawerOptions.width;

				if (!val) {
					this.offsetWith = 0;
				}
			},
			deep: true,
		},
	},
	mounted() {
		this.setOptions();

		console.log('$attrs', this.$attrs);
	},
	beforeDestroy() {
		if (this.drawerOptions.resizable) {
			document.removeEventListener('mouseup', this.handleMouseUp, false);
			document.removeEventListener('mousemove', this.drawerResize, false);
		}
	},
	methods: {
		emitEvent(name, evt) {
			console.log('emitEvent', { name, evt });

			this.offsetWidth = '0px';

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

			if (this.$attrs.right) {
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
		getLocalStorage(name = this.drawerOptions.storageName) {
			return localStorage.getItem(`vrd-${name}`);
		},
		setLocalStorage(settings = { name: this.drawerOptions.storageName, width: this.drawerOptions.width }) {
			if (!this.drawerOptions.saveWidth) {
				return false;
			}

			const name = `vrd-${settings.name}`;
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

			// Set storage name if not defined //
			const defaultStorageName = `drawer-${this.name}`;
			this.drawerOptions.storageName = this.drawerOptions.storageName || defaultStorageName;

			const storageWidth = this.getLocalStorage(this.drawerOptions.storageName);

			if (this.drawerOptions.saveWidth && storageWidth) {
				this.defaultWidth = this.drawerOptions.width;
				this.drawerOptions.width = this.getLocalStorage(this.drawerOptions.storageName);
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.resize-drawer {
	max-height: 100vh !important;

	&.resize-drawer-overflow-true {
		::v-deep .v-navigation-drawer__content {
			overflow: visible;
		}
	}

	.close-drawer {
		cursor: pointer;
	}
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
	}
}
</style>
