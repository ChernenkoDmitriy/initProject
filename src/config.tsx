const TEXT_STYLE = {
	smallText: {
		fontSize: 12,
		lineHeight: 14,
	},
	middleText: {
		fontSize: 16,
		lineHeight: 18,
	},
	largeText: {
		fontSize: 20,
		lineHeight: 22,
	}
};

export const config = {
	theme: {
		dark: {
			dark: true,
			colors: {
				primary: 'rgb(255, 255, 255)',
				background: 'rgb(20, 20, 20)',
				card: 'rgb(10, 10, 10)',
				text: 'rgb(255, 255, 255)',
				border: 'rgb(50, 50, 50)',
			},
			// TEXT_STYLE,
		},
		light: {
			dark: false,
			colors: {
				primary: 'rgb(0, 0, 0)',
				background: 'rgb(242, 242, 242)',
				card: 'rgb(255, 255, 255)',
				text: 'rgb(0, 0, 0)',
				border: 'rgb(199, 199, 204)',
				textSize: 25,
			},
			// TEXT_STYLE,
		}
	}
}