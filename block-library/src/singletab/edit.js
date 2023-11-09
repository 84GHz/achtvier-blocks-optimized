const { InnerBlocks } = wp.blockEditor;
const { __ } = wp.i18n; // Import __() from wp.i18n


function AVSingleTabEdit (props){

        return (
          <div id={props.attributes.id}   className={"inner-tabs"}>
           <InnerBlocks templateLock={ false }
            renderAppender={ () => (
              <InnerBlocks.ButtonBlockAppender  /> )}
           />
          </div>
        );
}
export default AVSingleTabEdit;
