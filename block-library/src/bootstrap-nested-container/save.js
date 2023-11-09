const { InnerBlocks } = wp.blockEditor;

export default function save( props ) {
  function applyClasses(){
    var classarray = [];
    var applyoutput = " ";
    classarray.push(attributes.containervisibility);
    classarray.push("container-fluid");
    classarray.forEach(function callback(currentValue){
      applyoutput += currentValue;
      applyoutput += " ";
    });
    return applyoutput;
  }
  const { attributes } = props;
  props.className += applyClasses();
  return (
    <div className={ props.className }>
      <div className="container">
        <div className="row">
          <InnerBlocks.Content />
        </div>
      </div>      
    </div>
  );
}
