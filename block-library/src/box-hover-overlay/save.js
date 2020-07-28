const { InnerBlocks } = wp.blockEditor;

export default function save( props ) {
  const getLink = () => {
    if (props.attributes.showLink) {
      return (
        <div className="overlay-link-wrapper">
          <a href={ props.attributes.linkURL } className="kachel-overlay-link">{ props.attributes.linkText }</a>
        </div>
      );
    }
    else return null;

  };
  return (
<div className={props.className}>
<img src={props.attributes.mediaURL}
 className="ok-image"/>
 <div className="kachel-overlay-wrapper">
   <div className="linkoverlay" >
   <div className="overlay-inner-wrapper">
     <InnerBlocks.Content />
     { getLink() }
   </div>

   </div>
 </div>

</div>
)
}
