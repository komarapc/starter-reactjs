import PageNotFound from "@/pages/404";
import InternalServerError from "@/pages/500";
import ResetPassword from "@/pages/reset-password";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/reset-password")({
  component: ResetPassword,
  errorComponent: InternalServerError,
  notFoundComponent: PageNotFound,
});
