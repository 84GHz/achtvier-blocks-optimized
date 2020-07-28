const { InnerBlocks } = wp.blockEditor;

export default function save( props ) {
  const {	attributes, className,} = props;
  return (
    <div className={className}>
    <div className="mini-headerimage"
    style={{
      backgroundImage:"url('" + attributes.mediaURL + "')"
    }}
    />

      <h3>{attributes.title}</h3>
      <p className="top-content">{attributes.content}</p>
      <p className="bottom-content">{attributes.secondaryContent}</p>
  </div>
  );
}
