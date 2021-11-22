import React, { useRef, useState } from "react";
import Header from "../components/header/header";
import Main from "../components/main/main";
import Sidebar from "../components/sidebar/sidebar";
import Title from "../components/title/title";
import { sorting as sortingTemp } from "../modals/sidebarData";
const Home = () => {
    const seacrhRef = useRef('');
    const [sorting, setSorting] = useState(sortingTemp)
    return (
        <>
            <Header seacrhRef={seacrhRef}/>
            <Title seacrhRef={seacrhRef?.current} sorting={sorting} setSorting={setSorting}/>
            <div className="content">
                <Sidebar sorting={sorting} setSorting={setSorting}/>
                <Main />
            </div>
        </>
    )
}

export default Home;