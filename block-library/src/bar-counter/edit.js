const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
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

function AVCounterTabEdit (props){

  	const {
  			setAttributes,
  			attributes,
  			className,
  			setState
  	} = props;
  	const {counterBegin, counterEnd, startDelay, bgColor, fgColor} = attributes;

  			function onCounterBeginChange(changes) {
  					setAttributes({
  							counterBegin: changes
  					});
  			}
  			function onCounterEndChange(changes) {
  					setAttributes({
  							counterEnd: changes
  					});
  			}
  			function onCounterMultiplierChange(changes) {
  					setAttributes({
  							counterMultiplier: changes
  					});
  			}
  			function onAnimationSpeedChange(changes) {
  					setAttributes({
  							animationSpeed: changes
  					});
  			}
  			function onCounterLabelChange(changes) {
  					setAttributes({
  							counterLabel: changes
  					});
  			}
  			function onStartDelayChange(changes) {
  					setAttributes({
  							startDelay: changes
  					});
  			}


  			function onBgColorChange(changes) {
  					setAttributes({
  							bgColor: changes.hex
  					});
  			}
  			function onfgcolorChange(changes) {

  					setAttributes({
  							fgColor: changes.hex
  					});
  			}
  			function onFontcolorChange(changes) {
  					setAttributes({
  							fontColor: changes.hex
  					});
  			}
  			function onBorderColorChange(changes) {
  					setAttributes({
  							borderColor: changes.hex
  					});
  			}
  			function onBorderWidthChange(changes) {
  					setAttributes({
  							borderWidth: changes
  					});
  			}
  			function onCounterHeightChange(changes) {
  					setAttributes({
  							counterHeight: changes
  					});
  			}
  			function onCounterPaddingChange(changes) {
  					setAttributes({
  							counterPadding: changes
  					});
  			}
  			const fgStyle = {
  				backgroundColor: attributes.fgColor,
  				width: attributes.counterEnd + "%"
  			}
  			const bgStyle = {
  				backgroundColor: attributes.bgColor,
  				height: attributes.counterHeight,
  			}
  			return (
  				<Fragment>
  				<InspectorControls>
  					<PanelBody title={ __( 'Counter bar settings' ) }>
  						<TextControl
  							label={ __( 'Counter Bar Label' ) }
  							value={ attributes.counterLabel }
  							onChange={ onCounterLabelChange }
  						/>
  									<label>Hintergrundfarbe</label>
  	   				        <ColorPicker
  									     color= { bgColor }
  											 value= { bgColor }
  									     onChangeComplete={ onBgColorChange }
  											 disableAlpha
  									  />
  									<label>Vordergrundfarbe</label>
  									  <ColorPicker
  									    color= { fgColor }
  											value= { fgColor }
  									    onChangeComplete={ onfgcolorChange }
  											disableAlpha
  									  />
  										<label>Textfarbe</label>
  											<ColorPicker
  												color= { attributes.fontColor }
  												onChangeComplete={ onFontcolorChange }
  												disableAlpha
  											/>
  											<RangeControl
  												label="counterHeight"
  												value={ attributes.counterHeight }
  												onChange={onCounterHeightChange}
  												min={ 0 }
  												max={ 200 }
  											/>
  										<RangeControl
  											label="counterBegin"
  											value={ counterBegin }
  											onChange={onCounterBeginChange}
  											min={ 0 }
  											max={ 100 }
  										/>
  										<RangeControl
  											label="counterEnd"
  											value={ counterEnd }
  											onChange={onCounterEndChange}
  											min={ 0 }
  											max={ 100 }
  										/>
  										<RangeControl
  											label="counter padding"
  											value={ attributes.counterPadding }
  											onChange={onCounterPaddingChange}
  											min={ 0 }
  											max={ 100 }
  										/>
  										<RangeControl
  											label="startDelay"
  											value={ startDelay }
  											onChange={onStartDelayChange}
  											min={ 0 }
  											max={ 5000 }
  										/>

  					</PanelBody>
  				</InspectorControls>

  				<div className={props.className}
  				style={{
  					border: attributes.borderWidth + "px solid " + attributes.borderColor
  				}}
  				>
  				  <div className="counter-wrapper">
  					<div className="outerbar" style = {bgStyle}>
  					<div className="innerBar"
  					style = {
  						fgStyle
  					}>
  					</div>
  					</div>

  					<div className="counterlabel-textwrapper"
  						style = {{ color: attributes.fontColor,
  							padding: attributes.counterPadding + "px"
  						}}
  					>
  						{attributes.counterEnd * attributes.counterMultiplier}{attributes.counterLabel}
  					</div>
  					</div>

  				</div>
  				</Fragment>


  			);
}
export default AVCounterTabEdit;
