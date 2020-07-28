const { InnerBlocks } = wp.blockEditor;
export default function save( props ) {
    const {	attributes, className} = props;
		return (
			<div className={className} id={props.attributes.accordeonID}>
					<InnerBlocks.Content/>
			</div>
		);
}
