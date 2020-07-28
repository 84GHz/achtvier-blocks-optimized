const { __ } = wp.i18n; // Import __() from wp.i18n
const {
  RichText,
  InspectorAdvancedControls,
  InspectorControls,
  InnerBlocks,
  BlockControls,
  MediaUpload,

} = wp.blockEditor;

const { Button, TextControl, RangeControl	,PanelBody, ToggleControl, TextControls, ColorPicker } = wp.components;
const { Fragment } = wp.element;

function AVNewstickerEdit (props){
  const {
			setAttributes,
			attributes,
			className,
			setState
	} = props;
	const {counterBegin, counterEnd, startDelay, bgColor, fgColor} = attributes;



			function onshowLinkedChange(changes) {
					setAttributes({
							showLinked: changes
					});
			}
			function onLinkUrlChange(changes) {
					setAttributes({
							linkURL: changes
					});
			}
			function onNewsTickerTextChange(changes) {
					setAttributes({
							newsTickerText: changes
					});
			}





			return (
				<Fragment>
				<InspectorControls>
					<PanelBody title={ __( 'Newsticker settings' ) }>
							<label>Link url</label>
								<TextControl
                 value={attributes.linkURL}
                 onChange={onLinkUrlChange}
                 placeholder="#"
	               />
	 					<ToggleControl
  						label={ __( 'Show link' ) }
	  					checked={ attributes.showLinked }
		  				onChange={ onshowLinkedChange }
					/>

					</PanelBody>
				</InspectorControls>

				<div className={props.className}>
					 <TextControl
                 tagName="p"
                 value={attributes.newsTickerText}
                 onChange={onNewsTickerTextChange}
                 placeholder="Ticker Inhalt"
	                 />

					</div>
				</Fragment>
			);
}
export default AVNewstickerEdit;
