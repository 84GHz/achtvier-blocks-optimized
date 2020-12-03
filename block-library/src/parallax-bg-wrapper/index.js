import edit from './edit';
import save from './save';
const { __ } = wp.i18n; // Import __() from wp.i18n
const { InnerBlocks } = wp.blockEditor;

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
    mobilemediaID: {
			type: 'number',
		},
		mobilemediaURL: {
			type: 'string',
    }, 
    parallaxID: {
			type: 'string',
    },    
 
  },
  migrate: function( attributes ) {
    return {

      mediaID: attributes.mediaID,
      mediaURL: attributes.mediaURL,
      mobilemediaID: attributes.mediaID,
      mobilemediaURL: attributes.mediaURL,
      parallaxID: (+new Date).toString(36).slice(-8)        
      
    };
  },
  deprecated: [
    {
      attributes: {
        mediaID: {
          type: 'number',
        },
        mediaURL: {
          type: 'string',
        }  
    },
    save( props ) {
      return (
    <div className={props.className}
      style={{
        backgroundImage: "url('" + props.attributes.mediaURL + "')"
      }}
     >
     <InnerBlocks.Content />
    </div>
    
    )
    }
  }
  ],
  edit,
  save
};
