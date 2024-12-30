import { __ } from '@wordpress/i18n'
import { useState } from "@wordpress/element"
import { InspectorControls, useBlockProps, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor'
import { Panel, PanelBody, Button, TextControl, SelectControl } from '@wordpress/components'
import { Navigation, Pagination, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import './editor.scss'
import 'swiper/css'
import 'swiper/css/pagination';


export default function Edit({ attributes, setAttributes, props }) {
	const blockProps = useBlockProps()
	const { mediaURL, slideCount } = attributes
	const [text, setText] = useState('')
	const [select, setSelect] = useState('a')
	console.log("blockProps: ", blockProps)
	console.log("attributes: ", attributes)

	const ALLOWED_MEDIA_TYPES = ['image', 'video', 'audio']

	const onSelectMedia = (media) => {
		console.log("media: ", typeof media.url)
		console.log("blockProps: ", blockProps)
		console.log("attributes: ", attributes)
		setAttributes({ mediaURL: media.url })

	}

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

			<InspectorControls>
				<Panel>
					<PanelBody>
						<h2>{__('This is a heading for the PluginSidebar example.')}</h2>
						<p>{__('This is some example text for the PluginSidebar example.')}</p>
						<TextControl
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							label={__('Text Control')}
							value={text}
							onChange={(newText) => setText(newText)}
						/>
						<SelectControl
							label={__('Select Control')}
							value={select}
							options={[
								{ value: 'a', label: 'Option A' },
								{ value: 'b', label: 'Option B' },
								{ value: 'c', label: 'Option C' },
							]}
							onChange={(newSelect) => setSelect(newSelect)}
						/>
						<Button variant="primary">{__('Primary Button')}</Button>
					</PanelBody>
				</Panel>
				<Panel>
					<PanelBody>
						<h2>{__('This is a heading for the PluginSidebar example.')}</h2>
						<p>{__('This is some example text for the PluginSidebar example.')}</p>
						<TextControl
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							label={__('Text Control')}
							value={text}
							onChange={(newText) => setText(newText)}
						/>
						<SelectControl
							label={__('Select Control')}
							value={select}
							options={[
								{ value: 'a', label: 'Option A' },
								{ value: 'b', label: 'Option B' },
								{ value: 'c', label: 'Option C' },
							]}
							onChange={(newSelect) => setSelect(newSelect)}
						/>
						<Button variant="primary">{__('Primary Button')}</Button>
					</PanelBody>
				</Panel>
			</InspectorControls>
		</>
	)
}
