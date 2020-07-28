import edit from './edit';
import save from './save';
const { __ } = wp.i18n; // Import __() from wp.i18n


export const settings = {
  name: "achtvier/bettertab",
  title: __( 'Dynamic Tab' ),

	parent: [ 'achtvier/bettertabs' ],

	icon: 'columns',

	description: __( 'A single tab within a tabs block.' ),

	category: 'achtvier-blocks',

	supports: {
		inserter: false,
	},
  attributes: {
    id: {
      type: "string",
    },
    active: {
      type: "string",
      default: ""
    }
  },

  edit,
  save
};
