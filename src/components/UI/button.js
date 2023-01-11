const Button = (props) => {
  const colorAttribute = "rounded " + props.otherColor;
  return (
    <button onClick={props.onClick} className={colorAttribute} type="text">
      {props.text}
    </button>
  );
};

export default Button;
