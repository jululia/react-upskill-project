import PropTypes from "prop-types";

export const PropComponentPropTypes = ({
  city,
  longitude,
  latitude,
  likesPizza,
}) => {
  return (
    <div className="city">
      <h2>{city}</h2>
      <p>Longitude: {longitude}</p>
      <p>Latitude: {latitude}</p>
      <strong>Is pineapple pizza a thing there?</strong>
      {likesPizza ? (
        <p>Yes! 🍍🍕</p>
      ) : (
        <p>No, that sounds stupid! 🍍🍕</p>
      )}
    </div>
  );
};

PropComponentPropTypes.propTypes = {
  city: PropTypes.string.isRequired,
  longitude: PropTypes.number.isRequired,
  latitude: PropTypes.number.isRequired,
  likesPizza: PropTypes.bool,
};

// In this code, propTypes is a way to ensure that the PropComponentPropTypes component receives the right type of data for its props. Here's a simple breakdown:

// name: Expected to be a string and is required.
// age: Expected to be a number and is required.
// birthplace: Expected to be a string and is required.
// likesPizza: Expected to be a boolean (either true or false). It's not marked as required, so it's optional.
// If the component doesn't receive the expected type of data for these props, propTypes will give a warning in the console during development. This helps catch mistakes and ensures the component gets the right kind of information to work properly.

// IF you want to see this error on the console, please proceed to the App.jsx file and remove the name prop with the stringValue "Jennie" within the component PropComponentPropTypes and see the message on the console
