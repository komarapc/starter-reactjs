import PageNotFound from "@/pages/404";
import InternalServerError from "@/pages/500";
import Login from "@/pages/login";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/login")({
  component: Login,
  notFoundComponent: PageNotFound,
  errorComponent: InternalServerError,
  pendingComponent: () => <div>Loading...</div>,
});
