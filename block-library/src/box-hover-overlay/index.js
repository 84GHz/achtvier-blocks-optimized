import edit from './edit';
import save from './save';
const { __ } = wp.i18n; // Import __() from wp.i18n


export const settings = {
  name: "achtvier/overlay-tile",
  title: __( 'Overlay tile' ), // Block title.
	category: 'achtvier-blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'achtvier-kachel' ),
	],
	attributes: {

		mediaID: {
			type: 'number',
		},
		mediaURL: {
			type: 'string',
    },
		linkURL: {
			type: 'string',
    },
		linkText: {
			type: 'string',
		},

		showLink: {
			type: 'boolean',
		},


	},

  edit,
  save
};
