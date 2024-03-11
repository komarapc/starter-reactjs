import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Tooltip,
  User,
} from "@nextui-org/react";
import { UserRound, Settings2, LogOut, Menu, HelpCircle } from "lucide-react";
import ToggleDarkMode from "@/components/ui/toggle-darkmode";
import { useSelector } from "react-redux";
import { selectDarkMode } from "@/redux/reducer/themeReducer";
import { cn } from "@/lib/utils";
const Navbar = () => {
  const darkMode = useSelector(selectDarkMode);

  return (
    <>
      <div
        className={cn(
          "w-full px-5 h-16 shadow-sm border-b flex items-center justify-between",
          darkMode ? "dark bg-background text-foreground" : "bg-white"
        )}
      >
        <div className="flex items-center space-x-4">
          <Menu className="cursor-pointer" />
        </div>
        <div className="flex items-center space-x-8">
          <Tooltip
            content="Help"
            className={cn(
              darkMode && "dark",
              "bg-popover text-popover-foreground"
            )}
          >
            <HelpCircle />
          </Tooltip>
          <ToggleDarkMode />
          <Dropdown
            className={cn(
              darkMode && "dark",
              "bg-popover text-popover-foreground"
            )}
          >
            <DropdownTrigger className="cursor-pointer">
              <User
                name="Izmi"
                description="Admin"
                avatarProps={{
                  src: "https://avatars.githubusercontent.com/u/49517660?v=4",
                }}
              />
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownItem>
                <div className="flex items-center space-x-2">
                  <UserRound size={14} />
                  <span>Profile</span>
                </div>
              </DropdownItem>
              <DropdownItem>
                <div className="flex items-center space-x-2">
                  <Settings2 size={14} />
                  <span>Settings</span>
                </div>
              </DropdownItem>
              <DropdownItem className="text-danger" color="danger">
                <div className="flex items-center space-x-2">
                  <LogOut size={14} />
                  <span>Sign out</span>
                </div>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </>
  );
};
export default Navbar;
