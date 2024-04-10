import React, { useState, useEffect } from 'react';
import { getStories } from '../../API/getNews';

const UpdatePostsBtn = () => {
    const [posts, setPosts] = useState([]);
    
    const updatePosts = async () => {
        const response = await getStories();
        setPosts(response.data.slice(0, 100))
    }

    return ( 
        <button onClick={updatePosts}>Update</button>
     );
}
 
export default UpdatePostsBtn;