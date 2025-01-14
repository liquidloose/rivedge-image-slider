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
	const { mediaURL1, mediaURL2, mediaURL3, mediaURL4, mediaURL5, slideCount } = attributes
	const colors = useSelect((select) => select('core/block-editor').getSettings().colors, [])


	const ALLOWED_MEDIA_TYPES = ['image', 'video', 'audio']

	console.log("attributes: ", attributes)


	console.log("attributes.numOfSlides: ", attributes.numOfSlides)

	const onSelectMedia = (media, index) => {

		console.log('You selected this media: ', media)

		switch (index) {
			case 1:
				console.log("mediaURL1", mediaURL1)
				setAttributes({ mediaURL1: media.url })
				break
			case 2:
				console.log("mediaURL2", mediaURL2)
				setAttributes({ mediaURL2: media.url })
				break
			case 3:
				console.log("mediaURL3", mediaURL3)
				setAttributes({ mediaURL3: media.url })
				break
			case 4:
				console.log("mediaURL4", mediaURL4)
				setAttributes({ mediaURL4: media.url })
				break
			case 5:
				console.log("mediaURL5", mediaURL5)
				setAttributes({ mediaURL5: media.url })
				break
			default:
				console.log('Something wrong happened.')
		}

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


	function generateSlides() {
		const limit = attributes.numOfSlides
		const slides = []

		let slideMap = {
			1: attributes.mediaURL1,
			2: attributes.mediaURL2,
			3: attributes.mediaURL3,
			4: attributes.mediaURL4,
			5: attributes.mediaURL5
		}
		console.log('hey what is going on?')

		for (let i = 0; i < limit; i++) {
			console.log(`Iteration number: ${i + 1}`)
			let iterationNumber = i + 1

			console.log("typeof: ", typeof iterationNumber)
			console.log("attributes.iterationNumber: ", slideMap[iterationNumber])

			// If this specific slide doesn't have a value, then return the SwiperSlide with the MediaUpload components in it
			// If it does have a value, then return the value in an img tag: <img src={attributes.mediaURL1} alt="" />

			if (slideMap[iterationNumber]) {

				slides.push(
					<SwiperSlide>
						<Button
							className='close-swiper'
							onClick={() => {
								console.log('hello world')
								setAttributes({ mediaURL1: "" })
								switch (iterationNumber) {
									case 1:
										setAttributes({ mediaURL1: "" })
										break
									case 2:
										setAttributes({ mediaURL2: "" })
										break
									case 3:
										setAttributes({ mediaURL3: "" })
										break
									case 4:
										setAttributes({ mediaURL4: "" })
										break
									case 5:
										setAttributes({ mediaURL5: "" })
										break
									default:
										console.log("what's up, y'all???")
										break
								}
							}}
						>
							X
						</Button>
						<img src={slideMap[iterationNumber]} alt="Image for presentation in slider" />
					</SwiperSlide>
				)
			} else {
				slides.push(
					<SwiperSlide>
						<MediaUploadCheck key={i}>
							<MediaUpload
								onSelect={(media) => onSelectMedia(media, i + 1)}
								allowedTypes={ALLOWED_MEDIA_TYPES}
								render={({ open }) => (
									<Button className='is-primary' onClick={open}>
										Open Media Library
									</Button>
								)}
							/>
						</MediaUploadCheck>
					</SwiperSlide>
				)
			}

		}

		return slides
	}


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
					{generateSlides()}

				</Swiper>
			</div>


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
