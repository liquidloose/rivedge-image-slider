<?php

/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>

<?php
$unique_class_name = 'swiper-' . (function ($length = 10) {
	return bin2hex(random_bytes($length));
})();
?>

<div class="swiper <?= $unique_class_name ?>">
	<div class="swiper-wrapper">
		<!-- Your slides here -->
	</div>
	<div class="swiper-button-prev"></div>
	<div class="swiper-button-next"></div>
	<div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"></div>
</div>

<script>
	document.addEventListener('DOMContentLoaded', function() {
		var swiper = new Swiper(".swiper.<?= $unique_class_name ?>", {
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			pagination: {
				el: ".swiper-pagination",
			},
			autoplay: <?= $attributes['swiperAutoplay'] !== "False" ? "{ delay: {$attributes['swiperDelay']}, disableOnInteraction: false }" : "false" ?>
		});
	});
</script>


<!-- Link Swiper's CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />

<style>
	.swiper-button-next {
		color: <?= esc_attr($attributes['paginationColor']) ?> !important;
	}

	.swiper-button-prev {
		color: <?= esc_attr($attributes['paginationColor']) ?> !important;
	}

	.swiper-pagination-bullet {
		background: <?= esc_attr($attributes['bulletColor']) ?> !important;
	}

	.swiper-pagination-bullet-active {
		background: <?= esc_attr($attributes['bulletColor']) ?> !important;
	}

	.swiper-pagination {
		z-index: 1 !important;
	}
</style>

<div class="<?= $attributes['className'] ?>">
	<div class="swiper <?= $unique_class_name ?>">
		<div class="swiper-wrapper">
			<?php
			$search_string = 'mediaURL';
			foreach ($attributes as $key => $value) {
				if (strpos($key, $search_string) !== false) {
					echo "<div class='swiper-slide'> <img src='{$attributes[$key]}' alt='decorative image' ></div>";
				}
			}
			?>
		</div>

		<div class="swiper-button-prev"></div>
		<div class="swiper-button-next"></div>
		<div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"></div>

	</div>
</div>
<!-- Swiper JS -->
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>


<!-- Initialize Swiper -->
<script>
	window.addEventListener('DOMContentLoaded', () => {
		var swiper = new Swiper(".swiper <?= $unique_class_name ?>", {
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			pagination: {
				el: ".swiper-pagination",
			},
			autoplay: <?= $attributes['swiperAutoplay'] !== "False" ? "{ delay: {$attributes['swiperDelay']}, disableOnInteraction: false }" : "false" ?>
		});
	})
</script>