<?php
/**
 * Plugin Name:     Achtvier Blocks 2023
 * Plugin URI:      https://github.com/84GHz/achtvier-blocks-optimized
 * Description:     Blocksammlung 84GHz
 * Author:          84gHz
 * Author URI:      https://84ghz.de
 * Text Domain:     achtvier-blocks-optimized
 * Domain Path:     /languages
 * Version:         0.505
 *
 * @package         Achtvier_Blocks_Optimized
 */

// Your code starts here.



function plugin_slug_register_blocks() {

    // Register gutenber editor js
    wp_register_script(
      'achtvier-blocks-editor-js',
        plugins_url( 'build/index.js', __FILE__ ),
        array( 'wp-blocks', 'wp-element', 'wp-data', 'wp-i18n', 'wp-editor' )
    );
    $editor_css = 'build/editor.css';


    $dir = dirname( __FILE__ );
  // register gutenberg editor style css
    wp_register_style(
      'achtvier-blocks-editor-css',
      plugins_url( $editor_css, __FILE__ ),
      array(),
      filemtime( "$dir/$editor_css" )
    );
// register frontend css
    $style_css = 'build/style.css';
    wp_register_style(
      'achtvier-blocks-frontend-css',
      plugins_url( $style_css, __FILE__ ),
      array(),
      filemtime( "$dir/$style_css" )
    );

// here go the blocks
    register_block_type( 'cgb/block-bootstrap-container', array(
       'editor_script' => 'achtvier-blocks-editor-js',
       'editor_style'  => 'achtvier-blocks-editor-css',
       'style'         => 'achtvier-blocks-frontend-css',
    ) );


}

add_action( 'init', 'plugin_slug_register_blocks' );


//load filter for cols

function load_av_cols_filter ($hook) {

	wp_enqueue_script(
		'extra-grid-filters',
		plugins_url( 'extra/blockfilter.js', __FILE__ ),
		array( 'wp-blocks', 'wp-dom-ready', 'wp-edit-post' ),
		true
);
}
add_action('admin_enqueue_scripts', 'load_av_cols_filter');

//here we add the blocks' category
function achtvier_block_category( $categories, $post ) {
	return array_merge(
		$categories,
		array(
			array(
				'slug' => 'achtvier-blocks',
				'title' => __( 'Achtvier Blocks', 'achtvier-blocks' ),
			),
		)
	);
}

//here we add the compiled block asset frontend script
function av_add_block_asset_script() {
  wp_enqueue_script( 'achtvier-blocks-assets', plugin_dir_url( __FILE__ ) . '/build/assets/avassets.js', array ( 'jquery' ), 1.1, true);
}
add_action( 'wp_enqueue_scripts', 'av_add_block_asset_script' );

//here we add the vendor scripts and styles - styles and scripts

function av_vendor_assets() {
  wp_register_style('av-owl-mainstyle', plugin_dir_url( __FILE__ ) . '/asset-library/vendor/owl/owlcarousel.min.css');
  wp_register_style('av-owl-themestyle', plugin_dir_url( __FILE__ ) . '/asset-library/vendor/owl/owlthemedefault.min.css');
  wp_register_style('av-animate', plugin_dir_url( __FILE__ ) . '/asset-library/vendor/animate/animate.min.css');
	wp_enqueue_style( 'av-owl-mainstyle');
	wp_enqueue_style( 'av-animate');
	wp_enqueue_style( 'av-owl-themestyle');
	wp_enqueue_script( 'av-owl-carousel', plugin_dir_url( __FILE__ ) . '/asset-library/vendor/owl/owl.carousel.min.js', array( 'jquery' ) );
} 

add_action( 'wp_enqueue_scripts', 'av_vendor_assets' );

add_filter( 'block_categories', 'achtvier_block_category', 10, 2);

//plugin update checker

if (!(class_exists("Puc_v4_Factory"))) {
  require 'plugin-update-checker/plugin-update-checker.php';
}
$myUpdateChecker = Puc_v4_Factory::buildUpdateChecker(
	'https://github.com/84GHz/achtvier-blocks-optimized/',
	__FILE__,
	'achtvier-blocks-optimized'
);
