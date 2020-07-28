const {  InnerBlocks } = wp.blockEditor;
const { RichText  } = wp.editor;
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
  				<div class={ className + " card" }>
  				<div id={props.attributes.accpanelID} class="collapse show">
  				<div className="card-header">
  				<RichText
  						value={ props.attributes.panelTitle }
  						onChange={ updateHeader }
  						placeholder={ __( 'Panel Titel…....' ) }
  				/>
  				</div>
  					<div class="card-body">
  						 <InnerBlocks />
  					</div>
  				</div>
  				</div>
      );
}
export default AccordeonItemEdit;
