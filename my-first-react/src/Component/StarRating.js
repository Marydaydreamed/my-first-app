import React, { useState } from 'react'

const LikeButton = () => {
    const [text, setText ] = useState('⭐')
    return (
        <div>
            <button 
                className={text === '☆' ? '☆' : '⭐'}
                onClick={() => { setText(text === '☆' ? '⭐' : '☆') }}>
                {text}
            </button>
        </div>
    )
}

export default LikeButton
