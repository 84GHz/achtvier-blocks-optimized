const { __ } = wp.i18n; // Import __() from wp.i18n
const {
	InspectorAdvancedControls,
	InspectorControls,
	InnerBlocks,
	MediaUpload,
} = wp.blockEditor;
const { Button, PanelBody } = wp.components;
const { Fragment } = wp.element;


function AVParallaxBgEdit (props){
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
 function onSelectImage( media ) {
   setAttributes( {
     mediaURL: media.url,
     mediaID: media.id,
   } );
 }
 return (
   <Fragment>
   <InspectorControls>
     <PanelBody title={ __( 'Parallax Settings' ) }>
     <MediaUpload
       onSelect={ onSelectImage }
       type="image"
       value={ props.attributes.imageID }
       render={ ({ open }) => getImageButton(open) }
     />
     </PanelBody>
   </InspectorControls>

   <div className={props.className}
   style={{
       backgroundImage: "url('" + props.attributes.mediaURL + "')"
   }}>
   >
     <InnerBlocks/>
     <label>achtvier-parallax-tile</label>
   </div>
   </Fragment>
 );
}
export default AVParallaxBgEdit;
