import { __ } from '@wordpress/i18n'
import { InspectorControls, useBlockProps, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor'
import {
	Panel, PanelBody, Button, CustomSelectControl, __experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption, ColorPalette
} from '@wordpress/components'
import { Navigation, Pagination, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import './editor.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import {
	__experimentalSpacer as Spacer,
	__experimentalHeading as Heading,
	__experimentalView as View
} from '@wordpress/components'
import { useSelect } from '@wordpress/data'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Edit({ attributes, setAttributes }) {
	const [reRender, setReRender] = useState(false)
	const blockProps = useBlockProps()
	const { mediaURL1, slideCount } = attributes
	const colors = useSelect((select) => select('core/block-editor').getSettings().colors, [])


	const ALLOWED_MEDIA_TYPES = ['image', 'video', 'audio']

	const onSelectMedia = (media, index) => {
		setAttributes({ mediaURL1: media.url })

	}

	const options = [
		{
			key: 2,
			name: 2,
			style: { fontSize: '150%' },
		},
		{
			key: 3,
			name: 3,
			style: { fontSize: '150%' },
		},
		{
			key: 4,
			name: 4,
			style: { fontSize: '150%' },
		},
		{
			key: 5,
			name: 5,
			style: { fontSize: '150%' },
		},
	]

	const slides = []

	useEffect(() => {
		setReRender(!reRender)
	}, [attributes])

	return (
		<>

			<style>{`
				.swiper-button-next {
					color: ${attributes.paginationColor} !important;
				}	
				.swiper-button-prev {
					color: ${attributes.paginationColor} !important;
				}	
				.swiper-pagination-bullet {
					background: ${attributes.bulletColor} !important;
				}	
				.swiper-pagination-bullet-active {
					background: ${attributes.bulletColor} !important;
				}
				.swiper-pagination {
					z-index: 1 !important;
				}		
			`}</style>

			<div {...blockProps}>
				<Swiper
					className="is-style-basic-swiper"
					navigation={true}
					pagination={{
						dynamicBullets: attributes.dynamicBullets === "False" ? false : true,
						clickable: true,

					}}
					modules={[Pagination, A11y, Navigation]}
					slidesPerView={1}
					spaceBetween={50}
				>
					<SwiperSlide>
						{mediaURL1 ? <img src={attributes.mediaURL1} alt="" /> :
							<MediaUploadCheck>
								<MediaUpload
									onSelect={(media) => onSelectMedia(media)}
									allowedTypes={ALLOWED_MEDIA_TYPES}
									render={({ open }) => (
										<Button className='is-primary' onClick={open}>
											Open Media Library
										</Button>
									)}
								/>
							</MediaUploadCheck>
						}
					</SwiperSlide>
					<SwiperSlide>
						{mediaURL1 ? <img src={attributes.mediaURL1} alt="" /> :
							<MediaUploadCheck>
								<MediaUpload
									onSelect={(media) => onSelectMedia(media)}
									allowedTypes={ALLOWED_MEDIA_TYPES}
									render={({ open }) => (
										<Button className='is-primary' onClick={open}>
											Open Media Library
										</Button>
									)}
								/>
							</MediaUploadCheck>
						}
					</SwiperSlide>

				</Swiper>
			</div>
			<div></div>
			<InspectorControls>

				<Panel>
					<PanelBody>
						<h2>{__('Slider Settings')}</h2>
						<p>{__('Click "save" and then refresh the browser. Then the changes to the settings in this panel will be seen.')}</p>


						<CustomSelectControl
							__next40pxDefaultSize
							label="Number of Slides"
							options={options}
							value={options.find((option) => option.key === attributes.numOfSlides)}
							onChange={({ selectedItem }) => setAttributes({ numOfSlides: selectedItem.key })}
						/>

						<ToggleGroupControl
							label="Autoplay"
							onChange={() => setAttributes({ autoplay: attributes.autoplay === "False" ? "True" : "False" })}
							value={attributes.autoplay}
							isBlock
							__nextHasNoMarginBottom
							__next40pxDefaultSize
						>
							<ToggleGroupControlOption value="False" label="False" />
							<ToggleGroupControlOption value="True" label="True" />
						</ToggleGroupControl>

						<ToggleGroupControl
							label="Dynamic Bullets"
							onChange={() => setAttributes({ dynamicBullets: attributes.dynamicBullets === "False" ? "True" : "False" })}
							value={attributes.dynamicBullets}
							isBlock
							__nextHasNoMarginBottom
							__next40pxDefaultSize
						>
							<ToggleGroupControlOption value="False" label="False" />
							<ToggleGroupControlOption value="True" label="True" />
						</ToggleGroupControl>


					</PanelBody>
				</Panel>
				<Panel>
					<PanelBody>
						<h2>{__('Slider Styles')}</h2>

						<h2>Pagination Color</h2>
						<ColorPalette
							asButtons={true}
							disableCustomColors={true}
							enableAlpha={true}
							clearable={true}
							value={attributes.paginationColor}
							colors={colors}
							onChange={(color) => { setAttributes({ paginationColor: color }) }}
						/>

						<h2>Bullet Colors</h2>
						<ColorPalette
							asButtons={true}
							disableCustomColors={true}
							enableAlpha={true}
							clearable={true}
							value={attributes.bulletColor}
							colors={colors}
							onChange={(color) => { setAttributes({ bulletColor: color }) }}
						/>

					</PanelBody>
				</Panel>
			</InspectorControls>
		</>
	)
}
