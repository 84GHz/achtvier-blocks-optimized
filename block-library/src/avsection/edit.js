const { __ } = wp.i18n; // Import __() from wp.i18n
const { InnerBlocks, BlockControls, InspectorControls } = wp.blockEditor;
const { PanelBody, Tooltip, TextControl  } = wp.components;
const { Fragment } = wp.element;


function AVSectionEdit (props){
  const {
  		setAttributes,
  		attributes,
  		className,
  } = props;

  		function onSectionIDChange(changes) {
  				setAttributes({
  						sectionID: changes
  				});
  		}
  		return (
  			<Fragment>
  			<InspectorControls>
  				<PanelBody title={ __( 'Sektioneinstellungen' ) }>
  					<TextControl
  						label={ __( 'Section ID' ) }
  						value={ attributes.sectionID }
  						onChange={ onSectionIDChange }
  					/>
  				</PanelBody>
  			</InspectorControls>
  			<section className={props.className} id={props.attributes.sectionID}>
  				<InnerBlocks />
  				<label>content-section</label>
  			</section>
  			</Fragment>
  		);
}
export default AVSectionEdit;
