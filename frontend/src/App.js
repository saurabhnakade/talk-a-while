import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/chats",
        element: <ChatPage />,
    },
]);

function App() {
    return <RouterProvider router={appRouter} />;
}

export default App;
