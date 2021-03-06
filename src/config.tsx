const TEXT_STYLE = {
	smallText: {
		fontSize: 12,
		lineHeight: 14,
		fontFamily: 'Roboto-Light',
	},
	middleText: {
		fontSize: 16,
		lineHeight: 18,
		fontFamily: 'Roboto-Light',
	},
	largeText: {
		fontSize: 20,
		lineHeight: 22,
		fontFamily: 'RobotoLight',
	}
};

export interface ColorsProps {
	primary: String,
	background: String,
	card: String,
	text: String,
	border: String,
}

export const config = {
	TEXT_STYLE,
	theme: {
		dark: {
			dark: true,
			colors: {
				primary: 'rgb(255, 255, 255)',
				background: 'rgb(20, 20, 20)',
				card: 'rgb(10, 10, 10)',
				text: 'rgb(255, 255, 255)',
				border: 'rgb(50, 50, 50)',
				dark: true,
			},
		},
		light: {
			dark: false,
			colors: {
				primary: 'rgb(0, 0, 0)',
				background: 'rgb(233, 233, 233)',
				card: 'rgb(255, 255, 255)',
				text: 'rgb(0, 0, 0)',
				border: 'rgb(199, 199, 204)',
				dark: false,
			},
		}
	}
}

export const LINKS = {
	AUTHORIZATION: 'AUTHORIZATION',
	REGISTRATION: 'REGISTRATION',
}