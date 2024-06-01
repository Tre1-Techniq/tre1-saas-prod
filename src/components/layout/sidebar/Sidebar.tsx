"use client"

import { GraduationCap, LayoutDashboard, LibraryBig, MoreHorizontal, NotebookPen } from "lucide-react";
import { SidebarDesktop } from "./SidebarDesktop";
import { SidebarItems } from "../../../types";
import { SidebarButton } from "./SidebarButton";
import Link from "next/link";
import { useMediaQuery } from "useHooks-ts";
import { SidebarMobile } from "./SidebarMobile";


const sidebarItems: SidebarItems = {
    links: [
        {label: "Dashboard", href: "/dashboard", icon: LayoutDashboard},
        {label: "QuizMaster AI", href: "/quiz/new", icon: NotebookPen},
        {label: "Tre1 University", href: "/tre1-u", icon: GraduationCap},
        {label: "eBook Library", href: "/e-books", icon: LibraryBig},
    ],
    extras: (
        <div className="flex flex-col pt-5 border-t gap-2">
            <h3 className="mx-2 mb-3 text-md text-neutral-500">Connect with Tre1</h3>
            <SidebarButton icon={MoreHorizontal} size="sm" className="w-1/2">
                <Link href="/services">
                    More
                </Link>
            </SidebarButton>
            <SidebarButton className="justify-center text-md" variant="neoOutline" size="sm">
                <Link href="/vendors">
                    Become a Vendor
                </Link>
            </SidebarButton>
        </div>
        
    )
};

export function Sidebar() {
    const isDesktop = useMediaQuery('(min-width: 640px)', {
        initializeWithValue: false,
    });

    if (isDesktop) {
        return <SidebarDesktop sidebarItems={sidebarItems}/>;
    }

    return <SidebarMobile sidebarItems={sidebarItems} />
}