import React from 'react';
import './MainTitle.css';

const MainTitle = React.forwardRef(({ title }, ref) => {
    return (
        <h2 ref={ref}>{title}</h2>
    );
});

export default MainTitle;


