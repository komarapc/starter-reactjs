import { cn } from "@/lib/utils";
import { selectDarkMode, toggleDarkMode } from "@/redux/reducer/themeReducer";
import { Tooltip } from "@nextui-org/react";
import { Moon, Sun } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

const ToggleDarkMode = () => {
  const darkMode = useSelector(selectDarkMode);
  const dispatch = useDispatch();
  return (
    <>
      <div
        onClick={() => dispatch(toggleDarkMode())}
        className="cursor-pointer"
      >
        {" "}
        <Tooltip
          content="Switch Theme"
          className={cn(
            darkMode && "dark",
            "bg-popover text-popover-foreground"
          )}
        >
          {darkMode ? <Sun /> : <Moon />}
        </Tooltip>
      </div>
    </>
  );
};

export default ToggleDarkMode;
