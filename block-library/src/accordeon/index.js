import edit from './edit';
import save from './save';
const { __ } = wp.i18n; // Import __() from wp.i18n


export const settings = {
  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
  title: __( 'Accordeon' ), // Block title.
  name: "achtvierblocks/newaccordeon",
  icon: 'list-view',
  category: 'achtvier-blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
  keywords: [
    __( 'accordeon' ),
  ],
  attributes: {
			accordeonID: {
				type: 'string',
			},
			accordeonOn: {
				type: 'boolean',
				default: true

			},
	},
  edit,
  save
};
