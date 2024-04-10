import React, {useState, useEffect} from "react"
import { getStory } from "../../API/getNews";
import { Link } from 'react-router-dom';
import styles from './NewsItem.module.css'
import UnixToRegularTime from "../UnixToRegularTime";
import { StoryType } from "../../API/APITypes";

interface NewsItemProps {
    story: number;
}

const initial = {
    by: '0',
    id: 0,
    kids: [],
    score: 0,
    time: 0,
    title: '0',
    url: '0',
}

const NewsItem = ({story}: NewsItemProps) => {
    const [post, setPost] = useState<StoryType>(initial)

    useEffect(() => {
        async function fetchStory() {
            try {
                const response = await getStory(story)
                setPost(response.data)
            } catch (e) {
                console.log(e)
            }
        }

        fetchStory()
    }, [])

    return(
        <Link className={styles.item__link} to={`/${post.id}`}>
            <div className={styles.item}>
                <h2 className={styles.item__title}>{post.title}</h2>
                <div className={styles.item__inner}>
                    <p>Author: {post.by}</p>
                    <p>Score: {post.score}</p>
                    <UnixToRegularTime unixTime={post.time} />
                </div>    
            </div>
        </Link>    
    )
}

export default NewsItem;