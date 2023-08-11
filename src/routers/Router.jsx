import {SignIn} from "../components/SignIn";
import React, {useContext} from "react";
import {AuthContext} from "../providers/AppProviders";
import {Home} from "../components/Home";

export const Router = () => {
    const {session} = useContext(AuthContext);


    return (<div className="flex w-full h-full">
        {session?.username ? <Home/> :
            <SignIn/>
        }
    </div>);
};
