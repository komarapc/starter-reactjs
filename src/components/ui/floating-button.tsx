import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

const FloatingButton = ({
  className = "",
  children,
  ...rest
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <>
      <div {...rest} className={cn("fixed bottom-4 right-4", className)}>
        {children}
      </div>
    </>
  );
};

export default FloatingButton;
