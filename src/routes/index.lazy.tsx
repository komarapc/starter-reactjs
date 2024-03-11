import PageNotFound from "@/pages/404";
import InternalServerError from "@/pages/500";
import Home from "@/pages/home";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Home,
  errorComponent: InternalServerError,
  notFoundComponent: PageNotFound,
});
