const {  InnerBlocks, useBlockProps } = wp.blockEditor;

const { RichText  } = wp.editor;
const {  PanelBody, Tooltip, Panel, TextControl  } = wp.components;

const { __ } = wp.i18n; // Import __() from wp.i18n
function AccordeonItemEdit (props){
		const {className} = props;
		console.log(className);
  		if (typeof(props.attributes.accpanelID)=="undefined") {
  			 props.setAttributes({ accpanelID: (+new Date).toString(36).slice(-8) });
  			}


  		const updateHeader = changes => {
  			props.setAttributes({ panelTitle: changes });
		  };
		  
      return ( 
   <div {...useBlockProps()}>
    <PanelBody title={    typeof(props.attributes.panelTitle) !== 'undefined' ? props.attributes.panelTitle  : "Accordeon-Element (noch keinen Titel)"     }  initialOpen={ false } >
	  <div className="card-header">
     	<RichText
		  value={ props.attributes.panelTitle }
		  onChange={ updateHeader }
		  placeholder={ __( 'Element-Titel...' ) }
	  />
	  </div>
	  	<div class="card-body">
		   <InnerBlocks 
		       renderAppender={ () => (
				<InnerBlocks.ButtonBlockAppender />
			  )}
		   />
 		</div>

   </PanelBody>
	</div>
   );
}
export default AccordeonItemEdit;
