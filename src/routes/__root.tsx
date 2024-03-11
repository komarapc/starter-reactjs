import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
export const Route = createRootRoute({ component: Page });
import { app } from "@/config/app";
function Page() {
  return (
    <>
      <Outlet />
      {app.debug && <TanStackRouterDevtools />}
    </>
  );
}
