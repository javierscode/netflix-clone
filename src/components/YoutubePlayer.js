import React, { useEffect, useState } from 'react'

function YoutubePlayer({id}) {

    const [opacityValue, setOpacityValue] = useState(0)

    const url = "https://www.youtube.com/embed/"+id+
                "?vq=hd1080"+
                "&controls=0"+
                "&showinfo=0"+
                "&rel=0"+
                "&autoplay=1"+
                "&loop=1"+
                "&playlist="+id+
                "&modestbranding=1"+
                "&disablekb=1"+
                "&iv_load_policy=3"+
                "&mute=1";
                
    useEffect(() => {
        
        
        setTimeout(()=>{

            setOpacityValue(1)
        },3000)

    }, [])

    return (
        <iframe style={{opacity:opacityValue}} className="youtube-player" src={url} frameBorder="0" allowFullScreen></iframe>
    )
}

export default YoutubePlayer

