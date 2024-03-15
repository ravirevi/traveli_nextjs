import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/component/Header";
import Sidebar from "@/component/Sidebar";
import { Grid } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "여행의 기쁨, 트래블리 - 관리자 페이지",
  description: "TRAVELI 관리자 페이지",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header/>
      <Grid container>
        {/* <Grid item xs={2}>
          <Sidebar/>
        </Grid> */}
        {/* <Grid item xs={10}>
        </Grid> */}
        {children}
      </Grid>
      </body>
    </html>
  );
}
