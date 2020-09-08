import edit from './edit';
import save from './save';
const { __ } = wp.i18n; // Import __() from wp.i18n


export const settings = {
  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
  title: __( 'Wrapperblock' ),	
	icon: 'columns',
  name: "achtvierblocks/wrapperblocks",
	description: __( 'A multipurpose wrapper block with settable class' ),
	category: 'achtvier-blocks',  
  edit,
  save
};
