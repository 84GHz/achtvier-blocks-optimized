const {
	RichText,
	InspectorControls,
	InnerBlocks,
} = wp.blockEditor;

export default function save(props) {
  return (
	<div className={props.className} data-slidedownspeed={props.attributes.slideSpeed} data-heightonmobile={props.attributes.heightOnMobile}>
	  <div className="av-read-more-inner-wrapper">
				<InnerBlocks.Content />
				<div className="fade-out-wrapper"/>

		</div>
			<div className="av-read-more-button-wrapper">
				<button className="av-read-more-link"><span>{ props.attributes.triggerText }</span></button>
			</div>
	 </div>
)
}
