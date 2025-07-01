<template>
	<v-row>
		<v-col
			id="events"
			cols="12"
		>
			<h2 :class="classes.h2">
				<a
					:class="classes.headerA"
					href="#events"
				>#</a>
				Events
			</h2>
		</v-col>

		<v-col cols="12">
			<v-row>
				<v-col cols="12">
					<v-card>
						<v-data-table
							:headers="headers"
							hide-default-footer
							:items="items"
							items-per-page="25"
						>
							<template #item="{ item }">
								<tr>
									<td>
										<span
											:id="`events-${item.name}`"
											class="name-item text-mono ml-n2"
										>
											<span class="text-primary">#</span>
											<a
												class="text-primary"
												:class="classes.appLink"
												:href="`#events-${item.name}`"
											>
												{{ item.name }}
											</a>
										</span>
									</td>

									<td><span v-html="item.desc"></span></td>
								</tr>
							</template>
						</v-data-table>
					</v-card>
				</v-col>
			</v-row>
		</v-col>

		<v-col cols="12">
			<VCodeBlock
				class="mb-6"
				:code="responseCode"
				:highlightjs="codeBlockSettings.plugin === 'highlightjs'"
				label="Mouse and Touch Events response object:"
				lang="html"
				:prismjs="codeBlockSettings.plugin === 'prismjs'"
				:theme="codeBlockSettings.theme"
			>
				<template #label>
					<code class="ic">@submit</code> Event Example
				</template>
			</VCodeBlock>
		</v-col>
	</v-row>
</template>


<script setup lang="ts">
const codeBlockSettings = inject<Docs.CodeBlockSettings>('codeBlockSettings')!;
const classes = inject<Docs.GlobalClasses>('classes')!;

const headers = [
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
		key: 'desc',
		sortable: false,
		title: 'Description',
	},
];
const items = [
	{
		desc: 'Emits event object when the drawer is closed.',
		name: 'close',
	},
	{
		desc: 'Emits event when mouse enters the drawer.',
		name: 'drawer:mouseenter',
	},
	{
		desc: 'Emits event when mouse leaves the drawer.',
		name: 'drawer:mouseleave',
	},
	{
		desc: 'Emits event object when handle is clicked.',
		name: 'handle:click',
	},
	{
		desc: 'Emits event object when handle is double clicked, and resets the drawer width to it\'s original width. <span class="text-danger">*</span> Does not work on touch devices.',
		name: 'handle:dblclick',
	},
	{
		desc: 'Emits event object when handle is dragged.',
		name: 'handle:drag',
	},
	{
		desc: 'Emits event object when mouse down on handle.',
		name: 'handle:mousedown',
	},
	{
		desc: 'Emits event object when mouse up on handle.',
		name: 'handle:mouseup',
	},
	{
		desc: 'Emits event object when touch has ended on handle.',
		name: 'handle:touchend',
	},
	{
		desc: 'Emits event object when handle is dragged.',
		name: 'handle:touchmove',
	},
	{
		desc: 'Emits event object when touch has started on handle.',
		name: 'handle:touchstart',
	},
	{
		desc: 'Emits event object when transition is complete.',
		name: 'transitionend',
	},
	{
		desc: 'Event that is emitted when the component\'s model changes',
		name: 'update:modelValue',
	},
];

const responseCode = `{
  e: MouseEvent | TouchEvent,
  eventName: string,
  offsetWidth: string,
  resizedWidth: string,
  width: string,
}`;
</script>
