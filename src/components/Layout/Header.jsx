import React, { useState, useEffect } from 'react';

export const Header = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const startScrolling = 250
    const calcSize = (startScrolling-scrollPosition) > 0 ? 250-0.8*scrollPosition : 50;
    const calcFontSize = (startScrolling-scrollPosition) > 0 ? 50-scrollPosition/14 : 25;
    const flexGrow = (startScrolling-scrollPosition) > 0 ? 1 : 0;
    const showBottomBorder = (startScrolling- scrollPosition) > 0 ? "white" : "grey";
    const alignText = (startScrolling- scrollPosition) > 0 ? "center" : "left";
    const backgroudColor = (startScrolling- scrollPosition) > 0 ? "transparent" : "white";

    // const myStyle = {
    //     color: 'red',
    //     fontSize: '20px'
    // };

    return (
        <div className="header" style={{borderColor:showBottomBorder, alignText: alignText, backgroundColor: backgroudColor }}>
            <img className="header-logo" src="sun.svg" width={calcSize} height={calcSize} style={{flexGrow: flexGrow} } alt="Logo" />
            <h1 className="header-title" style={{fontSize: `${calcFontSize}px`} }>All about the sun</h1>
        </div>
    );
};