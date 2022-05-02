<template>
	<v-navigation-drawer
		:app="app"
		ref="resizeDrawer"
		v-model="drawerOptions.open"
		class="resize-drawer"
		:class="`resize-drawer-overflow-${drawerOptions.overflow}`"
		:absolute="drawerOptions.absolute"
		:bottom="drawerOptions.bottom"
		:fixed="drawerOptions.fixed"
		:right="drawerPosition"
		:src="drawerOptions.src"
		:tag="drawerOptions.tag"
		:temporary="drawerOptions.temporary"
		:width="drawerOptions.width"
		:style="`padding-top: ${drawerOptions.paddingTop}`"
		@transitionend="$emit('transitionend', $event)"
		@input="drawerInput"
	>
		<!-- Resize handle -->
		<div
			v-if="drawerOptions.resizable"
			class="handle-container d-flex"
			:class="{ [handleContainerClass]: drawerOptions.handle.position }"
			:style="handleContainerStyle"
			@dblclick="handleDoubleClick"
			@mousedown="handleMouseDown"
			@mouseup="handleMouseUp"
			@click="handleClick"
		>
			<!-- Icon -->
			<div
				v-if="
					drawerOptions.handle.position === 'border' ||
					drawerOptions.handle.position === 'left' ||
					drawerOptions.handle.position === 'right' ||
					drawerOptions.handle.position === 'center'
				"
				class="
					handle-container-icon
					d-flex
					align-items-center
					justify-content-center
				"
				:class="{
					[`handle-container-${drawerOptions.handle.position}-icon`]:
						drawerOptions.handle.position,
				}"
			>
				<slot v-if="$scopedSlots.handle" name="handle"></slot>
				<div v-else>&raquo;</div>
			</div>

			<!-- Lines -->
			<div v-else class="handle-container-lines"></div>
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
						'float-end': drawerOptions.position === 'right',
						'float-start': drawerOptions.position !== 'right',
					}"
					class="close-drawer float-end v-icon fa-fw"
					:icon="['fas', 'times']"
					@click="drawerClose"
				>
					mdi-close
				</v-icon>

				<!-- Drawer Title -->
				<slot v-if="$scopedSlots.title" name="title"></slot>
				<h3 v-else>{{ drawerOptions.title }}</h3>
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
		app: {
			required: false,
		},
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
			absolute: false,
			bottom: false,
			fixed: true,
			handle: {
				background: {
					dark: '#555',
					light: '#ccc',
				},
				/*
				 * Positions of the resize handle
				 ? @value: 'top' 		- top of the drawer
				 ? @value: 'center' - center along border of the drawer
				 ? @value: 'border' - border of the drawer
				 ? @value: 'left' 	- border of the drawer
				 ? @value: 'right' 	- border of the drawer
				*/
				position: 'center',
			},
			icon: '',
			iconColor: '',
			open: true,
			overlayColor: '',
			overlayOpacity: '',
			paddingTop: '0',
			position: 'left',
			overflow: false,
			resizable: true,
			saveWidth: true,
			showCloseIcon: true,
			src: '',
			storageName: 'vuetify-resize-drawer',
			tag: 'nav',
			temporary: false,
			title: '',
			width: '256px',
			widthDefault: '256px',
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
		containerClass() {
			const position = this.drawerOptions.handle.position;
			let className = '';

			if (position === 'center' || position === 'border' || position === 'left' || position === 'right') {
				const paddingSide = this.drawerOptions.position === 'left' ? 'e' : 's';
				className += ` p${paddingSide}-8`;
			}

			return className;
		},
		drawerPosition() {
			return this.drawerOptions.position === 'right';
		},
		handleContainerClass() {
			const options = this.drawerOptions;
			let className = `handle-container-${options.handle.position}`;

			if (options.handle.position === 'border' || options.handle.position === 'left' || options.handle.position === 'right' || options.handle.position === 'center') {
				className += ' align-center justify-center';
			}

			// Parent //
			className += ` handle-container-parent-${options.position}`;

			return className;
		},
		handleContainerStyle() {
			const options = this.drawerOptions;
			const color = this.isDark ? options.handle.background.dark : options.handle.background.light;
			let styles = `border-${options.handle.position}-color: ${color};`;

			if (options.handle.position === 'left' || options.handle.position === 'right' || options.handle.position === 'border') {
				styles = `
					background-color: ${color};
					color: ${color};
				`;
			}

			if (options.handle.position === 'center') {
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
		'drawerOptions.open': {
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

			if (this.drawerOptions.position === 'right') {
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

		&-border,
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
