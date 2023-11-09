import edit from './edit';
import save from './save';
const { InnerBlocks } = wp.blockEditor;
import deprecated from './deprecated';
const { __ } = wp.i18n; // Import __() from wp.i18n


export const settings = {
  name: "achtvier/slider-mk-2",
  title: __( 'Responsive Slider Mk2' ), // Block title.
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
		},
		slidepaddingTablet : {
			type: 'number',
			default: 0,
		},
		slidepaddingMobile : {
			type: 'number',
			default: 0,
		},
		slidespeed : {
			type: 'number',
			default: 600
		},
		loop: {
			type: 'boolean',
			default: true
		},
		rewind: {
			type: 'boolean',
			default: false
		},
		animateIn : {
			type: 'string'
		},

		animateOut : {
			type: 'string'
		},
		stagePadding:{
			type: 'number',
			default: 0
		},
		stagePaddingTablet:{
			type: 'number',
			default: 0
		},		
		stagePaddingMobile:{
			type: 'number',
			default: 0
		}	,
		stoponhover: {
			type: "boolean",
			default: false
		}
		




  },

  edit,
  save,
  deprecated

};
