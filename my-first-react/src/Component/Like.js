import React, { useState } from 'react'
import './Sneakers.css'
const LikeButton = () => {
    const [text, setText] = useState('Таалагдсан')
    return (
        <div>
            <button
                className={text === 'Таалагдаагүй' ? 'dislike' : 'like'}
                onClick={() => { setText(text === 'Таалагдаагүй' ? 'Таалагдсан' : 'Таалагдаагүй') }}>
                {text}
            </button>
        </div>
    )
}

export default LikeButton