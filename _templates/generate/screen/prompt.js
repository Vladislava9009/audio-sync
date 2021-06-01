module.exports = [
	{
		type: 'input',
		name: 'name',
		message: 'Enter screen component name...',
	},
	{
		type: 'select',
		name: 'componentType',
		message: 'Select parent type of component...',
		choices: ['ScrollView', 'View', 'Form'],
	},
]
