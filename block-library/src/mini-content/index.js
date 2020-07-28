import edit from './edit';
import save from './save';
const { __ } = wp.i18n; // Import __() from wp.i18n


export const settings = {
  name: "achtvierblocks/better-mini-content",
  title: __( 'better-mini-content' ), // Block title.
	icon: 'media-document', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'achtvier-blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'better-mini-content' ),
	],
	attributes: {
			title: {
				type: 'array',
				source: 'children',
				selector: 'h3'
			},
			content: {
				type: 'array',
				source: 'children',
				selector: 'p'
			},
			secondaryContent: {
				type: 'array',
				source: 'children',
				selector: 'p.bottom-content'
			},


		mediaID: {
			type: 'number',
		},
		mediaURL: {
			type: 'string',
    },
	},  

  edit,
  save
};
