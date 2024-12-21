import { Outlet } from "react-router";
import { Navbar } from "./components/layout/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import { UserProvider } from "./context/useAuth";

export default function App() {
	return (
		<>
			<UserProvider>
				<Navbar />
				<Outlet />
				<ToastContainer />
			</UserProvider>
		</>
	);
}
