import PeopleIcon from '@mui/icons-material/People';
import StorageIcon from '@mui/icons-material/Storage';
import CollectionsIcon from '@mui/icons-material/Collections';
import PublicIcon from '@mui/icons-material/Public';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import VerticalShadesClosedIcon from '@mui/icons-material/VerticalShadesClosed';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import TaxiAlertIcon from '@mui/icons-material/TaxiAlert';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
export const NavBarLists = [
    {
        id : 0,
        icon : <PeopleIcon />,
        label : "Add Car",
        route : "addCar"
    },
    {
        id : 1,
        icon : <StorageIcon />,
        label : "Add Driver And Accountant",
        route : "addDriverAndAccountant"
    },
    {
        id :2,
        icon : <CollectionsIcon />,
        label : "Add Car And Accounts",
        route : "addCarAndAccounts"
    },
    {
        id : 3,
        icon : <PeopleIcon />,
        label : "AddUser",
        route : "addUser"
    },
    {
        id : 4,
        icon : <SwapHorizIcon />,
        label : "Add Car And Driver",
        route : "addCarAndDriver"
    },
    {
        id : 5,
        icon : <VerticalShadesClosedIcon />,
        label : "Add Employees And Cars",
        route : "addEmpsAndCars"
    },
    {
        id : 6,
        icon : <VerticalShadesClosedIcon />,
        label : "Add Driver And HR",
        route : "addDriverAndHR"
    },
    {
        id : 7,
        icon : <PublicIcon />,
        label : "Show Users",
        route : "showUsers"
    },
    {
        id : 8,
        icon : <LocalShippingIcon />,
        label : "Show Cars",
        route : "showCars"
    },
    {
        id : 9,
        icon : <StorageIcon />,
        label : "Show Cars And Accountants",
        route : "showCarsAndAccountas"
    },
    {
        id : 10,
        icon : <AccountBalanceWalletIcon />,
        label : "Show Driver And Accounts",
        route : "showDriverAndAccounts"
    },
    {
        id : 11,
        icon : <TaxiAlertIcon />,
        label : "Show Employes And Car",
        route : "showEmpsAndCar"
    },
    {
        id : 12,
        icon : <DriveEtaIcon />,
        label : "Show Car And Driver",
        route : "showCarAndDriver"
    },
    {
        id : 13,
        icon : <AssuredWorkloadIcon />,
        label : "Show Driver And HR",
        route : "showDriverAndHR"
    },
    
]