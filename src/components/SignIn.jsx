import React, {useState} from "react";
import axios from "axios";
import {useSession} from "../hooks/useSession";

export const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [session, setSession] = useSession();

    const handleSubmit = (e) => {
        e.preventDefault();
        const backendBaseUrl = 'http://localhost:8080';
        const backendLoginPath = '/login';
        const data = new URLSearchParams();
        data.append('username', username);
        data.append('password', password);
        axios.post(backendBaseUrl + backendLoginPath, data, {
            headers: {
                'Accept': 'application/json'
            }
        }).then(result => {
            console.log(result);
            setSession({
                jSessionId: result.headers['JSESSIONID']
            });
        })
            .catch(console.error);
    };

    return (
        <div className="content-center">
            <form onSubmit={handleSubmit} className="flex p-4 border-b border-gray-200">
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    className="flex-1 ml-4 p-2 border rounded-full outline-none"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="flex-1 ml-4 p-2 border rounded-full outline-none"
                />
                <button
                    type="submit"
                    disabled={!(username || password)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-full ml-4"
                >Submit
                </button>
            </form>
        </div>
    );
}
