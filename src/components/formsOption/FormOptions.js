import { useState } from "react";
import FirstPage from "../infoPages/FirstPage";
import Button from "../UI/button";

const FormsOptions = (props) => {
  const [nameSelected, setNameSelected] = useState(true);
  const [info, setInfo] = useState(false);
  const [identification, setIdentification] = useState(false);
  const [qr, setQr] = useState(false);

  const nameClickHandler = () => {
    setNameSelected(true);
    props.onFirstPage(nameSelected);
    setNameSelected(false);
  };

  const infoClickHandler = () => {
    setInfo(true);
    props.onSecondPage(info);
    setInfo(false);
  };

  const identificationClickHandler = () => {
    setIdentification(true);
    props.onThirdPage(identification);
    setIdentification(false);
  };

  const qrClickHandler = () => {
    setQr(true);
    props.onFourthPage(qr);
    setQr(false);
  };

  return (
    <section className="flex justify-center mt-20">
      <div>
        <Button
          onClick={nameClickHandler}
          text="1"
          otherColor="p-2 bg-green-300 w-10 text-white "
        />
        <h1 className="mx-4 inline">Full Name</h1>
      </div>
      <div>
        <Button
          onClick={infoClickHandler}
          text="2"
          otherColor="p-2 bg-green-300 w-10 text-white"
        />
        <h1 className="mx-4 inline">Personal Information</h1>
      </div>
      <div>
        <Button
          onClick={identificationClickHandler}
          text="3"
          otherColor="p-2 bg-green-300 w-10 text-white"
        />
        <h1 className="mx-4 inline">Identification</h1>
      </div>
      <div>
        <Button
          onClick={qrClickHandler}
          text="4"
          otherColor="p-2 bg-green-300 w-10 text-white"
        />
        <h1 className="ml-4 inline">Your QR Code</h1>
      </div>
    </section>
  );
};

export default FormsOptions;
