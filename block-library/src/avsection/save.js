const { InnerBlocks } = wp.blockEditor;
export default function save( props ) {
  return (
    <section className={props.className} id={props.attributes.sectionID}>
      <InnerBlocks.Content />
    </section>
  )
}
