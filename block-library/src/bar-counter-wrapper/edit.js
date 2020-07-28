const { InnerBlocks } = wp.blockEditor;


function AVCounterTabEdit (props){
  return (
    <div className={props.className}>
     <InnerBlocks allowedBlocks={["achtvier/bar-counter","achtvier/icon-counter"]} />
     <label>achtvier-counter-wrapper</label>
    </div>
  );
}
export default AVCounterTabEdit;
