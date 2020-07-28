const { InnerBlocks } = wp.blockEditor;

export default function save( props ) {
  return   (
    <div className={props.className}
      data-scrollspy={props.attributes.scrollspy}>
      <InnerBlocks.Content />
    </div>
    )
}
