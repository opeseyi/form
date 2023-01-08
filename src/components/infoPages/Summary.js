const Summary = (props) => {
  return (
    <div>
      <h1 className="font-semibold text-3xl text-center mt-20">
        {props.headText}
      </h1>
      <h3 className="text-gray-500 text-base tracking-wide mt-5 text-center">
        {props.text1}
        <br />
        {props.text2}
      </h3>
    </div>
  );
};
export default Summary;
