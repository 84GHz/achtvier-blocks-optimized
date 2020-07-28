const { InnerBlocks } = wp.blockEditor;
export default function save( props ) {
  console.log(props);
  if ((props.attributes.parentID===null)||typeof(props.attributes.parentID)=="undefined") {
    return   (
     <div>
       <div class="card-header">
         <a class="card-link" data-toggle="collapse" href={'#' + props.attributes.accpanelID}>
           {props.attributes.panelTitle}
         </a>
       </div>
       <div id={props.attributes.accpanelID} class="collapse"
       >
         <div class="card-body">
           <InnerBlocks.Content />
         </div>
       </div>
   </div>

   );
  }
  else {
    return   (

     <div>
       <div class="card-header">
         <a class="card-link" data-toggle="collapse" href={'#' + props.attributes.accpanelID}>
           {props.attributes.panelTitle}
         </a>
       </div>
       <div id={props.attributes.accpanelID} class="collapse"
       data-parent={"#" + props.attributes.parentID}
       >
         <div class="card-body">
           <InnerBlocks.Content />
         </div>
       </div>


   </div>

   );
  }

}
