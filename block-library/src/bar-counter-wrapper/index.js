import edit from './edit';
import save from './save';
const { __ } = wp.i18n; // Import __() from wp.i18n


export const settings = {
  name: "achtvier/counter-wrapper",
  title: __( 'Counter Wrapper' ),

  icon: 'columns',

  description: __( 'A counter wrapper with trigger functionality' ),

  category: 'achtvier-blocks',

  attributes: {
    scrollspy: {
      type: 'boolean',
      default: false
    }
  },

  edit,
  save
};
