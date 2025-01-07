import React from 'react';
import {Link} from "react-router-dom";

import {AppRouter} from "./providers/router";

export const App = () => {
    return (
        <div>
            <div>
                <Link to={"/"}>Home</Link>
                <Link to={"/about"}>About</Link>
            </div>
            <AppRouter/>
        </div>
    );
}
