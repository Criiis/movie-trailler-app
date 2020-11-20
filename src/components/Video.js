import React from 'react'

function Video({url}) {
    return (
        <>
         <iframe title={url} src={`https://www.youtube.com/embed/${url}?autoplay=1`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>   
        </>
    )
}

export default Video
