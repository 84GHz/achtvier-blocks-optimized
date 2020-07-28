import edit from './edit';
import save from './save';
const { __ } = wp.i18n; // Import __() from wp.i18n


export const settings = {
  name: "achtvier/parallax-bg-wrapper",
  title: __( 'Parallax Background Wrapper' ),

  description: __( 'A div wrapper with a parallax Background' ),

  category: 'achtvier-blocks',

  attributes: {
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
