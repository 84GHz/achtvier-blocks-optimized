import edit from './edit';
import save from './save';
const { __ } = wp.i18n; // Import __() from wp.i18n


export const settings = {
  name: "achtvier/better-tile",
  title: __( 'Box Hover Caption' ), // Block title.
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
		showLinkOverlay: {
			type: 'boolean',
			default: 'false'
    },
		linkURL: {
			type: 'string',
    },
		linkText: {
			type: 'string',
		},
		bgColor: {
			type: 'string',
		}

	},

  edit,
  save
};
