import { __ } from '@wordpress/i18n'
import { InspectorControls, useBlockProps, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor'
import {
	Panel, PanelBody, Button, CustomSelectControl, __experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption, ColorPalette, AnglePickerControl
} from '@wordpress/components'
import { Navigation, Pagination, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import './editor.scss'
import 'swiper/css'
import 'swiper/css/pagination'
import {
	__experimentalSpacer as Spacer,
	__experimentalHeading as Heading,
	__experimentalView as View,
} from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps()
	const { mediaURL, slideCount } = attributes

	console.log("blockProps: ", blockProps)
	console.log("attributes: ", attributes)

	const ALLOWED_MEDIA_TYPES = ['image', 'video', 'audio']

	const onSelectMedia = (media) => {
		console.log("media: ", typeof media.url)
		console.log("blockProps: ", blockProps)
		console.log("attributes: ", attributes)
		setAttributes({ mediaURL: media.url })

	}

	const options = [
		{
			key: 1,
			name: 1,
			style: { fontSize: '150%' },
		},
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
	];

	return (
		<>
			<div {...blockProps}>



				<Swiper
					className="mySwiper"
					pagination={{
						dynamicBullets: true,
					}}
					modules={[Pagination, A11y, Navigation]}
					slidesPerView={1}
					navigation={true}
				>
					<SwiperSlide>

						{mediaURL ? <img src={attributes.mediaURL} alt="" /> :
							<MediaUploadCheck>
								<MediaUpload
									onSelect={onSelectMedia}
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

						{mediaURL ? <img src={attributes.mediaURL} alt="" /> :
							<MediaUploadCheck>
								<MediaUpload
									onSelect={onSelectMedia}
									allowedTypes={ALLOWED_MEDIA_TYPES}
									render={({ open }) => (
										<Button onClick={open}>
											Open Media Library
										</Button>
									)}
								/>
							</MediaUploadCheck>
						}
					</SwiperSlide>
					<SwiperSlide>

						{mediaURL ? <img src={attributes.mediaURL} alt="" /> :
							<MediaUploadCheck>
								<MediaUpload
									onSelect={onSelectMedia}
									allowedTypes={ALLOWED_MEDIA_TYPES}
									render={({ open }) => (
										<Button onClick={open}>
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
				<Spacer>
					<Heading>WordPress.org</Heading>
				</Spacer>
				<Panel>
					<PanelBody>
						<h2>{__('This is a heading for the PluginSidebar example.')}</h2>
						<p>{__('This is some example text for the PluginSidebar example.')}</p>


						<CustomSelectControl
							__next40pxDefaultSize
							label="Number of Slides"
							options={options}
							onChange={({ selectedItem }) => setFontSize(selectedItem)}
						/>

						<ToggleGroupControl
							label="Autoplay"
							value="off"
							isBlock
							__nextHasNoMarginBottom
							__next40pxDefaultSize
						>
							<ToggleGroupControlOption value="off" label="off" />
							<ToggleGroupControlOption value="on" label="on" />
						</ToggleGroupControl>

						<ColorPalette
							asButtons={true}
							clearable={true}
							colors={[
								{
									color: '#2596be',
									name: 'Base'
								},
								{
									color: '#081c2c',
									name: 'Contrast'
								},
								{
									color: '#111111',
									name: 'Accent 1'
								}
							]}
							onChange={() => { }}
						/>
						<ColorPalette
							asButtons={true}
							colors={[
								{
									color: '#f00',
									name: 'Red'
								},
								{
									color: '#fff',
									name: 'White'
								},
								{
									color: '#00f',
									name: 'Blue'
								}
							]}
							onChange={() => { }}
						/>





					</PanelBody>


				</Panel>
				<Panel>
					<PanelBody>
						<h2>{__('This is a heading for the PluginSidebar example.')}</h2>
						<p>{__('This is some example text for the PluginSidebar example.')}</p>

					</PanelBody>
				</Panel>
			</InspectorControls>
		</>
	)
}
