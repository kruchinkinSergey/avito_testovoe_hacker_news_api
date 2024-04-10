import React from 'react';
import CommentItem from './CommentItem';

interface CommentsProps {
    comments: number[];
    className?: string;
}

const Comments = ({comments}: CommentsProps) => {
    // console.log(comments)
    return ( 
        <>
            {comments?.map(comment =>
                <CommentItem comment={comment} key={comment}/>
            )}
        </>
     );
}
 
export default Comments;