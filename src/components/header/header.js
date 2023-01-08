import { ReactComponent as Logo } from "../../assets/Logo.svg";
import Button from "../UI/button";

const Header = () => {
  return (
    <header className="flex justify-between">
      <div>
        <Logo className="inline" />
      </div>
      <div>
        <Button
          text="Create Account"
          otherColor="h-10 w-48 border-2 text-base"
        />
      </div>
    </header>
  );
};

export default Header;
