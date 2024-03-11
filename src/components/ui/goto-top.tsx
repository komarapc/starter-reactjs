import { Button } from "@nextui-org/react";
import FloatingButton from "./floating-button";
import { ArrowUp } from "lucide-react";

export const GotoTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <FloatingButton>
        <Button
          isIconOnly
          color="primary"
          variant="flat"
          onClick={() => scrollToTop()}
        >
          <ArrowUp />
        </Button>
      </FloatingButton>
    </>
  );
};

export default GotoTop;
