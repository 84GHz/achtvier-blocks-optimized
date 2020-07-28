
const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { InnerBlocks, BlockControls, InspectorControls } = wp.blockEditor;
const { PanelBody, Panel, Tooltip  } = wp.components;
const { Fragment } = wp.element;


function ColEdit (props){
  var { attributes, clientId } = props;
  console.log(clientId);
  function applyColClasses(){
    var classarray = [];
    var applyoutput = " ";
    classarray.push(attributes.gridrastermobile);
    classarray.push(attributes.gridrasterdesktop);
    classarray.push(attributes.gridrastertablet);
    classarray.push(attributes.containervisibility);
    classarray.push(attributes.coloffsetdesktop);
    classarray.forEach(function callback(currentValue){
      applyoutput += currentValue;
      applyoutput += " ";
    });
    return applyoutput;

  }
  function onChangeContainerVisibility( event ) {
    var selected = event.target.querySelector( 'option:checked' );
    props.setAttributes( { containervisibility: selected.value } );
    event.preventDefault();


  }
  function onChangeGridRasterMobile( event ) {
    var selected = event.target.querySelector( 'option:checked' );
    props.setAttributes( { gridrastermobile: selected.value } );
    event.preventDefault();
  }
  function onChangeGridRasterTablet( event ) {
    var selected = event.target.querySelector( 'option:checked' );
    props.setAttributes( { gridrastertablet: selected.value } );
    event.preventDefault();

  }
  function onChangeGridRasterDesktop( event ) {
    var selected = event.target.querySelector( 'option:checked' );
    props.setAttributes( { gridrasterdesktop: selected.value } );
    event.preventDefault();

  }
  function onChangeColOffsetDesktop( event ) {
    var selected = event.target.querySelector( 'option:checked' );
    props.setAttributes( { coloffsetdesktop: selected.value } );
    event.preventDefault();

  }
 var colclasses = applyColClasses();

  return (
    <Fragment>
    <InspectorControls>

    <PanelBody
    title="Spalteneinstellungen"
    icon="admin-generic"
      initialOpen={ false }>
    <select value={ attributes.gridrastermobile } onChange={ onChangeGridRasterMobile }>
        <option value=" col-12">Mobil 1/1</option>
        <option value=" col-11">Mobil 11/12</option>
        <option value=" col-10">Mobil 5/6</option>
        <option value=" col-9">Mobil 3/4</option>
        <option value=" col-8">Mobil 2/3</option>
        <option value=" col-7">Mobil 7/12</option>
        <option value=" col-6">Mobil 1/2</option>
        <option value=" col-5">Mobil 5/12</option>
        <option value=" col-4">Mobil 1/3</option>
        <option value=" col-3">Mobil 1/4</option>
        <option value=" col-2">Mobil 1/6</option>
        <option value=" col-1">Mobil 1/12</option>
    </select>
    <select value={ attributes.gridrastertablet } onChange={ onChangeGridRasterTablet }>
        <option value=" col-md-12">Tablet 1/1</option>
        <option value=" col-md-11">Tablet 11/12</option>
        <option value=" col-md-10">Tablet 5/6</option>
        <option value=" col-md-9">Tablet 3/4</option>
        <option value=" col-md-8">Tablet 2/3</option>
        <option value=" col-md-7">Tablet 7/12</option>
        <option value=" col-md-6">Tablet 1/2</option>
        <option value=" col-md-5">Tablet 5/12</option>
        <option value=" col-md-4">Tablet 1/3</option>
        <option value=" col-md-3">Tablet 1/4</option>
        <option value=" col-md-2">Tablet 1/6</option>
        <option value=" col-md-1">Tablet 1/12</option>
    </select>
    <select value={ attributes.gridrasterdesktop } onChange={ onChangeGridRasterDesktop }>
        <option value=" col-xl-1">Desktop 1/12</option>
        <option value=" col-xl-2">Desktop 1/6</option>
        <option value=" col-xl-3">Desktop 1/4</option>
        <option value=" col-xl-4">Desktop 1/3</option>
        <option value=" col-xl-5">Desktop 5/12</option>
        <option value=" col-xl-6">Desktop 1/2</option>
        <option value=" col-xl-7">Desktop 7/12</option>
        <option value=" col-xl-8">Desktop 2/3</option>
        <option value=" col-xl-9">Desktop 3/4</option>
        <option value=" col-xl-10">Desktop 5/6</option>
        <option value=" col-xl-11">Desktop 11/12</option>
        <option value=" col-xl-12">Desktop 1/1</option>
    </select>
    <select value={ attributes.containervisibility } onChange={ onChangeContainerVisibility }>
        <option value="">Immer Sichtbar</option>
        <option value=" d-block d-md-none">Nur auf Mobil sichtbar</option>
        <option value=" d-none d-md-block">Nur Desktop und Tablet sichtbar</option>
    </select>
    <select value={ attributes.coloffsetdesktop } onChange={ onChangeColOffsetDesktop }>

        <option value="">Kein offset</option>
        <option value=" offset-xl-1">offset 1/12</option>
        <option value=" offset-xl-2">offset 1/6</option>
        <option value=" offset-xl-3">offset 1/4</option>
        <option value=" offset-xl-4">offset 1/3</option>
        <option value=" offset-xl-5">offset 5/12</option>
        <option value=" offset-xl-6">offset 1/2</option>
        <option value=" offset-xl-7">offset 7/12</option>
        <option value=" offset-xl-8">offset 2/3</option>
        <option value=" offset-xl-9">offset 3/4</option>
        <option value=" offset-xl-10">offset 5/6</option>
        <option value=" offset-xl-11">offset 11/12</option>
        <option value=" offset-xl-12">offset 1/1</option>
    </select>


    </PanelBody>
    <PanelBody
    title="Hilfe"
      initialOpen={ false }>
      <a href="https://84ghz.de" target="_blank">
      <h2>Anleitung für die Achtvier-Plugins</h2>
      <img src="https://84ghz.de/explain-achtvier-kontainer-img.png" />
    </a>
    </PanelBody>

    </InspectorControls>
    <div className={ colclasses }>

      <InnerBlocks templateLock={ false }
        renderAppender={ () => (
          <InnerBlocks.ButtonBlockAppender />
        )}

      />

       <Tooltip
        text={ __( 'Edit Column Block' )  }
      >
            <label><span class="dashicons dashicons-admin-generic"></span></label>
      </Tooltip>
   </div>
    </Fragment>

  );
}
export default ColEdit;
