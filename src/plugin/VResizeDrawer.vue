<template>
	<v-navigation-drawer
		v-bind="$attrs"
		ref="resizeDrawer"
		:class="drawerClasses"
		:stateless="stateless"
		:style="drawerStyles"
		:tag="tag"
		:value="value"
		:width="drawerWidth"
	>
		<!-- Resize handle -->
		<div
			v-if="isResizable"
			:class="handleContainerClasses"
			:style="handleContainerStyles"
			@click="handleClick"
			@dblclick="handleDoubleClick"
			@mousedown="handleMouseDown"
			@mouseup="handleMouseUp"
		>
			<template v-if="$scopedSlots.handle">
				<div class="v-resize-drawer--handle-slot">
					<slot name="handle"></slot>
				</div>
			</template>

			<v-icon
				v-else-if="handlePosition !== 'border'"
				class="v-resize-drawer--handle-icon"
				:class="handleIconClasses"
				:large="handleIconSize === 'large'"
				:medium="handleIconSize === 'medium'"
				:small="handleIconSize === 'small'"
				:style="handleIconStyles"
				:x-large="handleIconSize === 'x-large'"
				:x-small="handleIconSize === 'x-small'"
			>
				{{ theHandleIcon }}
			</v-icon>
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
import Vuetify, { VNavigationDrawer } from 'vuetify/lib';
import Applicationable from 'vuetify/lib/mixins/applicationable';
import mixins from 'vuetify/lib/util/mixins';
import {
	useGetStorage,
	useSetStorage,
} from './composables/storage';
import {
	useHandleContainerClasses,
	useHandleIconClasses,
	useDrawerClasses,
} from './composables/classes';
import {
	useDrawerStyles,
	useHandleContainerStyles,
	useHandleIconStyles,
} from './composables/styles';
import {
	useConvertToNumber,
	useConvertToUnit,
} from './composables/helpers';
import { useGetIcon } from './composables/icons';

Vue.use(Vuetify);

const baseMixins = mixins(
	Applicationable('left', [
		'drawerWidth',
	]),
);

export default baseMixins.extend({
	extends: VNavigationDrawer,
	name: 'v-resize-drawer',
	props: {
		handleBorderWidth: {
			default: 8,
			required: false,
			type: [Number, String],
		},
		handleColor: {
			default: 'primary',
			type: String,
		},
		handleIcon: {
			default: undefined,
			type: String,
		},
		handleIconSize: {
			default: 'x-small',
			type: String,
		},
		handlePosition: {
			default: 'center',
			type: String,
		},
		minWidth: {
			default: 56,
			required: false,
			type: [Number, String],
		},
		maxWidth: {
			default: '100%',
			required: false,
			type: [Number, String],
		},
		resizable: {
			default() {
				return !this.isMiniVariant;
			},
			type: Boolean,
		},
		saveWidth: {
			default: true,
			type: Boolean,
		},
		storageName: {
			default: 'v-resize-drawer-width',
			type: String,
		},
		storageType: {
			default: 'local',
			type: String,
		},
		tag: {
			default: 'nav',
			type: String,
		},
		width: {
			default: 256,
			required: false,
			type: [Number, String],
		},
		widthSnapBack: {
			default: true,
			type: Boolean,
		},
	},
	data: () => ({
		componentName: 'v-resize-drawer',
		defaultWidth: 256,
		handleEvents: {
			mouseDown: false,
			mouseUp: true,
		},
		loading: false,
		resizedWidth: 256,
	}),
	computed: {
		drawerClasses() {
			const classes = useDrawerClasses({
				absolute: this.absolute,
				app: this.app,
				bottom: this.bottom,
				clipped: this.clipped,
				expandOnHover: this.expandOnHover,
				fixed: this.fixed,
				floating: this.floating,
				isActive: this.isActive,
				isMiniVariant: this.isMiniVariant,
				isMobile: this.isMobile,
				isMouseOver: this.isMouseover,
				miniVariantWidth: this.miniVariantWidth,
				right: this.right,
				temporary: this.temporary,
			});

			return classes;
		},
		drawerStyles() {
			const windowHeight = window.innerHeight;

			const styles = useDrawerStyles({
				height: this.height,
				isMiniVariant: this.isMiniVariant,
				isMouseDown: this.isMouseDown,
				maxWidth: this.maxWidth,
				minWidth: this.minWidth,
				miniVariantWidth: this.miniVariantWidth,
				resizedWidth: this.resizedWidth,
				// ? computedTop comes from VNavigationDrawer component //
				top: this.computedTop,
				transform: `translateX(${useConvertToUnit({ str: this.computedTransform, unit: '%' })})`,
				widthSnapBack: this.widthSnapBack,
				windowHeight,
			});

			return styles;
		},
		drawerWidth() {
			return useConvertToUnit({ str: this.resizedWidth });
		},
		handleContainerClasses() {
			const parentPosition = this.right ? 'right' : 'left';

			return useHandleContainerClasses({
				handlePosition: this.handlePosition,
				isHandleSlot: this.$scopedSlots.handle,
				parentPosition,
			});
		},
		handleIconClasses() {
			const parentPosition = this.right ? 'right' : 'left';

			return useHandleIconClasses({
				handlePosition: this.handlePosition,
				iconfont: this.$vuetify.theme.framework.icons.iconfont,
				isUserIcon: typeof this.handleIcon !== 'undefined' && this.handleIcon !== null,
				parentPosition,
			});
		},
		handleIconStyles() {
			const styles = useHandleIconStyles({
				color: this.handleColor,
				theme: this.$vuetify.theme,
			});

			return styles;
		},
		handleContainerStyles() {
			const styles = useHandleContainerStyles({
				borderWidth: this.handleBorderWidth,
				handleColor: this.handleColor,
				iconSize: this.handleIconSize,
				position: this.handlePosition,
				theme: this.$vuetify.theme,
			});

			return styles;
		},
		isResizable() {
			return this.resizable && !this.miniVariant && !this.expandOnHover;
		},
		theHandleIcon() {
			const icon = useGetIcon({
				icon: this.handleIcon,
				iconfont: this.$vuetify.theme.framework.icons.iconfont,
				position: this.handlePosition,
			});

			return icon;
		},
	},
	watch: {
		isMouseover: {
			deep: true,
			handler(val) {
				if (this.miniVariant && this.expandOnHover) {
					this.resizedWidth = val ? this.width : this.miniVariantWidth;
				}
			},
		},
		miniVariant: {
			deep: true,
			handler(val) {
				let width = this.width;

				if (this.saveWidth) {
					width = this.getLocalStorage();
				}

				this.resizedWidth = !val ? width : this.miniVariantWidth;
			},
		},
	},
	mounted() {
		this.setup();
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
		checkMaxMinWidth(width) {
			let returnWidth = useConvertToNumber(width);
			const maxWidth = useConvertToNumber(this.maxWidth);
			const minWidth = useConvertToNumber(this.minWidth);

			if (returnWidth >= maxWidth) {
				returnWidth = maxWidth;
			}

			if (minWidth >= returnWidth) {
				returnWidth = minWidth;
			}

			return returnWidth;
		},
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

			this.resizedWidth = useConvertToUnit({ str: width });

			if (!this.widthSnapBack) {
				this.resizedWidth = this.checkMaxMinWidth(this.resizedWidth);
			}

			document.body.style.cursor = 'grabbing';

			this.emitEvent('handle:drag', el);
		},
		emitEvent(name, evt) {
			const drawerData = {
				eventName: name,
				evt,
				resizedWidth: this.resizedWidth,
				width: this.resizedWidth,
			};

			this.$emit(name, drawerData);
		},
		genListeners() {
			const drawer = this.$refs?.resizeDrawer?.$el;

			if (drawer) {
				drawer.addEventListener('mouseenter', this.drawerMouseenter, false);
				drawer.addEventListener('mouseleave', this.drawerMouseleave, false);
			}
		},
		getLocalStorage() {
			return localStorage.getItem(this.storageName);
		},
		handleClick(evt) {
			this.emitEvent('handle:click', evt);
		},
		handleDoubleClick(evt) {
			this.resizedWidth = this.defaultWidth;
			this.setLocalStorage();

			this.emitEvent('handle:dblclick', evt);
		},
		handleMouseDown(e) {
			e.preventDefault();
			e.stopPropagation();
			let offsetX = 25;

			this.isMouseDown = true;

			if (this.handlePosition === 'border') {
				offsetX = this.handleBorderWidth;
			}

			this.handleEvents.mouseUp = false;

			if (e.offsetX < offsetX) {
				document.addEventListener('mousemove', this.drawerResize, false);
			}

			if (!this.handleEvents.mouseDown) {
				this.handleEvents.mouseDown = true;
				document.addEventListener('mouseup', this.handleMouseUp, false);
				this.emitEvent('handle:mouseup', e);
			}
		},
		handleMouseUp(e) {
			e.preventDefault();
			e.stopPropagation();

			const drawer = this.$refs.resizeDrawer.$el;

			this.isMouseDown = false;
			this.handleEvents.mouseDown = false;
			this.resizedWidth = drawer?.offsetWidth ?? this.defaultWidth;

			document.body.style.cursor = '';

			this.resizedWidth = this.checkMaxMinWidth(this.resizedWidth);
			this.resizedWidth = useConvertToUnit({ str: this.resizedWidth }) || undefined;

			useSetStorage({
				miniVariant: this.miniVariant,
				resizedWidth: this.resizedWidth,
				saveWidth: this.saveWidth,
				storageName: this.storageName,
				storageType: this.storageType,
			});

			if (!this.handleEvents.mouseUp) {
				this.handleEvents.mouseUp = true;

				document.removeEventListener('mouseup', this.handleMouseUp, false);
				document.removeEventListener('mousemove', this.drawerResize, false);
				this.emitEvent('handle:mouseup', e);
			}
		},
		setLocalStorage(action = 'update') {
			if (!this.saveWidth || this.miniVariant || this.expandOnHover) {
				return false;
			}

			let width = this.resizedWidth;
			width = width ?? undefined;

			if (action === 'set') {
				width = this.getLocalStorage();
				width = width || this.resizedWidth;
			}

			localStorage.setItem(this.storageName, width);

			return width;
		},
		setup() {
			// Disable resize if mini-variant is set //
			if (this.isMiniVariant) {
				this.resizedWidth = this.miniVariantWidth || undefined;
				return false;
			}

			const storageWidth = useGetStorage(this.storageType, this.storageName);
			const width = useConvertToUnit({ str: this.width });
			this.resizedWidth = width;
			this.defaultWidth = this.resizedWidth;

			if (this.saveWidth && storageWidth && !this.isMiniVariant) {
				this.resizedWidth = useGetStorage(this.storageType, this.storageName);
			}

			this.genListeners();

			useSetStorage({
				action: 'update',
				miniVariant: this.miniVariant,
				resizedWidth: this.resizedWidth,
				saveWidth: this.saveWidth,
				storageName: this.storageName,
				storageType: this.storageType,
			});

			return false;
		},
		updateApplication() {
			if (
				!this.isActive ||
				this.isMobile ||
				this.temporary ||
				!this.$el
			) return 0;

			let newWidth = this.drawerWidth;

			if (!this.miniVariant && this.expandOnHover) {
				newWidth = this.width;
			}

			if (this.miniVariant && this.expandOnHover) {
				newWidth = this.miniVariantWidth;
			}

			const intWidth = typeof newWidth === 'number' ? newWidth : newWidth.replace('px', '');

			return intWidth;
		},
	},
});
</script>

<style lang="scss" scoped>
.v-resize-drawer {
	&--handle {
		&-container {
			cursor: grab;
			align-items: center;
			display: flex;
			justify-content: center;
			position: absolute;
			z-index: 1;

			&-icon {
				&-parent {
					&-end,
					&-right {
						left: initial;
						right: 0;
					}
				}

				&-center {
					&-end,
					&-right {
						transform: rotate(180deg);
					}
				}

				&-user-icon {
					transform: none;
				}

				&-fa {
					font-size: .7rem !important;
				}
			}

			&-parent {
				&-left,
				&-start,
				&-undefined {
					right: 0;
				}

				&-end,
				&-right {
					left: 0;
				}
			}

			&-position {
				&-top {
					top: 0;
				}

				&-center {
					top: 50%;
					transform: translateY(-50%);
				}

				&-bottom {
					bottom: 0;
				}

				&-border {
					cursor: col-resize;
					height: 100%;
					top: 0;
					width: 8px;
				}
			}
		}
	}
}
</style>
