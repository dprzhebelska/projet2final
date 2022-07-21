import { Avatar, Comment } from 'antd';
import React from 'react';

function SampleComment ({children}) {

    var texts = ["I love this piece!", "I'm learning this right now", "I need help!!"];

    var names = ["Darsy", "Sophie", "Martha"];
    return (
        <Comment
            actions={[<span key="comment-nested-reply-to">Reply to</span>]}
            author={<a>{names[Math.floor(Math.random()*3)]}</a>}
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Darsy" />}
            content={
                <p>
                    {texts[Math.floor(Math.random()*3)]}
                </p>
            }
        >
            {children}
        </Comment>
    )
}

export default SampleComment