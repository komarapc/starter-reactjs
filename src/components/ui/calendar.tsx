import * as React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { DayPicker, useDayPicker, useNavigation } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { format, setMonth } from "date-fns";
import { Select, SelectContent, SelectItem, SelectTrigger } from "./select";
import { useSelector } from "react-redux";
import { selectDarkMode } from "@/redux/reducer/themeReducer";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  const darkMode = useSelector(selectDarkMode);
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "p-3 rounded",
        darkMode ? "dark bg-background text-foreground" : "bg-card",

        className
      )}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium hidden",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: cn(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
            : "[&:has([aria-selected])]:rounded-md"
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-8 w-8 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_start: "day-range-start",
        day_range_end: "day-range-end",
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground opacity-50  aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        caption_dropdowns: "flex gap-1 text-sm",
        ...classNames,
      }}
      components={{
        IconLeft: () => <ChevronLeftIcon className="h-4 w-4" />,
        IconRight: () => <ChevronRightIcon className="h-4 w-4" />,
        Dropdown: ({ ...props }) => {
          const { fromDate, fromMonth, fromYear, toDate, toMonth, toYear } =
            useDayPicker();
          const { goToMonth, currentMonth } = useNavigation();
          const selectMonthItems = Array.from({ length: 12 }, (_, i) => ({
            value: i.toString(),
            label: format(setMonth(new Date(), i), "MMM"),
          }));

          const earliestYear =
            fromYear ||
            fromMonth?.getFullYear() ||
            fromDate?.getFullYear() ||
            new Date().getFullYear();
          const latestYear =
            toYear ||
            toMonth?.getFullYear() ||
            toDate?.getFullYear() ||
            new Date().getFullYear() ||
            new Date().getFullYear();

          const yearsLength =
            earliestYear && latestYear
              ? latestYear - earliestYear + 1
              : latestYear - earliestYear;
          const selectYearsItems = Array.from(
            { length: yearsLength },
            (_, i) => ({
              value: (earliestYear + i).toString(),
              label: (earliestYear + i).toString(),
            })
          );
          if (props.name === "months")
            return (
              <SelectCalendar
                name={format(currentMonth, "MMM")}
                selectItems={selectMonthItems}
                value={props.value?.toString()}
                onChange={(newValue) => {
                  const newDate = new Date(currentMonth);
                  newDate.setMonth(parseInt(newValue));
                  goToMonth(newDate);
                }}
              />
            );
          if (props.name === "years")
            return (
              <SelectCalendar
                name={currentMonth.getFullYear()}
                selectItems={selectYearsItems}
                value={props.value?.toString()}
                onChange={(newValue) => {
                  const newDate = new Date(currentMonth);
                  newDate.setFullYear(parseInt(newValue));
                  goToMonth(newDate);
                }}
              />
            );
          return null;
        },
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

type SelectItem = {
  label: string;
  value: string;
};
type SelectCalendar = {
  name: string | number;
  selectItems: SelectItem[];
  value?: string | undefined;
  onChange?: (value: string) => void;
};

function SelectCalendar({
  name,
  selectItems,
  value,
  onChange,
}: SelectCalendar) {
  const darkMode = useSelector(selectDarkMode);
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger>{name}</SelectTrigger>
      <SelectContent
        className={cn(darkMode && "dark bg-background text-foreground")}
      >
        {selectItems.map((item, i: number) => (
          <SelectItem key={i} value={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export { Calendar };
