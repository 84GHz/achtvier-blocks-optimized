const { __ } = wp.i18n; // Import __() from wp.i18n
const { InnerBlocks, BlockControls, InspectorControls } = wp.blockEditor;
const { CheckboxControl, PanelBody, Tooltip  } = wp.components;
const { Fragment } = wp.element;


function ContainerEdit (props){
  const { attributes } = props;
  function applyClasses(){
    var classarray = [];
    var applyoutput = " ";
    classarray.push(attributes.containerwidth);
    classarray.push(attributes.containervisibility);
    classarray.forEach(function callback(currentValue){
      applyoutput += currentValue;
      applyoutput += " ";
    });
    return applyoutput;
  }
  function onChangeContainerWidth( event ) {
    var selected = event.target.querySelector( 'option:checked' );
    props.setAttributes( { containerwidth: selected.value } );
    event.preventDefault();
    props.className += applyClasses();
  }
  function onChangeContainerVisibility( event ) {
    var selected = event.target.querySelector( 'option:checked' );
    props.setAttributes( { containervisibility: selected.value } );
    event.preventDefault();
    props.className += applyClasses();
  }
  props.className += applyClasses();
  return (
    <Fragment>
    <InspectorControls>
    <PanelBody>
    <select value={ attributes.containerwidth } onChange={ onChangeContainerWidth }>
        <option value=" container-fluid">Volle Breite</option>
        <option value=" container">Begrenzte Breite</option>
    </select>
    <select value={ attributes.containervisibility } onChange={ onChangeContainerVisibility }>
        <option value="">Immer Sichtbar</option>
        <option value=" d-block d-sm-none">Nur auf Mobil sichtbar</option>
        <option value=" d-none d-sm-block">Nur Desktop und Tablet sichtbar</option>
    </select>
    <a href="https://84ghz.de" target="_blank">
      <h2>Anleitung für die Achtvier-Plugins</h2>
      <img src="https://84ghz.de/explain-achtvier-kontainer-img.png" />
    </a>
    </PanelBody>
    </InspectorControls>
    <div className={ props.className }>
     <div class = "row">
       <InnerBlocks templateLock={ false } />
     </div>
     <Tooltip
        text={ __( 'Edit Container Block' )  }
      >
        <label><span class="dashicons dashicons-admin-generic"></span></label>
      </Tooltip>
    </div>
    </Fragment>
  );
}
export default ContainerEdit;
