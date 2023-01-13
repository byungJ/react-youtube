import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import ThumbNailItem from './ThumbNailItem';
import style from './postCSS/ThumbNail.module.css'
import { useOutletContext } from 'react-router-dom';

export default function ThumbNailList() {

    const [url] = useOutletContext();
    const [ttt, setTTT] = useState('');

    console.log('prev', url);
    const { isLoading, error, data } = useQuery(['top-videos'], async () =>{
        console.log(`fetching`, url)
        return fetch(url).then(res =>
          res.json()
        )
      },
    //   {
    //     staleTime: 1000 * 60 * 5,
    //   }
      );

    if (isLoading) return 'Loading...'
 
    if (error) return 'An error has occurred: ' + error.message
    
    const items = data.items;
    

    const thumbDetail = (item) => {
        console.log('item', item);
    }
    
    return (
        <div>
            { items.map((item) => <ThumbNailItem key={item.etag} vid={item.id.videoId} item={item} onDetail={thumbDetail}/>)}
        </div>
    );
}

