import { ReactNode } from "react";
import Sidebar from "../partials/sidebar";
import Navbar from "../partials/navbar";
import Container from "./container";
import Wrapper from "./wrapper";
import { useSelector } from "react-redux";
import { selectDarkMode } from "@/redux/reducer/themeReducer";
import { cn } from "@/lib/utils";

const AuthenticatedLayout = ({ children }: { children: ReactNode }) => {
  const darkMode = useSelector(selectDarkMode);
  return (
    <>
      <Wrapper className="flex">
        <div
          className={cn(
            "w-64 min-h-screen hidden lg:border-r bg-background lg:flex flex-col",
            darkMode ? "dark bg-background text-foreground" : "bg-white"
          )}
        >
          <div className="">
            <div className="w-full h-32 bg-primary"></div>
          </div>
          <div className="flex flex-col items-center space-y-2 p-2">
            <Sidebar />
          </div>
        </div>
        <div className="w-full min-h-screen bg-background">
          <Navbar />
          <Container>{children}</Container>
        </div>
      </Wrapper>
    </>
  );
};

export default AuthenticatedLayout;
