"use client"

import logo from "../../../../public/images/logo.png";
import Image from "next/image";
import { SidebarButtonSheet as SidebarButton } from "./SidebarButton";
import { SidebarItems } from "../../../types"
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { LogOut, Menu, MoreHorizontal, Settings, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from "~/components/ui/sheet";
import { SignOutButton } from "~/components/users/signOutBtn";
import { Drawer, DrawerContent, DrawerTrigger } from "~/components/ui/drawer";

interface SidebarMobileProps {
    sidebarItems: SidebarItems;
}

export function SidebarMobile(props: SidebarMobileProps) {
    const pathname = usePathname();
    return(
<>
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="secondary" className="rounded-full h-16 w-16 fixed top-3 left-3">
                    <Menu size={32} />
                </Button>
            </SheetTrigger>
            <SheetContent side="left" hideClose className="p-6">
                <SheetHeader className="flex flex-row items-center justify-start">
                    <span className="">
                    <Link href="/">
                        <Image
                            src={logo}
                            width={175}
                            height={53}
                            alt="Tre1 Logo"
                            className="opacity-1 hover:opacity-50 ml-6"
                        />
                    </Link>
                    </span>
                    <SheetClose asChild>
                        <Button variant="ghost" size="icon" className="w-12 h-12 p-0 ml-12 space-y-0 mt-0 rounded-full ">
                            <X size={32} />
                        </Button>
                    </SheetClose>
                </SheetHeader>
                <div className="h-full">
                <h3 className="mx-2 mt-8 text-md text-neutral-500">eLearning</h3>
                    <div className="mt-5 flex flex-col w-full gap-1">
                        {props.sidebarItems.links.map((link, idx) => (
                            <Link key={idx} href={link.href}>
                                 <SidebarButton variant={pathname === link.href ? "neo" : "secondary"} className="w-full" icon={link.icon}>{link.label}</SidebarButton>
                            </Link>
                        ))}
                        {props.sidebarItems.extras}
                    </div>
                </div>
                <div className="absolute w-full bottom-4 px-1 left-0 border-t">
                    <Drawer>
                        <DrawerTrigger asChild>
                            <Button size="sm" variant="ghost" className="rounded-full w-full mt-4">
                                <div className="flex justify-center items-center w-full">
                                    <div className="flex gap-2">
                                        <Avatar className="h-7 w-7">
                                            <AvatarImage src="https://yt3.ggpht.com/waTD1yW0TZt1Cji6ehhcMkU4i3Hd0dB-EF1XLPdnswEgpepzdeRofZz5C2wv-_YEucxs36xAFyY=s88-c-k-c0x00ffffff-no-rj" />
                                            <AvatarFallback>
                                                Tre1 Techniq
                                            </AvatarFallback>
                                        </Avatar>
                                        <span>Tre1 Techniq</span>
                                        <MoreHorizontal size={20} />
                                    </div>
                                </div>
                            </Button>
                        </DrawerTrigger>
                        <DrawerContent className="mb-2 p-2">
                            <div className="flex flex-col space-y-2">
                                <Link href="/settings">
                                    <SidebarButton size="sm" icon={Settings} className="w-full">
                                        Account Settings
                                    </SidebarButton>
                                </Link>
                                <div className="flex flex-row gap-2 pl-4 hover:text-primary bg-neutral-950/90 hover:bg-neutral-950/40 px-3 py-1 items-center rounded-full">
                                    <LogOut size={20} /><SignOutButton />
                                </div>
                            </div>
                        </DrawerContent>
                    </Drawer>
                </div>
            </SheetContent>
        </Sheet>
    </>
       
    )
}