const { InnerBlocks } = wp.blockEditor;

export default function save( props ) {
    return   <div id={props.attributes.id} className={props.attributes.active + " tab-pane"}><InnerBlocks.Content /></div>  
}
