import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../component/Home";
import Addlibrary from "../component/Addlibrary";
import Addgroup from "../component/Addgroup";
import Addcontact from "../component/Addcontact";
import Addmessage from "../component/Addmessage";

const appRoute = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '',
                element: <Home/>
            },
            {
                path: 'add-library',
                element: <Addlibrary/>
            },
            {
                path: 'add-group',
                element: <Addgroup/>
            },
            {
                path: 'add-contact',
                element: <Addcontact/>
            },
            {
                path: 'add-message',
                element: <Addmessage/>
            },
        ]
    }
])

export default appRoute;