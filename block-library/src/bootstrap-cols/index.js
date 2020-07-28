import edit from './edit';
import save from './save';


export const settings = {
  title: "ACHTVIER CONTAINER",
  icon : "editor-insertmore",
  keywords:  ['bootstrap-container','achtvier-container'],
  edit,
  save,
  name: "cgb/block-bootstrap-cols",
  title: ( 'ACHTVIER SPALTE' ), // Block title.

	icon: 'layout', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'layout', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		 'bootstrap-cols' ,
		 'achtvier spalte spalten columns' ,
	],
	attributes: {
		"gridrasterdesktop": {
			"type": 'string',
			"default": ' col-xl-12',
		},
		"gridrastertablet": {
			"type": 'string',
			"default": ' col-md-12',
		},
		"gridrastermobile": {
			"type": 'string',
			"default": ' col-sm-12',
		},
		"coloffsetdesktop": {
			"type": 'string',
			"default": '',
		},
		"containervisibility": {
			"type": 'string',
			"default": '',
		},
	},
};
