module.exports = [
	{
		type: 'input',
		name: 'name',
		message: 'Enter component name...',
	},
	{
		type: 'select',
		name: 'folder',
		message: 'Select component folder...',
		choices: ['behavior', 'control', 'dataview', 'layout', 'typography', 'navigation', 'container', 'feedback'],
	},
	{
		type: 'select',
		name: 'componentType',
		message: 'Select parent type of component...',
		choices: ['View', 'ScrollView', 'Form', 'simple_list', 'FlatList', 'SectionList'],
	},
]
