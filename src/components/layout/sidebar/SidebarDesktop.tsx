"use client"

import logo from "../../../../public/images/logo.png";
import Image from "next/image";
import { SidebarButton } from "./SidebarButton";
import { SidebarItems } from "../../../types"
import Link from "next/link";
import { Separator } from "~/components/ui/separator";
import { Popover, PopoverContent, PopoverTrigger } from "~/components/ui/popover";
import { Button } from "~/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { LogOut, MoreHorizontal, Settings } from "lucide-react";
import { SignOutButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

interface SidebarDesktopProps {
    sidebarItems: SidebarItems;
}

export function SidebarDesktop(props: SidebarDesktopProps) {
    const pathname = usePathname();
    return(
        <aside className="fixed w-[270px] max-w-xs h-screen left-0 top-0 z-40 bg-secondary border-r border-muted px-2">
            <div className="px-3 py-4">
                <div className="flex items-center justify-center p-6">
                    <Link href="/">
                        <Image
                            src={logo}
                            width={175}
                            height={53}
                            alt="Tre1 Logo"
                            className="opacity-1 hover:opacity-50"
                        />
                    </Link>
                </div>
                <h3 className="mx-2 mt-8 text-md text-neutral-500">eLearning</h3>
                <div className="mt-5">
                    <div className="flex flex-col gap-1 w-full">
                        {props.sidebarItems.links.map((link, index) => (
                            <Link key={index} href={link.href}>
                                <SidebarButton variant={pathname === link.href ? "neo" : "secondary"} className="w-full" icon={link.icon}>{link.label}</SidebarButton>
                            </Link>
                        ))}
                        {props.sidebarItems.extras}
                    </div>
                </div>
            </div>
            <div className="absolute left-0 bottom-3 w-full px-3">
                <Popover>
                    <PopoverTrigger asChild>
                        <Button size="sm" variant="ghost" className="rounded-full w-full">
                            <div className="flex justify-center items-center w-full">
                                <div className="flex gap-2">
                                    <Avatar className="h-5 w-5">
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
                    </PopoverTrigger>
                    <PopoverContent className="mb-2 w-56 p-3 rounded-[1rem]">
                        <div className="space-y-1">
                            <Link href="/settings">
                                <SidebarButton size="sm" icon={Settings} className="w-full">
                                    Account Settings
                                </SidebarButton>
                            </Link>
                            <div className="flex flex-row gap-2 pl-4 hover:text-primary bg-neutral-950/90 hover:bg-neutral-950/40 px-3 py-1 items-center rounded-full">
                                <LogOut size={20} /><SignOutButton />
                            </div>
                        </div>
                    </PopoverContent>
                </Popover>
                <Separator className="absolute -top-3 l- w-[250px]" />
            </div>
        </aside>
    )
}