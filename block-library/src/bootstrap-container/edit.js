const { __ } = wp.i18n; // Import __() from wp.i18n
const { InnerBlocks, BlockControls, InspectorControls, useBlockProps, 	__experimentalBlockVariationPicker , } = wp.blockEditor;
const {  PanelBody, Tooltip, Panel, TextControl, Path, SVG  } = wp.components;
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
      <label>{ incap +  __( 'Raster/Zeile ' )    }</label>


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
            icon: (
              <SVG
                width="48"
                height="48"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <Path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="m39.0625 14h-30.0625v20.0938h30.0625zm-30.0625-2c-1.10457 0-2 .8954-2 2v20.0938c0 1.1045.89543 2 2 2h30.0625c1.1046 0 2-.8955 2-2v-20.0938c0-1.1046-.8954-2-2-2z"
                />
              </SVG>
            ), 
          },
          {
            name: 1,
            description: "Zwei Spalten",
            title: "Zwei Spalten",
            icon: (
              <SVG
                width="48"
                height="48"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <Path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H25V34H39ZM23 34H9V14H23V34Z"
                />
              </SVG>
            ), 
          },
          {
            name: 2,
            description: "Drei Spalten",
            title: "Drei Spalten",
            icon: (
              <SVG
                width="48"
                height="48"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <Path
                  fillRule="evenodd"
                  d="M41 14a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V14zM28.5 34h-9V14h9v20zm2 0V14H39v20h-8.5zm-13 0H9V14h8.5v20z"
                />
              </SVG>
            ),
          },
          {
            name: 3,
            description: "Zwei Spalten 1:2",
            title: "Zwei Spalten 1:2",
            icon: (
              <SVG
                width="48"
                height="48"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <Path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H20V34H39ZM18 34H9V14H18V34Z"
                />
              </SVG>
            ),
          },
          {
            name: 4,
            description: "Zwei Spalten 2:1",
            title: "Zwei Spalten 2:1",
            icon: (
              <SVG
                width="48"
                height="48"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <Path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H30V34H39ZM28 34H9V14H28V34Z"
                />
              </SVG>
            ),
          },
        ]}
      /> 

    

    
    
     )
    
}




export default ContainerEdit;
