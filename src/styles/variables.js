const size = {
    maxMobile: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}

const styleVariables = {
    color: {
        primaryColor: '#1DB954',
        primaryColorHover: '#4bdf80',
        secondaryColor: 'white',
        secondaryColorHover: 'black',
        listItemColor: '#eee9',
        scrollBarColor: '#555',
    },
    padding: {
        containerPadding: '0 20px',
        verticalPadding: '15px 0',
    },
    mediaQueries: {
        maxMobile: `(min-width: ${size.maxMobile})`,
    },
}
export default styleVariables