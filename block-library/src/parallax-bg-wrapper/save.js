const { InnerBlocks } = wp.blockEditor;

export default function save( props ) {
  return (
<div className={props.className}
  style={{
    backgroundImage: "url('" + props.attributes.mediaURL + "')"
  }}
 >
 <InnerBlocks.Content />
</div>

)
}
