import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from "./src/components/common/SideBar";
import Header from "./src/components/common/Header";

export default function Layout() {
    return (
        <main className="d__board__main min-h-screen">
            <div className="d__wrapper max-w-[1600px] mx-auto">
                <div className="d__wrapper__in flex-wrap flex justify-between">
                    <aside className="d__sidebar lg:w-[18%] w-full lg:sticky top-0 z-[2] h-full">
                        <SideBar />
                    </aside>
                    <div className="d__right__side lg:w-[82%] w-full flex-1 lg:p-8 p-4">
                        <Header />
                        <Outlet />
                    </div>
                </div>
            </div>
        </main>
    )
}
