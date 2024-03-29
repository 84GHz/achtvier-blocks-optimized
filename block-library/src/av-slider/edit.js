const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const {
	RichText,
	InspectorAdvancedControls,
	InspectorControls,
	InnerBlocks,
	BlockControls,
} = wp.blockEditor;
const {
	Panel,
	PanelBody,
	TextareaControl,
	TextControl,
	Dashicon,
	Toolbar,
	Button,
	Tooltip,
	RangeControl,
	ToggleControl,
} = wp.components;
const { Fragment } = wp.element

function AVSliderEdit (props){
  // Creates a <p class='wp-block-cgb-block-achtvier-guten-slider'></p>.
    const onChangeSlidesDesktop = value => {
      props.setAttributes( { slidesdesktop: value } );
    };
    const onChangeSlidesTablet = value => {
      props.setAttributes( { slidestablet: value } );
    };
    const onChangeSlidesMobil = value => {
      props.setAttributes( { slidesmobile: value } );
    };
  const onChangeAutoplay = value => {
      props.setAttributes( { autoplay: value } );
    };
  const onChangeShowPoints = value => {
      props.setAttributes( { showpoints: value } );
    };
  const onChangeShowArrows = value => {
      props.setAttributes( { showarrows: value } );
    };
  const onChangeSlidePadding = value => {
     props.setAttributes( { slidepadding: value } );
   };
   const onChangeSlideSpeed = value => {
    props.setAttributes( { slidespeed: value } );
  };
   const onChangeLoop = value => {
    props.setAttributes( { loop: value } );
  };
  const onChangeRewind = value => {
    props.setAttributes( { rewind: value } );
  };

  return (
    <Fragment>
  <InspectorControls key="inspector2">

 <PanelBody title={ __( 'Slidereinstellungen' ) } >

    <RangeControl
     label={ __( 'Anzahl Slides Desktop' ) }
     value={ props.attributes.slidesdesktop }
     onChange={ onChangeSlidesDesktop }
      min={ 1 }
      max={ 12 }
  />
    <RangeControl
     label={ __( 'Anzahl Slides Tablet' ) }
     value={ props.attributes.slidestablet }
     onChange={ onChangeSlidesTablet }
      min={ 1 }
      max={ 12 }
  />
      <RangeControl
     label={ __( 'Anzahl Slides Mobil' ) }
     value={ props.attributes.slidesmobile }
     onChange={ onChangeSlidesMobil }
      min={ 1 }
      max={ 12 }
  />
  <RangeControl
 label={ __( 'Margin Slides' ) }
 value={ props.attributes.slidepadding }
 onChange={ onChangeSlidePadding }
  min={ 0 }
  max={ 50 }
/>
  <RangeControl
 label={ __( 'Slide Speed (ms)' ) }
 value={ props.attributes.slidespeed }
 onChange={ onChangeSlideSpeed }
  min={ 0 }
  max={ 15000 }
/>
    <ToggleControl
     label={ __( 'Autoplay' ) }
     checked={ props.attributes.autoplay }
     onChange={ onChangeAutoplay }
  />
  <ToggleControl
   label={ __( 'Punkte Anzeigen' ) }
   checked={ props.attributes.showpoints }
   onChange={ onChangeShowPoints }
/>
<ToggleControl
 label={ __( 'Pfeile Anzeigen' ) }
 checked={ props.attributes.showarrows }
 onChange={ onChangeShowArrows }
/>
<ToggleControl
 label={ __( 'Loop' ) }
 checked={ props.attributes.loop }
 onChange={ onChangeLoop }
/>
<ToggleControl
 label={ __( 'Zurück zum Beginn' ) }
 checked={ props.attributes.rewind }
 onChange={ onChangeRewind }
/>

 </PanelBody>

</InspectorControls>
<PanelBody title={ __( 'Responsiver Slider' ) }  initialOpen={ false } >

    <div className={ props.className }>
      <p>— Hier Blöcke zum Sliden einfügen.</p>
         <InnerBlocks
          renderAppender={ () => (
            <InnerBlocks.ButtonBlockAppender  /> )}
         />
    </div>
    </PanelBody  >

</Fragment>

  );

}
export default AVSliderEdit;
