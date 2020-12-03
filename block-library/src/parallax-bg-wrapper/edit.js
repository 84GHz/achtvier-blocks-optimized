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
  if (typeof(props.attributes.parallaxID)=="undefined") {
  
    props.setAttributes({ parallaxID: (+new Date).toString(36).slice(-8) });
    console.log(props.attributes);
   }
   
  const getImageButton = (openEvent, caption) => {
  return (
    <div className="button-container">
      <Button
       onClick={ openEvent }
       className="button button-large"
      >
        { caption }
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
 function onSelectMobileImage( media ) {
  setAttributes( {
    mobilemediaURL: media.url,
    mobilemediaID: media.id,
  } );
}

 return (
   <Fragment>
   <InspectorControls>
     <PanelBody title={ __( 'Parallax Settings' ) }>
     <MediaUpload
       onSelect={ onSelectImage }
       type="image"
       value={ props.attributes.mediaID }
       render={ ({ open }) => getImageButton(open, 'HGDesktop') }
     />
      <MediaUpload
       onSelect={ onSelectMobileImage }
       type="image"
       value={ props.attributes.mobilemediaID }
       render={ ({ open }) => getImageButton(open, 'HGMobil') }
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
