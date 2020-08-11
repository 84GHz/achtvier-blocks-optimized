const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

//import blocks here
import * as bootstrapcontainer from './bootstrap-container';
import * as bootstrapcol from './bootstrap-cols';
import * as avsection from './avsection';
import * as accordeon from './accordeon';
import * as accordeonitem from './accordeonitem';
import * as minicontent from './mini-content';
import * as newsticker from './newsticker';
import * as singletab from './singletab';
import * as bootstraptabs from './bootstraptabs';
import * as boxhovercaption from './box-hover-caption';
import * as boxhoveroverlay from './box-hover-overlay';
import * as avslider from './av-slider';
import * as parallaxbgwrapper from './parallax-bg-wrapper';
import * as readmore from './readmore';


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
	[	//type imported blocks here
    bootstrapcontainer,
		bootstrapcol,
		avsection,
		accordeonitem,
		accordeon,
		minicontent,
		newsticker,
		singletab,
		bootstraptabs,
		boxhovercaption,
		boxhoveroverlay,
		avslider,
		parallaxbgwrapper,
		readmore
	].forEach( registerBlock );

};
registerAchtvierBlocks();
