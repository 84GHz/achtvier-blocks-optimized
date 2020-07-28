import edit from './edit';
import save from './save';
const { __ } = wp.i18n; // Import __() from wp.i18n


export const settings = {
  name: "achtvier/block-achtvier-guten-slider",
  title: __( 'Responsive Owl Slider' ), // Block title.
	icon: 'welcome-view-site', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'slider' ),
	],
	attributes: {
	  slidesdesktop: {
   		type: 'number',
			default: 1,
   	},
	  slidestablet: {
	  	type: 'number',
			default: 1,
	  },
		  slidesmobile: {
	  	type: 'number',
			default: 1,
	  },
		autoplay : {
			type: 'boolean',
			default: false,
		},
		showarrows : {
			type: 'boolean',
			default: false,
		},
		showpoints : {
			type: 'boolean',
			default: false,
		},
		slidepadding : {
			type: 'number',
			default: 0,
		}

  },


  edit,
  save
};
