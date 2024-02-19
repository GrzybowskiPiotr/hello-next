import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Roboto } from "next/font/google";``

const roboto = Roboto({
	style: ["normal"],
	subsets: ["latin"],
	weight: "300"
})



export const metadata = {
	title: "Hello next",
	description: "Nasza pierwsza aplikacja w Next.Js",
};

export default function RootLayout({ children }) {
	return (
		<html lang="pl">
			<body className={roboto.className}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
