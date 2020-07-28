const { InnerBlocks } = wp.blockEditor;

const { __ } = wp.i18n; // Import __() from wp.i18n
const { RichText,  MediaUpload } = wp.blockEditor; // Import registerBlockType() from wp.blocks
const { Button, TextControl } = wp.components;

function AVminiContentEdit (props){
  const {
      setAttributes,
      attributes,
      className,
  } = props;

  const getImageButton = (openEvent) => {
    if(attributes.mediaURL) {
      return (
        <img
          src={ attributes.mediaURL }
          onClick={ openEvent }
          className="image"
        />
      );
    }
    else {
      return (
        <div className="button-container">
          <Button
            onClick={ openEvent }
            className="button button-large"
          >
            Bild auswählen
          </Button>
        </div>
      );
    }
  };

  function onTitleChange(changes) {
      setAttributes({
          title: changes
      });
  }
  function onContentChange(changes) {
      setAttributes({
          content: changes
      });
  }
  function onSelectImage( media ) {
     console.log(media);

    setAttributes( {
      mediaURL: media.sizes.full.url,
      mediaID: media.id,
    } );
    }
    function onSecondaryContentChange(changes) {
      setAttributes({
          secondaryContent: changes
      });
  }

  // Creates a <p class='wp-block-cgb-block-achtvier-guten-mini-content'></p>.
  return (
				         <div className={className} >


		        	<MediaUpload
		        		onSelect={ onSelectImage }
			        	value={ attributes.imageID }
				        render={ ( { open } ) => (
				      	<Button onClick={ open }>
				      		Open Media Library
			      		</Button>
			      	) }
			/>

										 <TextControl
				                 tagName="h3"
				                 value={attributes.title}
				                 onChange={onTitleChange}
				                 placeholder="Titel!"
				                 />
												 <RichText
														 tagName="p"
														 value={attributes.content}
														 onChange={onContentChange}
														 placeholder="inhalt!"
														 />
												 <RichText
														 tagName="p"
      											 value={attributes.secondaryContent}
														 onChange={onSecondaryContentChange}
														 placeholder="Zusatzinhalt!"
														 className={"bottom-content"}
													 />
				         </div>
  );
}
export default AVminiContentEdit;
