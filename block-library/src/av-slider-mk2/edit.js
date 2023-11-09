const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
import { inTypes, outTypes } from "./animationtypes";
const {
	RichText,
	InspectorAdvancedControls,
	InspectorControls,
	InnerBlocks,
	BlockControls,
} = wp.blockEditor;
const {
	PanelBody,

	RangeControl,
	ToggleControl,
  SelectControl
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
    const onChangeStopOnHover = value => {
      props.setAttributes( { stoponhover: value } );
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
  const onChangeSlidePaddingTablet = value => {
     props.setAttributes( { slidepaddingTablet: value } );
   };
  const onChangeSlidePaddingMobile = value => {
     props.setAttributes( { slidepaddingMobile: value } );
   };

   const onChangeStagePadding = value => {
    props.setAttributes( { stagePadding: value } );
  };
   const onChangeStagePaddingTablet = value => {
    props.setAttributes( { stagePaddingTablet: value } );
  };

   const onChangeStagePaddingMobile = value => {
    props.setAttributes( { stagePaddingMobile: value } );
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


  const onChangeOutAnimation = value => {
    props.setAttributes( { outAnimation: value } );
  };
  const onChangeInAnimation = value => {
    props.setAttributes( { inAnimation: value } );
  };



  return (
    <Fragment>
  <InspectorControls key="inspector2">

 <PanelBody title={ __( 'Anzahl Slides' ) } initialOpen={false} >

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
  </PanelBody>
  <PanelBody title={ __( 'Margin Slides' ) } initialOpen={false}>
 
  <RangeControl
 label={ __( 'Margin Slides Desktop' ) }
 value={ props.attributes.slidepadding }
 onChange={ onChangeSlidePadding }
  min={ 0 }
  max={ 100 }
/>
  <RangeControl
 label={ __( 'Margin Slides Tablet' ) }
 value={ props.attributes.slidepaddingTablet }
 onChange={ onChangeSlidePaddingTablet }
  min={ 0 }
  max={ 100 }
/>
  <RangeControl
 label={ __( 'Margin Slides Mobile' ) }
 value={ props.attributes.slidepaddingMobile }
 onChange={ onChangeSlidePaddingMobile }
  min={ 0 }
  max={ 100 }
/>
</PanelBody>
<PanelBody title={ __( 'Stage Padding' ) } initialOpen={false}>

<RangeControl
 label={ __( 'Stage Padding Desktop' ) }
 value={ props.attributes.stagePadding }
 onChange={ onChangeStagePadding }
  min={ 0 }
  max={ 100 }
/>
<RangeControl
 label={ __( 'Stage Padding Tablet' ) }
 value={ props.attributes.stagePaddingTablet }
 onChange={ onChangeStagePaddingTablet }
  min={ 0 }
  max={ 100 }
/>
<RangeControl
 label={ __( 'Stage Padding Mobile' ) }
 value={ props.attributes.stagePaddingMobile }
 onChange={ onChangeStagePaddingMobile }
  min={ 0 }
  max={ 100 }
/>
</PanelBody>

<PanelBody title={ __( 'Slidereinstellungen' ) } >

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
     label={ __( 'Stop on hover' ) }
     checked={ props.attributes.stoponhover }
     onChange={ onChangeStopOnHover }
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
        <SelectControl
            label="Animation-In"
            value={ props.attributes.animateIn }
            options={ inTypes }
            onChange={ ( newvalue ) => props.setAttributes({animateIn: newvalue}) }
        />
                <SelectControl
            label="Animation-out"
            value={ props.attributes.animateOut }
            options={ outTypes}
            onChange={ ( newvalue ) => props.setAttributes({animateOut: newvalue}) }

        />

 </PanelBody>

</InspectorControls>
<PanelBody title={ __( 'Responsiver Slider' ) }  initialOpen={ false } >

    <div className={ props.className }>      
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
