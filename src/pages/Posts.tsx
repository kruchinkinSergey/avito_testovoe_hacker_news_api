import NewsList from '../component/NewsList/NewsList'
import { getStories, getBestStories } from '../API/getNews'
import React, { useState, useEffect } from 'react';
import MyButton from '../component/MyButton/MyButton';

const Posts = () => {
    const [latestNews, setLatestNews] = useState<number[]>([])
    // const [bestNews, setBestNews] = useState([])
    // const [isBest, setIsBest] = useState(false)
    
    async function fetchNews() {
        try {
            const response = await getStories()
            setLatestNews(response.data.slice(0, 100))
            // setIsBest(false)
        } catch(e) {
            console.log(e)
        }
    }

    // async function fetchBestNews() {
    //     try {
    //         const response = await getBestStories()
    //         setBestNews(response.data.slice(0, 100))
    //         setIsBest(true)
    //     } catch (e) {
    //         console.log(e.message)
    //     }
    // }

    useEffect(() => {
        fetchNews()

        setInterval(() => {fetchNews()}, 60000);
        // const intervalId = setInterval(() => {
        //     isBest ? fetchBestNews() : fetchNews();
        // }, 60000);
        
        // return () => clearInterval(intervalId);
    
    }, []);
        
    return(
        <div>
            <div style={{display: 'flex', gap: '20px'}}>
                <MyButton onClick={() => {fetchNews()}}>Обновить список новостей</MyButton>
                {/* <MyButton onClick={() => {fetchBestNews()}}>Показать лучшие новости</MyButton> */}
            </div>
            <div>
                {/* {isBest === false
                    ?  (
                        <NewsList posts={latestNews}/>
                    )
                    : (
                        <NewsList posts={bestNews}/>
                    )
                } */}
                <NewsList posts={latestNews}/>
            </div>
        </div>
    )
}

export default Posts;