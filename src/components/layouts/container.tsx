import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

const Container = ({
  className = "",
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <>
      <div {...props} className={cn("container mx-auto", className)}>
        {children}
      </div>
    </>
  );
};

export default Container;
