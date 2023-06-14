// import
import Dashboard from "views/Dashboard/Dashboard";
import Tables from "views/Dashboard/Tables";
import Billing from "views/Dashboard/Billing";
import RTLPage from "views/Dashboard/RTL";
import Profile from "views/Dashboard/Profile";
import SignIn from "views/Auth/SignIn.js";
import SignUp from "views/Auth/SignUp.js";
import Backbone from "views/Dashboard/Dashboard/components/ListPOP/Backbone";
import SBackbone from "views/Dashboard/Dashboard/components/ListPOP/Sbackbone";

import { HomeIcon, SaveAs, StatsIcon, CreditIcon, PersonIcon, DocumentIcon, RocketIcon, SupportIcon } from "components/Icons/Icons";
import Akses from "views/Dashboard/Dashboard/components/ListPOP/Akses";
import Distribusi from "views/Dashboard/Dashboard/components/ListPOP/Distribusi";
import Gi from "views/Dashboard/Dashboard/components/ListPOP/Gi";
import FormPM from "views/Dashboard/FormPM";
import DetailPOP from "views/Dashboard/Dashboard/components/ListPOP/Detail";
import Cover from "views/Dashboard/FormPM/components/Cover";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: <HomeIcon color="inherit" />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/sbackbone",
    name: "S-Backbone",
    /*  rtlName: "لوحة القيادة",
    icon: <HomeIcon color="inherit" />, */
    component: SBackbone,
    layout: "/admin",
  },

  {
    path: "/backbone",
    name: "Backbone",
    /*  rtlName: "لوحة القيادة",
    icon: <HomeIcon color="inherit" />, */
    component: Backbone,
    layout: "/admin",
  },

  {
    path: "/distribusi",
    name: "Distribusi",
    /*  rtlName: "لوحة القيادة",
    icon: <HomeIcon color="inherit" />, */
    component: Distribusi,
    layout: "/admin",
  },

  {
    path: "/akses",
    name: "Akses",
    /*  rtlName: "لوحة القيادة",
    icon: <HomeIcon color="inherit" />, */
    component: Akses,
    layout: "/admin",
  },

  {
    path: "/gi",
    name: "GI",
    /*  rtlName: "لوحة القيادة",
    icon: <HomeIcon color="inherit" />, */
    component: Gi,
    layout: "/admin",
  },
  {
    path: "/form-pm",
    name: "FormPM",
    rtlName: "لوحة القيادة",
    icon: <CreditIcon color="inherit" />,
    component: FormPM,
    layout: "/admin",
  },
  {
    path: "/detailPOP/:id",
    name: "DetailPOP",
    rtlName: "لوحة القيادة",
    icon: <CreditIcon color="inherit" />,
    component: DetailPOP,
    layout: "/admin",
  },
  /*   {
    path: "/kwh",
    name: "Kwh",
    rtlName: "لوحة القيادة",
    icon: <CreditIcon color="inherit" />,
    component: Kwh,
    layout: "/admin",
  }, */
  /*   {
    path: "/tables",
    name: "Tables",
    rtlName: "لوحة القيادة",
    icon: <StatsIcon color="inherit" />,
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/billing",
    name: "Billing",
    rtlName: "لوحة القيادة",
    icon: <CreditIcon color="inherit" />,
    component: Billing,
    layout: "/admin",
  },
  {
    path: "/rtl-support-page",
    name: "RTL",
    rtlName: "آرتيإل",
    icon: <SupportIcon color="inherit" />,
    component: RTLPage,
    layout: "/rtl",
  }, */
  {
    name: "ACCOUNT PAGES",
    category: "account",
    rtlName: "صفحات",
    state: "pageCollapse",
    views: [
      {
        path: "/profile",
        name: "Profile",
        rtlName: "لوحة القيادة",
        icon: <PersonIcon color="inherit" />,
        secondaryNavbar: true,
        component: Profile,
        layout: "/admin",
      },
      {
        path: "/signin",
        name: "Sign In",
        rtlName: "لوحة القيادة",
        icon: <DocumentIcon color="inherit" />,
        component: SignIn,
        layout: "/auth",
      },
      {
        path: "/signup",
        name: "Sign Up",
        rtlName: "لوحة القيادة",
        icon: <RocketIcon color="inherit" />,
        secondaryNavbar: true,
        component: SignUp,
        layout: "/auth",
      },
    ],
  },
];
export default dashRoutes;
