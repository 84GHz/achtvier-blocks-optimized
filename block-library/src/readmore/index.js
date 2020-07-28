import edit from './edit';
import save from './save';
const { __ } = wp.i18n; // Import __() from wp.i18n


export const settings = {
  name: "achtvier/read-more",
	title: __( 'Read more on Mobile' ), // Block title.
	category: 'achtvier-blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'read-more-mobile' ),
	],
	attributes: {

		slideSpeed: {
			type: 'number',
      default: 100
		},
		heightOnMobile: {
			type: 'number',
			default: 20,
		},
		triggerText: {
			type: 'string',
			default: 'Read more...',
		},
	},

  edit,
  save
};
