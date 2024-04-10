import React from "react"
import NewsItem from "../NewsItem/NewsItem";

interface NewsListProps {
    posts: number[]
}

const NewsList = ({posts}: NewsListProps) => {
    
    return(
        <div>
            {posts.map(story=> (
                <NewsItem story={story} />
            ))}
        </div>
    )
}

export default NewsList;