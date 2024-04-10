import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getStory } from "../../API/getNews";
import styles from './SinglePage.module.css';
import UnixToRegularTime from "../../component/UnixToRegularTime";
import Comments from "../../component/Comment";
import { StoryType } from "../../API/APITypes";

const SinglePage = () => {

    const initial = {
        by: '0',
        id: 0,
        kids: [],
        score: 0,
        time: 0,
        title: '0',
        url: '0',
    }

    const {id} = useParams<string>();
    const [post, setPost] = useState<StoryType>(initial);

    useEffect(() => {
        async function fetchMorePost() {
            try {
                const response = await getStory(id)
                setPost(response.data)
            } catch (e) {
                console.log(e)
            }
        }

        fetchMorePost()
    }, [id])
    
    return ( 
        <div className={styles.page}> 
            <div className={styles.item}>
                <div className={styles.head__box}>
                    <h2 className={styles.title}>{post.title}</h2>
                    <div className={styles.backBtn__box}>
                        <Link className={styles.backBtn} to={`/`}>Назад</Link>
                    </div>
                </div>
                <Link to={post.url} className={styles.url}>{post.url}</Link>
                <p className={styles.author}>Author: {post.by}</p>
                <UnixToRegularTime className={styles.time} unixTime={post.time} />
                <div className={styles.comment__text}>{"Комментарии:"}</div>
                <Comments className={styles.comment} comments={post.kids}/>
            </div>
        </div>
    );
}
 
export {SinglePage};