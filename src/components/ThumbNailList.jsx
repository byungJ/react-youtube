import { useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import ThumbNailItem from './ThumbNailItem';
import style from './postCSS/ThumbNail.module.css'
import { useOutletContext } from 'react-router-dom';

export default function ThumbNailList() {
    
    const [url, setUrl] = useOutletContext();
    const [urlText, setUrlText] = useState();
    // const client = useQueryClient();

   
    console.log('useQuery 외부', url)
    const { isLoading, error, data } = useQuery(['top-videos'], async () =>{
        console.log('useQuery 내부', urlText)
        return fetch(url).then(res =>
          res.json()
        )
      }
      // , {
      //   staleTime: 100 * 1 * 1,
      // }
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

