import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

export const Header = ({
  initialHeightOfParentDiv,
  finalHeightOfParentDiv,
  initialSizeSun,
}) => {

  const [scrollPosition, setScrollPosition] = useState(0);
  const [menuVisible, setMenuVisible] = useState(false);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const reRender =
    initialHeightOfParentDiv - scrollPosition > finalHeightOfParentDiv;


  const divHeight = reRender
    ? initialHeightOfParentDiv - scrollPosition
    : finalHeightOfParentDiv;
  const showBottomBorder = reRender ? "transparent" : "lightgrey";
  // const backgroudColor = reRender ? "transparent" : "white";

  const finalSizeSun = finalHeightOfParentDiv - 20;
  const sizeSun =
    divHeight > initialHeightOfParentDiv - initialSizeSun + finalSizeSun
      ? initialSizeSun - scrollPosition
      : finalSizeSun;

  const calculateCurrentValue = (initialValue, finalValue) => {
    const currentValue = reRender
      ? initialValue +
      (scrollPosition / (initialHeightOfParentDiv - finalHeightOfParentDiv)) *
      (finalValue - initialValue)
      : finalValue;
    return currentValue;
  };

  const leftSun = calculateCurrentValue(50, 100);
  const topSun = calculateCurrentValue(50, 50);
  const transformSun = calculateCurrentValue(-50, -100);

  const leftTitle = calculateCurrentValue(50, 0);
  const topTitle = calculateCurrentValue(90, 50);
  const transformTitleX = calculateCurrentValue(-50, -0);
  const transformTitleY = calculateCurrentValue(-50, -35);

  return (
    <>
      <div
        className="header"
        style={{
          borderColor: showBottomBorder,
          // backgroundColor: backgroudColor,
          height: divHeight,
        }}
      >
        <div onClick={() => setMenuVisible(!menuVisible)} >
          <img
            className="header-logo"
            src="sun.svg"
            width={sizeSun}
            height={sizeSun}
            style={{
              transform: `translate(${transformSun}%, -50%)`,
              left: `${leftSun}%`,
              top: `${topSun}%`,
            }}
            alt="Logo"
          />
        </div>
        {menuVisible && (
          <div className="menu">
        <ul>
           <li>
            <Link to="/" onClick={() => setMenuVisible(false)}>Home</Link>
          </li>
   
          <li>
            <Link to="/examples" onClick={() => setMenuVisible(false)}>Examples</Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setMenuVisible(false)}>About</Link>
          </li>
          {/* Add more links as needed */}
        </ul>
        </div>
      )}
        <h1
          className="header-title"
          style={{
            transform: `translate(${transformTitleX}%, ${transformTitleY}%)`,
            left: `${leftTitle}%`,
            top: `${topTitle}%`,
          }}
        >
          All about the sun
        </h1>
        {/* <div className='sun1'></div> */}
        {/* <div className='title1'></div> */}
        {/* <div className='sun2'></div> */}
        {/* <div className='title2'></div> */}
      </div>
      <div style={{ height: initialHeightOfParentDiv }}></div>{" "}
      {/*Added this empty div to push the rest down*/}
    </>
  );
};
