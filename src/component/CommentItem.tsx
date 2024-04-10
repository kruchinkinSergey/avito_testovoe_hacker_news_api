import { useEffect, useState } from 'react';
import { getComment } from '../API/getNews';
import { CommentType } from '../API/APITypes';

interface СommentProps {
    comment: number;
}

const initial = {
    by: '0',
    id: 0,
    kids: [],
    parent: 0,
    text: '0',
    time: 0,
}

function CommentItem({comment}: СommentProps) {
    const [com, setCom] = useState<CommentType>(initial)

    useEffect(() => {
        async function fetchComment() {
            try {
                const response = await getComment(comment)
                setCom(response.data)
            } catch (e) {
                console.log(e)
            }
        }

        fetchComment()
    }, [comment])

    return ( 
        <div style={{overflow: 'hidden', width: 'auto', height: 'auto', display: 'flex', flexDirection: 'column', gap: '7px'}}>
            {com && (
                <>
                    <p style={{fontWeight: '700'}}>{com.by}: </p>
                    <p dangerouslySetInnerHTML={{ __html: com.text }}></p>
                </>
            )}
        </div>
     );
}

export default CommentItem;