import { EgretLoadable } from "egret";
import { authRoles } from "../../auth/authRoles";

const OneDeck = EgretLoadable({
  loader: () => import("./OneDeck")
});
const Analytics = EgretLoadable({
  loader: () => import("./Analytics")
});
const Sales = EgretLoadable({
  loader: () => import("./Sales")
});
const Dashboard1 = EgretLoadable({
  loader: () => import("./Dashboard1")
});

const dashboardRoutes = [
  {
    path: "/dashboard/analytics",
    component: Analytics,
    auth: authRoles.admin
  },
  {
    path: "/dashboard/sales",
    component: Sales,
    auth: authRoles.admin
  },
  // {
  //   path: "/dashboard/dashboard1",
  //   component: Dashboard1
  // },
  {
    path: "/dashboard/deck",
    component: OneDeck,
    auth: authRoles.admin
  }
];

export default dashboardRoutes;
