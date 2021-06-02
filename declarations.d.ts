declare module 'react-native-instagram-login'
declare module 'react-native-indicators'
declare module 'react-native-masonry-list'
declare module 'react-native-video-helper'
declare module 'react-native-otp'
declare module 'react-native-switch'
declare module 'react-native-deck-swiper'
declare module 'react-native-render-html'
declare module 'react-native-htmlview'
declare module 'latinize'
declare module 'react-native-smooth-pincode-input'
declare module 'react-native-progress-bar-animated'
declare module 'react-native-version-check'
declare module 'react-native-gesture-handler/Swipeable'
declare module 'react-native-video-processing'
declare module 'numeral'

declare module 'react-bus' {
	type TEventName = string
	type TEventCallback<TPayload> = (payload: TPayload) => any
	type TPayload = any
	type TEmitter = (event: TEventName, payload?: TPayload) => void
	type TEventHandler = (event: TEventName) => void

	interface IUseBus {
		(): {
			emit: TEmitter
			on: TEventHandler
			of: TEventHandler
		}
	}
	interface IUseListener {
		<TPayload = void>(event: TEventName, callback: TEventCallback<TPayload>): void
	}

	export const Provider: React.FC<any>
	export const useBus: IUseBus
	export const useListener: IUseListener
}

declare module '*.svg' {
	import { SvgProps } from 'react-native-svg'
	const content: React.StatelessComponent<SvgProps>
	export default content
}

declare module '*.css' {
	const classes: { [key: string]: string };
	export default classes;
}

declare module 'react-native-parsed-text' {
	import { Component } from 'react'
	import { TextProps } from 'react-native'

	interface BaseParseShape extends Pick<TextProps, Exclude<keyof TextProps, 'onPress'>> {
		renderText?: (matchingString: string, match: string[]) => string
		onPress?: (text: string, index: number) => void
	}

	interface DefaultParseShape extends BaseParseShape {
		type: 'url' | 'phone' | 'email'
	}

	interface CustomParseShape extends BaseParseShape {
		pattern: string | RegExp
	}

	type ParseShape = DefaultParseShape | CustomParseShape

	export interface ParsedTextProps extends TextProps {
		parse?: ParseShape[]
		childrenProps?: TextProps
	}

	export default class ParsedText extends Component<ParsedTextProps> { }
}
