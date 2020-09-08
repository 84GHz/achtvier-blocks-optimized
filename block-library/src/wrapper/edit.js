const {  InnerBlocks } = wp.blockEditor;
const { RichText  } = wp.editor;
const { __ } = wp.i18n; // Import __() from wp.i18n
function WrapperBlockEdit (props){
		const {className} = props;
		  

      return ( 
  				<div class={ className }>
						   <InnerBlocks     
						   renderAppender={ () => (
          				<InnerBlocks.ButtonBlockAppender />
        				)}/>
  				</div>
      );
}
export default WrapperBlockEdit;
