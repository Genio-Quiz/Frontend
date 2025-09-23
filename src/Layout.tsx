import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";

export default function Layout () {
  return(
    <>
      <Header/>
      <Outlet/>
    </>
  )
}