const { __ } = wp.i18n; // Import __() from wp.i18n
const { InnerBlocks, BlockControls, InspectorControls, useBlockProps, 	__experimentalBlockVariationPicker , } = wp.blockEditor;
const {  PanelBody, Tooltip, Panel, TextControl  } = wp.components;
const { Fragment } = wp.element;
const blockEditorStore = wp.blockEditor.store

const {useSelect} = wp.data;
const {
  element: {
      useState,
      useEffect
  },
} = wp;
function ContainerEdit (props){
  const [layoutSelected, setLayoutSelected] = useState(false);
  const [layoutToUse, setLayoutToUse] = useState([ ['cgb/block-bootstrap-cols', {gridrasterdesktop: ' col-xl-12'}]])
  const { clientId } = props;
  const hasInnerBlocks = useSelect(
    ( select ) =>
      select( blockEditorStore ).getBlocks( clientId ).length > 0,
      
    [ clientId ]
  );
  useEffect(() => {

    
    
  }, []);

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
  //var conClassess = applyClasses();
  //props.className += applyClasses();
  var incap = typeof attributes.internalcaption !== "undefined" ? attributes.internalcaption + " | " : ''
  const ALLOWED_BLOCKS = [ 'cgb/block-bootstrap-cols'];


const templatesset = [
  [ ['cgb/block-bootstrap-cols', {gridrasterdesktop: ' col-xl-12'}]],
  [ ['cgb/block-bootstrap-cols', {gridrasterdesktop: ' col-xl-6'}], ['cgb/block-bootstrap-cols', {gridrasterdesktop: ' col-xl-6'}]],
  [ ['cgb/block-bootstrap-cols', {gridrasterdesktop: ' col-xl-4'}],['cgb/block-bootstrap-cols', {gridrasterdesktop: ' col-xl-4'}],['cgb/block-bootstrap-cols', {gridrasterdesktop: ' col-xl-4'}]],
  [ ['cgb/block-bootstrap-cols', {gridrasterdesktop: ' col-xl-4'}],['cgb/block-bootstrap-cols', {gridrasterdesktop: ' col-xl-8'}]],
  [ ['cgb/block-bootstrap-cols', {gridrasterdesktop: ' col-xl-8'}],['cgb/block-bootstrap-cols', {gridrasterdesktop: ' col-xl-4'}]]
]
if (layoutSelected || hasInnerBlocks) {
  return (
    <Fragment>
    <InspectorControls>
    <TextControl
            label="Block-Hinweis"
            value={ attributes.internalcaption }
            onChange={ ( value ) =>{ props.setAttributes( {"internalcaption": value} )} }
        />
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
    </PanelBody>

    </InspectorControls>

    <div className={ props.className + applyClasses()}>
    <PanelBody title={ incap +  __( 'Raster/Zeile ' )    }  initialOpen={ false } >

     <div className = "row">
     <InnerBlocks templateLock={ false }
     allowedBlocks={ALLOWED_BLOCKS}
     template={layoutToUse}
        renderAppender={ () => (
          <InnerBlocks.ButtonBlockAppender />
        )}

      />
     </div>
     <Tooltip  
        text={ __( 'Edit Container Block' )  }
      >
        <label><span className="dashicons dashicons-admin-generic"></span></label>
      </Tooltip>
      </PanelBody>

    </div>

    </Fragment> 
  )
}

  return (
    
      <__experimentalBlockVariationPicker
        icon="smiley"
        label={__( 'Choose variation' )}
        instructions={__( 'Select a variation to start with. ' )}
        onSelect={(variation) => {console.log("chose:", variation)
          console.log("lty", templatesset[variation.name])
         setLayoutToUse(templatesset[variation.name])
          setTimeout(() => {
            setLayoutSelected(true)

          }, 250);
      
        }}
        variations={[
          {
            name: 0,
            description: "Eine Spalte",
            title: "Eine Spalte",
            
          },
          {
            name: 1,
            description: "Zwei Spalten",
            title: "Zwei Spalten",
           
          },
          {
            name: 2,
            description: "Drei Spalten",
            title: "Drei Spalten",
           
          },
          {
            name: 3,
            description: "Zwei Spalten 1:2",
            title: "Zwei Spalten 1:2",
           
          },
          {
            name: 4,
            description: "Zwei Spalten 2:1",
            title: "Zwei Spalten 2:1",
          },
        ]}
      /> 

    

    
    
     )
    
}




export default ContainerEdit;
