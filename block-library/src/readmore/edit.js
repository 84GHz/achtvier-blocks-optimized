const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const {
	RichText,
	InspectorControls,
	InnerBlocks,
	} = wp.blockEditor;
const { PanelBody,  RangeControl, ToggleControl, TextControl } = wp.components;
const { Fragment } = wp.element;
function EditReadMore(props) {
  const {
		setAttributes,
		attributes,
		className,
} = props;
		function onSlideSpeedChange(changes) {
				setAttributes({
						slideSpeed: changes
				});
		}
		function onHeightOnMobileChange(changes) {
				setAttributes({
						heightOnMobile: changes
				});
		}
		function onTriggerTextChange(changes) {
				setAttributes({
						triggerText: changes
				});
		}
		return (
			<Fragment>
			<InspectorControls>
				<PanelBody title={ __( 'Settings' ) }>
   				<RangeControl
						label={__("Slide down Speed")}
	  				value={ props.attributes.slideSpeed  }
						onChange={onSlideSpeedChange}
						min={ 10 }
						max={ 5000 }
				  />
					<RangeControl
						label={__("Height on Mobile")}
	  				value={ props.attributes.heightOnMobile  }
						onChange={onHeightOnMobileChange}
						min={ 20 }
						max={ 3000 }
				  />
					<TextControl
					label="Trigger Label"
					value={ props.attributes.triggerText }
					onChange={ onTriggerTextChange }
					/>
				</PanelBody>
			</InspectorControls>
			<div className={props.className}>
				<InnerBlocks
				allowedBlocks={ [ 'core/paragraph' ] }
				/>
			</div>
      <label>Read more on mobile</label>
			</Fragment>
		);
}
export default EditReadMore;
