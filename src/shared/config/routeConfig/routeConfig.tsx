import {RouteProps} from "react-router-dom";
import HomePage from "../../../pages/homePage/ui/homePage";
import AboutPage from "../../../pages/aboutPage/ui/aboutPage";

export enum AppRoutes {
    HOME = "main",
    ABOUT = "about"
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: "/",
    [AppRoutes.ABOUT]: "/about"
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.HOME]: {
        path: RoutePath.main,
        element: <HomePage/>
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage/>
    }
}
