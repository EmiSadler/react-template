

const Button = ({ onClick, label}) => {
  return <button id="button" onClick={onClick}>{label}</button>;
};

export default Button;
