import React, {useContext, useState} from "react";
import {AuthContext} from "../providers/AppProviders";
import {signIn} from "../services/twitterApi";

export const SignIn = () => {
    const {setSession} = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        signIn({username, password})
            .then(result => setSession(result))
            .catch(console.error);
    };

    return (
        <div className="w-full self-center">
            <form onSubmit={handleSubmit} className="flex flex-col m-auto p-4 w-5/12">
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    className="flex-1 m-2 p-2 border rounded-full outline-none"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="flex-1 m-2 p-2 border rounded-full outline-none"
                />
                <button
                    type="submit"
                    disabled={!(username || password)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-full m-2"
                >Submit
                </button>
            </form>
        </div>
    );
}
