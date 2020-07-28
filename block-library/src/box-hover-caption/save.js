const { InnerBlocks } = wp.blockEditor;

export default function save( props ) {
  const getLinkOverlay = () => {
    if (props.attributes.showLinkOverlay) {
      return (
        <div className="linkoverlay">
          <a href={ props.attributes.linkURL } className="kachel-overlay-link">{ props.attributes.linkText }</a>
        </div>
      );
    }
    else return null;

  };
  return (
<div className={props.className}
style={{
    backgroundImage: "url('" + props.attributes.mediaURL + "')",
    backgroundSize: 'cover',
    backgroundPosition: 'center'
}}>

 <div className="kachel-inner-wrapper">
   <div className="inside-wrapper">
   <InnerBlocks.Content />
   </div>
   { getLinkOverlay() }
 </div>

</div>
)
}
