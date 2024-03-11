import { cn } from "@/lib/utils";
import { selectDarkMode } from "@/redux/reducer/themeReducer";
import { HTMLAttributes } from "react";
import { useSelector } from "react-redux";

const Wrapper = ({
  className = "",
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  const darkMode = useSelector(selectDarkMode);
  return (
    <>
      <div
        className={cn(
          "w-full min-h-screen font-inter",
          darkMode ? "dark" : "light",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </>
  );
};

export default Wrapper;
