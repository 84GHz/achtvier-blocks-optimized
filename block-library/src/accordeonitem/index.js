import edit from './edit';
import save from './save';
const { __ } = wp.i18n; // Import __() from wp.i18n


export const settings = {
  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
  title: __( 'New Accordeon Panel' ),
	parent: [ 'achtvierblocks/newaccordeon' ],
	icon: 'columns',
  name: "achtvierblocks/newaccordeonpanel",
	description: __( 'A single accordeon element' ),
	category: 'achtvier-blocks',
  attributes: {
    accpanelID: {
      type: "string",
    },
		parentID: {
      type: "string",
    },
    panelTitle: {
      type: "string",
    },
  },
  edit,
  save
};
