const { InnerBlocks } = wp.blockEditor;

export default function save( props ) {
  console.log(props.attributes.parallaxID);
  return (
    
<div id={props.attributes.parallaxID} className={props.className} > 
   <InnerBlocks.Content /> 
   <style dangerouslySetInnerHTML={{__html: '@media (max-width: 767px) {' +
     '#' + props.attributes.parallaxID + 
     ' {background-image: url(' + props.attributes.mobilemediaURL + '); }}' }} />
   <style dangerouslySetInnerHTML={{__html: '@media (min-width: 768px) {#' + props.attributes.parallaxID + ' {background-image: url(' + props.attributes.mediaURL + '); }}' }} />
</div>
 )
}
