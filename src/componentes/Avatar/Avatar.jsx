import "./Avatar.css";

const Avatar = ({ nome }) => {
  let primeirasLetras = nome
    .split(" ")
    .map((item) => item[0])
    .join("")
    .toUpperCase();

  if (primeirasLetras.length > 2) {
    primeirasLetras = primeirasLetras.slice(0, 2);
  }

  return <div className="avatar__root">{primeirasLetras}</div>;
};

export default Avatar;