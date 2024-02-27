export const Image = ({ imageSrc, imageAlt }) => {
  return (
    <div>
      <img src={imageSrc} alt={imageAlt} className = "image"/>
    </div>
  );
};
