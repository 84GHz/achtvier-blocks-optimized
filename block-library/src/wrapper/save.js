const { InnerBlocks } = wp.blockEditor;
export default function save( props ) {
  
    return   (
   <div className={ props.className }> 
       <InnerBlocks.Content />
   </div>

   );
  

}
