import { Router, Route, RootRoute } from '@tanstack/router'

const rootRoute = new RootRoute()

const usersRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/users',
  component: Users,
})
