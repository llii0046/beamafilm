const sizes = {
	miniMobile: '320px',
	mobile: '576px',
	tablet: '768px',
	laptop: '1024px',
	largeLaptop: '1440px',
	desktop: '2560px'
};

const devices = {
	miniMobile: `(min-width: ${sizes.miniMobile})`,
	mobile: `(min-width: ${sizes.mobile})`,
	tablet: `(min-width: ${sizes.tablet})`,
	laptop: `(min-width: ${sizes.laptop})`,
	largeLaptop: `(min-width: ${sizes.largeLaptop})`,
	desktop: `(min-width: ${sizes.desktop})`
};

const color = {
	backgroundColorDark: '#17192b',
	borderColorDark: '#353737'
};

export { color, devices };
