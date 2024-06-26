import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import cityData from "../../json/cityData.json";

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
      <div className="header"
        style={{
          borderColor: showBottomBorder,
          height: divHeight,
        }}
      >
        <div onClick={() => {
          if (divHeight == finalHeightOfParentDiv) {
            setMenuVisible(!menuVisible);
          }
        }} >
          <img
            className="header-logo"
            src="/sun.svg"
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
        <Link to="/">
          <h1
            className="header-title"
            style={{
              color: "black",
              transform: `translate(${transformTitleX}%, ${transformTitleY}%)`,
              left: `${leftTitle}%`,
              top: `${topTitle}%`,
            }}
          >
            All about the sun
          </h1>
        </Link>
      </div >
      <div className={menuVisible && divHeight === finalHeightOfParentDiv ? 'menu visible' : 'menu'}>
        <ul>
          <Link to="/" onClick={() => setMenuVisible(false)}>
            <li><strong>Home</strong></li>
          </Link>
          <Link to="/about" onClick={() => setMenuVisible(false)}>
            <li><strong>About</strong></li>
          </Link>
          <Link to="/examples" onClick={() => setMenuVisible(false)}>
            <li><strong>Examples</strong></li>
          </Link>
          <li><strong>Cities:</strong></li>
          <ul className="nested-ul">
            {cityData.map((item, index) => (
              <Link key={index} to={`/city/${item.name.toLowerCase().replace(/ /g, "-")}`} onClick={() => setMenuVisible(false)}>
                <li>{item.name}</li>
              </Link>
            ))}

          </ul>
        </ul>
      </div >
    </>
  );
};
