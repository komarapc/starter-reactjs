import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/login')({
  component: () => <div>Hello /login!</div>
})"@tanstack/react-router";

export const Route = createLazyFileRoute("/login")({
  component: Login,
  notFoundComponent: PageNotFound,
  errorComponent: InternalServerError,
  pendingComponent: () => <div>Loading...</div>,
});
