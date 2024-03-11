import { stringToBoolean } from "@/lib/utils";

export const app = {
  debug: stringToBoolean(import.meta.env.VITE_APP_DEBUG),
};
