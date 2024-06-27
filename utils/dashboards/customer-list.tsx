import DashboardIcon from "@mui/icons-material/Dashboard";
import MailIcon from "@mui/icons-material/Mail";
import CompanyIcon from "@mui/icons-material/Business";
import SalesIcon from "@mui/icons-material/AttachMoney";
import QuotesIcon from "@mui/icons-material/FormatQuote";
import SubscriptionIcon from "@mui/icons-material/Subscriptions";
import ReportsIcon from "@mui/icons-material/Assessment";
import ProductsIcon from "@mui/icons-material/Store";
import SettingIcon from "@mui/icons-material/Settings";
import SearchIcon from "@mui/icons-material/Search";
import MessageIcon from "@mui/icons-material/Message";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";

type CustomerListItem = {
  page: string;
  icon: JSX.Element;
  submenu?: CustomerListItem[];
};

export const costomerList: CustomerListItem[] = [
  {
    page: "Dashboards",
    icon: <DashboardIcon />,
    submenu: [],
  },
  {
    page: "Customer",
    icon: <MailIcon />,
  },
  {
    page: "Company",
    icon: <CompanyIcon />,
  },
  {
    page: "Sales",
    icon: <SalesIcon />,
  },
  {
    page: "Quotes",
    icon: <QuotesIcon />,
  },
  {
    page: "Subscription",
    icon: <SubscriptionIcon />,
  },
  {
    page: "Reports",
    icon: <ReportsIcon />,
  },
  {
    page: "Products",
    icon: <ProductsIcon />,
  },
  {
    page: "Setting",
    icon: <SettingIcon />,
  },
];

type NotificationListItem = {
  notification: string;
  icon: JSX.Element;
};

export const notificationList: NotificationListItem[] = [
  {
    notification: "Search",
    icon: <SearchIcon />,
  },
  {
    notification: "Messages",
    icon: <MessageIcon />,
  },
  {
    notification: "Apps",
    icon: <AppsIcon />,
  },
  {
    notification: "Notification",
    icon: <NotificationsIcon />,
  },
];
