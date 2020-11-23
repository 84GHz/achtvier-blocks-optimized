import edit from './edit';
import save from './save';
const { InnerBlocks } = wp.blockEditor;

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
		}



  },


  edit,
  migrate: function( attributes ) {
	return {
		slidesdesktop: attributes.slidesdesktop,
		slidestablet: attributes.slidestablet,
		slidesmobile: attributes.slidesmobile,
		autoplay: attributes.autoplay,
		showarrows: attributes.showarrows,
		showpoints: attributes.showpoints,
		slidepadding: attributes.slidepadding,
		slidespeed: 600,
		loop: true,
		rewind: false
	};
},
  deprecated: [
	  { 
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
	  
		},		save (props) {
			return (
				<div className={props.className}
				data-slidesdesktop={props.attributes.slidesdesktop}
				data-slidestablet={props.attributes.slidestablet}
				data-slidesmobile={props.attributes.slidesmobile}
				data-autoplay={props.attributes.autoplay}
				data-showpoints={props.attributes.showpoints}
				data-showarrows={props.attributes.showarrows}
				data-slidepadding={props.attributes.slidepadding}
				>
				<InnerBlocks.Content />
				</div>
			  );
		}
	  },
	  {
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
			  slidespeed : {
				  type: 'number',
				  default: 600
			  },

	  
		},  
		save (props) {
			return (
		<div className={props.className}
		data-slidesdesktop={props.attributes.slidesdesktop}
		data-slidestablet={props.attributes.slidestablet}
		data-slidesmobile={props.attributes.slidesmobile}
		data-autoplay={props.attributes.autoplay}
		data-showpoints={props.attributes.showpoints}
		data-slidespeed={props.attributes.slidespeed}
		data-showarrows={props.attributes.showarrows}
		data-slidepadding={props.attributes.slidepadding}		
		>
		<InnerBlocks.Content />
		</div>
			  );
			}
	  },
	  {
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
		  slidespeed : {
			  type: 'number',
			  default: 600
		  },
		  loop: {
			  type: 'boolean',
			  default: true
		  } 
  
	},  
	save (props) {
		return (
	<div className={props.className}
	data-slidesdesktop={props.attributes.slidesdesktop}
	data-slidestablet={props.attributes.slidestablet}
	data-slidesmobile={props.attributes.slidesmobile}
	data-autoplay={props.attributes.autoplay}
	data-showpoints={props.attributes.showpoints}
	data-slidespeed={props.attributes.slidespeed}
	data-showarrows={props.attributes.showarrows}
	data-slidepadding={props.attributes.slidepadding}
	data-sliderloop={props.attributes.loop}		
	>
	<InnerBlocks.Content />
	</div>
		  );
		}
  }
  ],
  save
};
