import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Box } from "lucide-react";
import Sidebar from "@/components/Sidebar";


export const metadata: Metadata = {
	title: "ShonH's Blog",
	description: "ShonH's Blog",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<Navbar />
				<Sidebar />
				<main className="border border-red-500 overflow-hidden flexCenter scroll-smooth focus:scroll-auto">

					<div className="w-3/4 flex-grow  box-border border-2 border-solid rounded-lg shadow-lg hover:shadow-2xl h-auto">
						{children}
					</div>
				</main>
				<Footer />
			</body>
		</html>
	);
}
