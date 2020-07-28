const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const {
	RichText,
	InspectorAdvancedControls,
	InspectorControls,
	InnerBlocks,
	BlockControls,
	MediaUpload,

} = wp.blockEditor;
const { Button, TextControl,	PanelBody, ToggleControl, TextControls, ColorPicker } = wp.components;
const { Fragment } = wp.element;

function AVBoxOverlayEdit (props){
  // Creates a <p class='wp-block-cgb-block-achtvier-kachel'></p>.
  const getImageButton = (openEvent) => {
return (
  <div className="button-container">
    <Button
      onClick={ openEvent }
      className="button button-large"
     >
       HGBild
     </Button>
   </div>
 );

};

const {
  setAttributes,
  attributes,
  className,
} = props;

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
  function onLinkURLChange(changes) {
      setAttributes({
          linkURL: changes
      });
  }
  function onLinkTextChange(changes) {
      setAttributes({
          linkText: changes
      });
  }
  function onShowLinkChange(changes) {
      setAttributes({
          showLink: changes
      });
  }
  function onOverlayColorChange(changes) {
      setAttributes({
          overlayColor: "rgba(" + changes.rgb.r + "," + changes.rgb.g + "," + changes.rgb.b + "," + changes.rgb.a + ")",
          overlayTransparency: changes.rgb.a
      });
  }
  function onSelectImage( media ) {
    setAttributes( {
      mediaURL: media.url,
      mediaID: media.id,
    } );
  }
  return (
    <Fragment>
    <InspectorControls>
      <PanelBody title={ __( 'Kacheleinstellungen' ) }>
      <MediaUpload
        onSelect={ onSelectImage }
        type="image"
        value={ props.attributes.imageID }
        render={ ({ open }) => getImageButton(open) }
      />
        <ToggleControl
          label={ __( 'Show link' ) }
          checked={ attributes.showLink }
          onChange={ onShowLinkChange }
        />

        <TextControl
          label={ __( 'Link URL' ) }
          value={ attributes.linkURL }
          onChange={ onLinkURLChange }
        />
        <TextControl
          label={ __( 'Link text' ) }
          value={ attributes.linkText }
          onChange={ onLinkTextChange }
        />


      </PanelBody>
    </InspectorControls>

    <div className={props.className}
    style={{
        backgroundImage: "url('" + props.attributes.mediaURL + "')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }}>
    >


    <div className="overlay-wrapper">
      <InnerBlocks/>
    </div>
    <label>achtvier-overlay-tile</label>
    </div>
    </Fragment>


  );

}
export default AVBoxOverlayEdit;
