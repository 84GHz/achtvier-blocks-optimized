const AccordeonBlockContext = wp.element.createContext()
const { __ } = wp.i18n; // Import __() from wp.i18n
const { RichText, InspectorControls, InnerBlocks  } = wp.blockEditor; // Import registerBlockType() from wp.blocks
const { Button, TextControl, ToggleControl} = wp.components;
const { select, dispatch } = wp.data;
const { Component, Fragment } = wp.element;

function AVAccordeonEdit (props){
  const {
      setAttributes,
      attributes,
      className,
  } = props;


  function onAccordeonOnChange(changes) {
      console.log("onacc chane", changes)
      setAttributes({
          accordeonOn: changes
      });
      if (changes) {
        var children = select('core/block-editor').getBlocksByClientId(props.clientId)[0].innerBlocks;
        for (var i = 0; i < children.length ; i++) {
         dispatch('core/block-editor').updateBlockAttributes(children[i].clientId, {parentID: props.attributes.accordeonID})
        }
    
      }
      else {
        var children = select('core/block-editor').getBlocksByClientId(props.clientId)[0].innerBlocks;
        for (var i = 0; i < children.length ; i++) {
         dispatch('core/block-editor').updateBlockAttributes(children[i].clientId, {parentID: null})
        }
   
      }

  }
 
 if (typeof(props.attributes.accordeonID)=="undefined") {
   var datid = (+new Date).toString(36).slice(-8);
   setAttributes({ accordeonID: datid });
 
     }




   function getTemplate(accID) {
     return ([
       ['achtvierblocks/newaccordeonpanel', {}],
     ])
   }



//	 var child = wp.data.select('achtvierblocks/newaccordeon').getBlocksByClientId(props.clientId)[0].innerBlocks[0];
  //	console.log(child);
  return (
         <Fragment>
         <InspectorControls>
         <ToggleControl
           label={ __( 'AccordeonFuktion' ) }
           checked={ props.attributes.accordeonOn }
           onChange={ onAccordeonOnChange  }
         />
         </InspectorControls>
         <div className={className} id={props.attributes.accordeonID}>
             <InnerBlocks
             clientId={ props.clientId }
             allowedBlocks={ [ 'achtvierblocks/newaccordeonpanel' ] }
             template={getTemplate(props.attributes.accordeonID)}
            />
            <label>av-accordeon</label>
        </div>
         </Fragment>

  );
}
export default AVAccordeonEdit;
