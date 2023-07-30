import {Icon} from "@iconify/react";
import {CreateTweet} from "./CreateTweet";
import {Tweets} from "./Tweets";
import React from "react";

export const Home = () => (<>
    <div className="flex flex-col flex-initial w-1/6 h-100% items-end border-r border-rgb(239, 243, 244)">
        <Icon icon="devicon:twitter" fontSize={30} className="mr-5 mt-5"/>
    </div>
    <div className="w-2/3 max-w-2/3">
        <h1 className="text-xl font-bold px-4 pt-4 pb-8 border-b border-rgb(239, 243, 244)">Home</h1>
        <CreateTweet/>
        <Tweets/>
    </div>
    <div className="w-1/6 border-l border-rgb(239, 243, 244)"></div>
</>);
