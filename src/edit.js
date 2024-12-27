import { __ } from '@wordpress/i18n'
import { InspectorControls, useBlockProps, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor'
import { Panel, PanelBody, Button, TextControl, SelectControl } from '@wordpress/components'
import { useState, useEffect } from '@wordpress/element'
import { Pagination, Navigation, Autoplay, Scrollbar, A11y, EffectFade, EffectCards, EffectCreative } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'
import 'swiper/css/effect-flip'

import './editor.scss'

export default function Edit({ attributes, setAttributes }) {
	const { mediaURL, mediaID, slideCount } = attributes
	const [text, setText] = useState('')
	const [select, setSelect] = useState('a')
	const [media, setMedia] = useState(null)

	const ALLOWED_MEDIA_TYPES = ['image', 'video', 'audio']

	useEffect(() => {
		if (media) {
			setAttributes({ mediaURL: media.url, mediaID: media.id })
		}
	}, [media])

	const onSelectMedia = (media) => {
		setMedia(media)
	}

	return (
		<>
			<div {...useBlockProps()}>
				<Swiper
					modules={[Pagination, Navigation, EffectCreative, EffectCards, EffectFade, Autoplay, Navigation, Pagination, Scrollbar, A11y]}
					effect="flip"
					spaceBetween={50}
					autoplay={{ delay: 3000, disableOnInteraction: false }}
					slidesPerView={1}
					navigation
					tag={'section'}
					pagination={{ clickable: true }}
					scrollbar={{ draggable: true }}
					onSwiper={(swiper) => console.log(swiper)}
					onSlideChange={() => console.log('slide change')}
				>

					{!media ?

						<SwiperSlide>
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
							
						</SwiperSlide>

						: <img src={attributes.mediaURL} alt="" />}

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
