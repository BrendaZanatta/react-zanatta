import React from 'react';
import './bubble.css';

function Bubble({ children, isButton, onBubbleClick }) {
return (
    <div className={`bubble ${isButton ? 'botonBubble' : ''}`} onClick={() => isButton && onBubbleClick()}>
        { children }
    </div>
)
}

export default Bubble