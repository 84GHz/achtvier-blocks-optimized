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
    data-slidepaddingtablet={props.attributes.slidepaddingTablet}
    data-slidepaddingmobile={props.attributes.slidepaddingMobile}
    data-sliderloop={props.attributes.loop}
    data-rewind={props.attributes.rewind}
    data-inanimation={props.attributes.animateIn}
    data-outanimation={props.attributes.animateOut}
    data-stagepadding={props.attributes.stagePadding}
    data-stagepaddingmobile={props.attributes.stagePaddingMobile}
    data-stagepaddingtablet={props.attributes.stagePaddingTablet}
    data-stopohover={props.attributes.stoponhover}
    >
    <InnerBlocks.Content />
    </div>
  );
}
