import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import { IconType } from "react-icons/lib";
import { Home, LucideIcon } from "lucide-react";
import { ElementType } from "react";
type Menu = {
  group: string;
  preffix?: string;
  items: Array<{
    name: string;
    href?: string;
    icon: LucideIcon | IconType | ElementType;
  }>;
};

const menuLists: Menu[] = [
  {
    group: "Dashboard",
    items: [{ name: "Home", href: "/", icon: Home }],
    preffix: "",
  },
];

const Sidebar = () => {
  return (
    <>
      <Command className="rounded-lg bg-transparent text-foreground">
        <CommandInput placeholder="Type a menu or search" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {menuLists.map((menu, i) => (
            <CommandGroup key={i} heading={menu.group}>
              {menu.items.map((item, key) => (
                <CommandItem key={key} className="cursor-pointer">
                  <item.icon className="mr-2 h-4 w-4" />
                  <span>{item.name}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </Command>
    </>
  );
};

export default Sidebar;
