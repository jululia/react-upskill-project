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
    const calcSize = (startScrolling-scrollPosition) > 50 ? 250-scrollPosition : 50;
    const calcFontSize = (startScrolling-scrollPosition) > 225 ? 50-scrollPosition : 25;
    const flexGrow = (startScrolling-scrollPosition) > 50 ? 1 : 0;
    const showBottomBorder = (430- scrollPosition) > 70 ? "transparent" : "grey";
    const alignText = (430- scrollPosition) > 70 ? "center" : "center";
    const backgroudColor = (430- scrollPosition) > 70 ? "transparent" : "white";
    const divHeight =  (430- scrollPosition) > 70 ? 430-scrollPosition : 70;
    const leftSun =  (430- scrollPosition) > 70 ? 50+40/430*scrollPosition : 90;
    const leftTitle =  (430- scrollPosition) > 70 ? 50-40/430*scrollPosition : 0;
    const transformTitle =  (430- scrollPosition) > 70 ? -50 : -50;
    const titleTop =  (430- scrollPosition) > 70 ? 90 : 50;
    const sunTop =  (430- scrollPosition) > 40 ? 40+scrollPosition/430*10 : 50;
    
    

    
   

    return (
        <div className="header" style={{borderColor:showBottomBorder, alignText: alignText, backgroundColor: backgroudColor, height: divHeight}}>
            <img className="header-logo" src="sun.svg" width={calcSize} height={calcSize} style={{
                flexGrow: flexGrow, 
                left: `${leftSun}%`,
                top: `${sunTop}%`} } alt="Logo" />
            <h1 className="header-title" style={{
                // transform: `translate(${transformTitle}%, -50%)`, 
                fontSize: `${calcFontSize}px`, 
                // alignText: alignText, 
                // flexGrow: flexGrow, 
                left: `${50}%`,
                top: `${titleTop}%`
                } }>All about the sun</h1>
        </div>
    );
};