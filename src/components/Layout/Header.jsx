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

    
    
    const showBottomBorder = (430- scrollPosition) > 65 ? "transparent" : "lightgrey";
    const backgroudColor = (430- scrollPosition) > 70 ? "transparent" : "white";
    const divHeight =  (430- scrollPosition) > 70 ? 430-scrollPosition : 70;

    const sizeSun = (250-scrollPosition) > 50 ? 250-scrollPosition : 50;
    const leftSun =  (430- scrollPosition) > 70 ? 50+scrollPosition/360*50 : 100;
    const topSun =  (430- scrollPosition) > 0 ? 40+scrollPosition/360*10 : 50;
    const transformSun =  (430- scrollPosition) > 70 ? -50-scrollPosition/360*50 : -100;

    const leftTitle =  (430- scrollPosition) > 70 ? 50-scrollPosition/360*50 : 0;
    const topTitle =  (430- scrollPosition) > 70 ? 90-scrollPosition/360*40 : 50;
    const transformTitle =  (430- scrollPosition) > 70 ? -50 + scrollPosition/360*50 : -0;
    
    
    
    
   

    return (
        <div className="header" style={{
            borderColor:showBottomBorder, 
            backgroundColor: backgroudColor, 
            height: divHeight}}>
            <img className="header-logo" src="sun.svg" width={sizeSun} height={sizeSun} style={{
                transform: `translate(${transformSun}%, -50%)`, 
                left: `${leftSun}%`,
                top: `${topSun}%`} } alt="Logo" />
            <h1 className="header-title" style={{
                transform: `translate(${transformTitle}%, -50%)`, 
                left: `${leftTitle}%`,
                top: `${topTitle}%`
                } }>All about the sun</h1>
            {/* <div className='sun1'></div>
            <div className='title1'></div>
            <div className='sun2'></div>
            <div className='title2'></div> */}
        </div>
    );
};