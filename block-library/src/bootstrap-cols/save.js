const { InnerBlocks } = wp.blockEditor;

export default function save( props ) {
  var { attributes } = props;
  var colclasses = applyColClasses();

  function applyColClasses(){
    var classarray = [];
    var applyoutput = " ";
    classarray.push(attributes.gridrastermobile);
    classarray.push(attributes.gridrasterdesktop);
    classarray.push(attributes.gridrastertablet);
    classarray.push(attributes.containervisibility);
    classarray.push(attributes.coloffsetdesktop);
    classarray.forEach(function callback(currentValue){
      applyoutput += currentValue;
      applyoutput += " ";
    });
    return applyoutput;

  }
  return (
    <div className={ colclasses }>
        <InnerBlocks.Content />
    </div>
  );
}
