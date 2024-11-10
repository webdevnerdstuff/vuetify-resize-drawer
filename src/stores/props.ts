import { defineStore } from 'pinia';
// import { useCoreStore } from './';


export const usePropsStore = defineStore('props', () => {
	// const { links } = useCoreStore();

	const propsHeaders = [
		{
			align: 'start',
			filterable: true,
			key: 'name',
			sortable: true,
			title: 'Name',
			width: '20%',
		},
		{
			align: 'start',
			filterable: false,
			key: 'type',
			sortable: false,
			title: 'Type',
			width: '20%',
		},
		{
			align: 'start',
			filterable: false,
			key: 'default',
			sortable: false,
			title: 'Default',
		},
		{
			align: 'start',
			filterable: false,
			key: 'desc',
			sortable: false,
			title: 'Description',
		},
	];

	const componentProps = [
		{
			default: '8',
			desc: 'Specifies the width of the handle if the handle position <code class="ic">border</code> is selected.',
			name: 'handle-border-width',
			type: 'string | number',
		},
		{
			default: 'primary',
			desc: 'Determines the color of the handle',
			name: 'handle-color',
			type: 'string',
		},
		{
			default: 'undefined',
			desc: 'Determines the icon of the handle',
			name: 'handle-icon',
			type: 'string',
		},
		{
			default: 'x-small',
			desc: 'Sets the height and width of the icon. Default unit is px. Can also use the following predefined sizes: <code class="ic">x-small</code>, <code class="ic">small</code>, <code class="ic">default</code>, <code class="ic">large</code>, and <code class="ic">x-large</code>',
			name: 'handle-icon-size',
			type: 'string',
		},
		{
			default: 'center',
			desc: 'Specifies the position of the handle. Valid values are <code class="ic">border</code>, <code class="ic">center</code>, <code class="ic">top</code>, <code class="ic">bottom</code>. If <code class="ic">location</code> prop is set to <code class="ic">top</code> or <code class="ic">bottom</code>, the handle position <code class="ic">top</code> and <code class="ic">bottom</code> are not allowed.',
			name: 'handle-position',
			type: "'bottom' | 'border' | 'center' | 'top'",
		},
		{
			default: 'start',
			desc: 'Places the navigation drawer position on the the screen.',
			name: 'location',
			type: "'bottom' | 'end' | 'start' | 'left' | 'right' | 'top' | undefined",
		},
		{
			default: '100%',
			desc: 'The maximum height of the navigation drawer. Accepts: number, px, or %',
			name: 'max-height',
			type: 'string',
		},
		{
			default: '100%',
			desc: 'The maximum width of the navigation drawer. Accepts: number, px, or %',
			name: 'max-width',
			type: 'string',
		},
		{
			default: '56',
			desc: 'The minimum height of the navigation drawer. Accepts: number, px, or %',
			name: 'min-height',
			type: 'string',
		},
		{
			default: '56',
			desc: 'The minimum width of the navigation drawer. Accepts: number, px, or %',
			name: 'min-width',
			type: 'string',
		},
		{
			default: 'true',
			desc: 'Enables resize functionality',
			name: 'resizable',
			type: 'boolean',
		},
		{
			default: 'true',
			desc: 'Determines if the width of the component is saved in local/session storage',
			name: 'save-width',
			type: 'boolean',
		},
		{
			default: 'true',
			desc: 'Determines if the width or height of the navigation drawer should snap back if the <code class="ic">min-width</code>, <code class="ic">max-width</code>, <code class="ic">min-height</code> or <code class="ic">max-height</code> prop values pass their respective thresholds. (previously <code class="ic">width-snap-back</code>. Backwards compatible)',
			name: 'snap-back',
			type: 'boolean',
		},
		{
			default: 'v-resize-drawer-width',
			desc: 'Determines the name of the local/session storage item. The value is appended with the <code class="ic">location</code> prop value.',
			name: 'storage-name',
			type: 'string',
		},
		{
			default: 'local',
			desc: 'Determines the type of storage to use when the <code class="ic">save-width</code> is <code class="ic">true</code>. Valid values are <code class="ic">local</code> and <code class="ic">session</code>',
			name: 'storage-type',
			type: "'local' | 'session'",
		},
		{
			default: 'false',
			desc: 'Hides the resize handle on mobile devices. <br /><span class="text-danger">*</span> The <code class="ic">touchless</code> prop does not function the same as the <code class="ic">v-navigation-drawer</code> prop which is not supported',
			name: 'touchless',
			type: 'boolean',
		},
	];

	const propsNotSupportedHeaders = [
		{
			align: 'start',
			filterable: true,
			key: 'name',
			sortable: false,
			title: 'Name',
			width: '15%',
		},
		{
			align: 'start',
			filterable: false,
			key: 'status',
			sortable: false,
			title: 'Status',
			width: '10%',
		},
		{
			align: 'start',
			filterable: false,
			key: 'notes',
			sortable: false,
			title: 'Notes',
		},
	];

	const propsNotSupported = [
		{
			name: 'disable-route-watcher',
			notes: 'An environment that uses routes is needed to test',
			status: '',
		},
		{
			name: 'expand-on-hover',
			notes: 'The <code class="ic">expand-on-hover</code> prop will work, but the resizable functionality is disabled',
			status: 'partial support',
		},
		{
			name: 'rail',
			notes: 'The <code class="ic">rail</code> prop will work, but the resizable functionality is disabled',
			status: 'partial support',
		},
		{
			name: 'rail-width',
			notes: 'The <code class="ic">rail-width</code> prop for use with the <code class="ic">rail</code> prop will work, but the resizable functionality is disabled',
			status: 'partial support',
		},
	];


	return {
		componentProps,
		propsHeaders,
		propsNotSupported,
		propsNotSupportedHeaders,
	};
});
