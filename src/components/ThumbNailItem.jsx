import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './postCSS/ThumbNailItem.module.css' 

export default function ThumbNailItem({item, vid, onDetail}) {

    const navigate = useNavigate();
    const hanedleItem = (e) => {
        onDetail(item)
        navigate(`${item.id.videoId}`)
    };
    
    return (
        <div className={style.rec} key={vid} onClick={hanedleItem}>
            <img className={style.thumbImg} alt="thumb" src={item.snippet.thumbnails.default.url}/>
            <p>{item.snippet.title}</p>
            <p>{item.snippet.channelTitle}</p>
        </div>
    );
}


