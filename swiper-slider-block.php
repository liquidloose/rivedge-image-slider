<?php

/**
 * Plugin Name:       TFG Swiper Slider Block
 * Description:       A Gutenberg wrapper for swiper.js
 * Requires at least: 6.6
 * Requires PHP:      7.2
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       swiper-slider-block
 *
 * @package Rivedge
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function rivedge_swiper_slider_block_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'rivedge_swiper_slider_block_block_init' );


/**
 * Enqueue content assets but only in the Editor.
 */
function example_enqueue_editor_content_assets() {
	wp_enqueue_script(
		'responsive-js-script',
		plugins_url('responsive.js', __FILE__)
	);
}
add_action('enqueue_block_assets', 'example_enqueue_editor_content_assets');