import React from 'react';
import BlockOne from "./BlockOne/BlockOne";
import BlockTwo from "./BlockTwo/BlockTwo";
import BlockThree from "./BlockThree/BlockThree";

const MainBlock = () => {
    return (
        <div className='mainBlock'>
            <BlockOne/>
            <BlockTwo/>
            <BlockThree/>
        </div>
    );
};

export default MainBlock;