import { FC } from "react";
import "./App.css";
import Nav from "@/widgets/Nav/ui/Nav.tsx";
import Footer from "@/widgets/Footer/ui/Footer.tsx";
import Header from "@/widgets/Header/ui/Header.tsx";
import AppRoutes from "@/pages/lib/routes.tsx";

const App: FC = () => {
	return (
		<div className="App">
			<Header />
			<Nav />
			<AppRoutes />
			<Footer />
		</div>
	);
};

export default App;
