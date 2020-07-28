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

function AVIconCounterTabEdit (props){

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

  			function onCounterStepChange(changes) {
  					setAttributes({
  							counterStep: changes
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
  			function onAnimationSpeedChange(changes) {
  					setAttributes({
  							animationSpeed: changes
  					});
  			}
  			function onfgcolorChange(changes) {

  					setAttributes({
  							fgColor: changes.hex
  					});
  			}

  			function onBorderColorChange(changes) {
  					setAttributes({
  							borderColor: changes.hex
  					});
  			}
  			function onSelectImage( media ) {
  				setAttributes( {
  					mediaURL: media.url,
  					mediaID: media.id,
  				} );
  			}
  			function onBorderWidthChange(changes) {
  					setAttributes({
  							borderWidth: changes
  					});
  			}
  			function onIconWidthChange(changes) {
  					setAttributes({
  							iconWidth: changes
  					});
  			}
  			function onRightMarginChange(changes) {
  					setAttributes({
  							iconRightMargin: changes
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
  			};
  			const bgStyle = {
  				backgroundColor: attributes.bgColor,
  				height: attributes.counterHeight,
  			};


  			const getIcons = ( number, iconfile ,width, rightmargin) => {
  				if (typeof(iconfile)=="undefined" ) {
  					return null;
  				}

  				let counter = []
  				let children = []
  				for (let i = 0; i < number; i++) {

  							children.push(<span
  								style={{
  									marginRight: rightmargin
  								}}
  								><img className={"icon-counter-icon"}
  							src = {iconfile}
  							style={{width: width + "px"}}
  							/></span>);
  					}
  					counter.push(<div className={"icon-counter-inner"}>{children}</div>);
  					return counter
  			}
  			const getImageButton = (openEvent) => {
  				return (
  					<div className="button-container">
  						<Button
  							onClick={ openEvent }
  								className="button button-large"
  				 			>
  					 		Icon
  				 		</Button>
  			 		</div>
  		 		);
  			};
  			return (
  				<Fragment>
  				<InspectorControls>
  					<PanelBody title={ __( 'Counter bar settings' ) }>
  					<MediaUpload
  						onSelect={ onSelectImage }
  						type="image"
  						value={ props.attributes.mediaID }
  						render={ ({ open }) => getImageButton(open) }
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
  											<RangeControl
  												label="Icon width"
  												value={ attributes.iconWidth }
  												onChange={onIconWidthChange}
  												min={ 0 }
  												max={ 200 }
  											/>
  											<RangeControl
  												label="Right Margin"
  												value={ attributes.iconRightMargin }
  												onChange={onRightMarginChange}
  												min={ 0 }
  												max={ 200 }
  											/>
  											<RangeControl
  												label="counter border"
  												value={ attributes.borderWidth }
  												onChange={onBorderWidthChange}
  												min={ 0 }
  												max={ 50 }
  											/>
  											<label>Border Color</label>
  											<ColorPicker
  												color= { attributes.borderColor }
  												onChangeComplete={ onBorderColorChange }
  												disableAlpha
  											/>
  											<RangeControl
  												label="Animation Speed"
  												value={ attributes.animationSpeed }
  												onChange={onAnimationSpeedChange}
  												min={ 10 }
  												max={ 1000 }
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
  						{getIcons(attributes.counterEnd, attributes.mediaURL, attributes.iconWidth, attributes.iconRightMargin)}
  						<label>icon-counter</label>
  					</div>
  				</Fragment>
  			);
}
export default AVIconCounterTabEdit;
