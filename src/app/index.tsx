import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "@/app/all.min.css";
import "@/app/index.css";
import { store } from "@/app/store.ts";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import SECRET_API from "./SECRET_API.ts";
import { Firestore } from "@firebase/firestore";
import { FirebaseStorage } from "@firebase/storage";
import { Auth } from "@firebase/auth";

const app = initializeApp(SECRET_API);
export const db: Firestore = getFirestore(app);
export const storage: FirebaseStorage = getStorage(app);
export const auth: Auth = getAuth(app);
const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
);
