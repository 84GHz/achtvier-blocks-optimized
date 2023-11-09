const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

//import blocks here
var req = require.context("./", true, /\/index.js$/);
const blocksFromLib = req.keys().map(req);

/**
 * Function to register an individual block.
 *
 * @param {Object} block The block to be registered.
 *
 */

const registerBlock = ( block ) => {
	if ( ! block ) {
		return;
	}
	 registerBlockType(  block.settings.name, block.settings );
};

/**
 * Function to register blocks provided by the block editor.
 */

export const registerAchtvierBlocks = () => {
   blocksFromLib.forEach(registerBlock)
};
registerAchtvierBlocks();
