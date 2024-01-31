import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Navigate,
    useLocation,
} from "react-router-dom";
import Userfront, {
    SignupForm,
    LoginForm,
    PasswordResetForm
} from "@userfront/toolkit/react";
import Navbar from "./components/Navbar";
import Button from '@mui/joy/Button';
import Sidebar from "./components/Sidebar";
import {CssVarsProvider} from "@mui/joy";

Userfront.init("jb78v48n");


export default function App() {
    return (
        <CssVarsProvider disableTransitionOnChange>

            <Router>

                <Sidebar/>
                <Button variant="solid">Hello world</Button>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/reset" element={<PasswordReset/>}/>
                    <Route
                        path="/dashboard"
                        element={
                            <RequireAuth>
                                <Dashboard/>
                            </RequireAuth>
                        }
                    />
                </Routes>
            </Router>
        </CssVarsProvider>
    )
        ;
}

function Home() {
    return (
        <div>
            <h2>Home</h2>
            <SignupForm/>
        </div>
    );
}

function Login() {
    return (
        <div>
            <h2>Login</h2>
            <LoginForm/>
        </div>
    );
}

function PasswordReset() {
    return (
        <div>
            <h2>Password Reset</h2>
            <PasswordResetForm/>
        </div>
    );
}

function Dashboard() {
    const userData = JSON.stringify(Userfront.user, null, 2);
    return (
        <div>

            <h2>Dashboard</h2>
            <pre>{userData}</pre>
            <button onClick={Userfront.logout}>Logout</button>
        </div>
    );
}

function RequireAuth({children}) {
    let location = useLocation();
    if (!Userfront.tokens.accessToken) {
        // Redirect to the /login page
        return <Navigate to="/login" state={{from: location}} replace/>;
    }

    return children;
}