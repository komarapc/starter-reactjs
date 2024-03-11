import ForgotPassword from "@/pages/forgot-password";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/forgot-password")({
  component: ForgotPassword,
});
