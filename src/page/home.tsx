import  { useState } from "react";
import Header from "../components/header/header";
import Main from "../components/main/main";
import Sidebar from "../components/sidebar/sidebar";
import Title from "../components/title/title";
import { sorting as sortingTemp } from "../data/sidebarData";
const Home = () => {
    const [search,setSearch] =  useState('App');
    const [sorting, setSorting] = useState(sortingTemp)
    return (
        <>
            <Header search={search} setSearch={setSearch}/>
            <Title search={search} sorting={sorting} setSorting={setSorting}/>
            <div className="content">
                <Sidebar sorting={sorting} setSorting={setSorting}/>
                <Main />
            </div>
        </>
    )
}

export default Home;