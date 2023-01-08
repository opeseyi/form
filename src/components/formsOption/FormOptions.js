import Button from "../UI/button";

const FormsOptions = () => {
  return (
    <section className="flex justify-center mt-20">
      <div>
        <Button text="1" otherColor="p-2 bg-green-300 w-10 text-white " />
        <h1 className="mx-4 inline">Full Name</h1>
      </div>
      <div>
        <Button text="2" otherColor="p-2 bg-green-300 w-10 text-white" />
        <h1 className="mx-4 inline">Personal Information</h1>
      </div>
      <div>
        <Button text="3" otherColor="p-2 bg-green-300 w-10 text-white" />
        <h1 className="mx-4 inline">Identification</h1>
      </div>
      <div>
        <Button text="4" otherColor="p-2 bg-green-300 w-10 text-white" />
        <h1 className="ml-4 inline">Your QR Code</h1>
      </div>
    </section>
  );
};

export default FormsOptions;
