import React from "react";
import {SignIn} from "./components/SignIn";
import {Tweets} from "./components/Tweets";
import {CreateTweet} from "./components/CreateTweet";
import {useSession} from "./hooks/useSession";
import { Icon } from '@iconify/react';

// Define the main component for rendering the app
const App = () => {
    const [session] = useSession();

    return (
        <div className="flex w-100% h-full">
            <div className="flex flex-col flex-initial w-1/6 h-100% items-end border-r border-rgb(239, 243, 244)">
                <Icon icon="devicon:twitter" fontSize={30} className="mr-5 mt-5"/>
            </div>
            <div className="w-2/3">
                <h1 className="text-xl font-bold px-4 pt-4 pb-8 border-b border-rgb(239, 243, 244)">Home</h1>
                {session ? (
                    <>
                        <CreateTweet/>
                        <Tweets/>
                    </>) : <>
                    <SignIn/>
                </>
                }
            </div>
            <div className="w-1/6 border-l border-rgb(239, 243, 244)"></div>
        </div>
    );
};

export default App;
