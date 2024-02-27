import { Array } from "./Array";
import { Function } from "./Function";
import { Number } from "./Number";
import { Text } from "./Text";
import { Object } from "./Object";
import { Boolean } from "./Boolean";
import { Image } from "./Image";

export const DataParent = () => {
  const textProp = "Hello, World!";
  const numberProp = 42;
  const arrayProp = ["Item 1", "Item 2", "Item 3"];

  const handleClick = () => {
    alert("Button clicked!");
  };

  const showCurrentDate = () => {
    const today = new Date();
    const mm = String(today.getMonth() + 1).padStart(2, "0"); // Month is zero-based
    const dd = String(today.getDate()).padStart(2, "0");
    const yyyy = today.getFullYear();
    const formattedDate = `${yyyy}-${mm}-${dd}`;

    alert(`Today's date is: ${formattedDate}`);
  };

  const person = {
    name: "Julia",
    age: 35,
  };

  const imageURL = "https://cdn.shopify.com/s/files/1/2182/2603/files/redchilipepper.jpg?v=1669750479";
  const imageAltText = "A cool picture of two red hot chili peppers";

  return (
    <div className="explanation">
      <Text text={textProp} />
      <hr />
      <Number number={numberProp} />
      <hr />
      <Function onClick={handleClick} />
      <Function onClick={showCurrentDate} />
      <hr />
      <Array items={arrayProp} />
      <hr />
      <Object personObject={person} />
      <hr />
      <Boolean value={true} />
      <hr />
      <Boolean value={false} />
      <hr />
      <Image imageSrc={imageURL} imageAlt={imageAltText }  />

    </div>
  );
};
