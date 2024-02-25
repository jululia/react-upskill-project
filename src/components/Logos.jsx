import reactLogo from "../assets/react.svg";
import sunLogo from "/sun.svg";
import technigo from "../assets/technigo-logo.svg";
export const Logos = () => {
  return (
    <div>
      <a target="_blank">
        <img src={sunLogo} className="logo" alt="Sun" style={{ width: 300, height: 300 }}/>
      </a>
    </div>
  );
};
