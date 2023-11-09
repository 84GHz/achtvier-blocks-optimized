const {
	InnerBlocks,

} = wp.blockEditor;

const deprecated = [
    {
        migrate(attributes){
            if ( ! attributes.stagePadding ) {
                attributes = {
                    ...attributes,
                    stagePadding: "0",
                };
            }
            if ( ! attributes.stagePaddingTablet ) {
                attributes = {
                    ...attributes,
                    stagePaddingTablet: "0",
                };
            } 
            if ( ! attributes.stagePaddingMobile ) {
                attributes = {
                    ...attributes,
                    stagePaddingMobile: "0",
                };
            }
            if ( ! attributes.slidepaddingTablet ) {
                attributes = {
                    ...attributes,
                    slidepaddingTablet: "0",
                };
            }
            if ( ! attributes.slidepaddingMobile ) {
                attributes = {
                    ...attributes,
                    slidepaddingMobile: "0",
                };
            }
            if ( ! attributes.stoponhover ) {
                attributes = {
                    ...attributes,
                    stoponhover: "false",
                };
            }
            return {
                ...attributes,
            };
        },
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
              },
              animateIn : {
                  type: 'string'
              },
      
              animateOut : {
                  type: 'string'
              },
	
      
      
      
        },
        

        save({attributes, className}) {
            return (
                <div className={className}
                data-slidesdesktop={attributes.slidesdesktop}
                data-slidestablet={attributes.slidestablet}
                data-slidesmobile={attributes.slidesmobile}
                data-autoplay={attributes.autoplay}
                data-showpoints={attributes.showpoints}
                data-slidespeed={attributes.slidespeed}
                data-showarrows={attributes.showarrows}
                data-slidepadding={attributes.slidepadding}
                data-sliderloop={attributes.loop}
                data-rewind={attributes.rewind}
                data-inanimation={attributes.animateIn}
                data-outanimation={attributes.animateOut}
                >
                <InnerBlocks.Content />
                </div>
              );
        }
    }
]
export default deprecated;