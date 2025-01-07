import {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";

import {HomePageAsync} from "pages/homePage/ui";
import {AboutPageAsync} from "pages/aboutPage/ui";
import {routeConfig} from "../../../../shared/config/routeConfig/routeConfig";

const AppRouter = () => {
    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            <Routes>
                {
                    Object.values(routeConfig).map(({element, path}) => (
                        <Route
                            key={path}
                            path={path}
                            element={element}
                        />
                    ))
                }
                {/*<Route path={"/"} element={<HomePageAsync/>}/>*/}
                {/*<Route path={"/about"} element={<AboutPageAsync/>}/>*/}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;