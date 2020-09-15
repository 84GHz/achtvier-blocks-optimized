const { InnerBlocks } = wp.blockEditor;

export default function save( props ) {
  return (
    <div className={props.className}
    data-slidesdesktop={props.attributes.slidesdesktop}
    data-slidestablet={props.attributes.slidestablet}
    data-slidesmobile={props.attributes.slidesmobile}
    data-autoplay={props.attributes.autoplay}
    data-showpoints={props.attributes.showpoints}
    data-slidespeed={props.attributes.slidespeed}
    data-showarrows={props.attributes.showarrows}
    data-slidepadding={props.attributes.slidepadding}
    >
    <InnerBlocks.Content />
    </div>
  );
}
