import React from 'react';
import UserItem from './UserItem'
import { CircleUserRound, GraduationCap, LayoutDashboard, MessagesSquare, Settings, SquareLibrary, SquarePlus } from 'lucide-react';
import { Command, CommandGroup, CommandItem, CommandList, CommandSeparator } from '~/components/ui/command';


const menuList = [
    {
        group: "QuizMaster AI",
        items: [
            {
                link: "/quiz/new",
                icon: <SquarePlus />,
                text: "New Quiz"
            },
            {
                link: "/",
                icon: <LayoutDashboard />,
                text: "Dashboard"
            },
            {
                link: "/",
                icon: <GraduationCap />,
                text: "Tre1 University"
            },
            {
                link: "/",
                icon: <SquareLibrary />,
                text: "E-Book Library"
            }
            
        ]
    },
    {
        group: "User Menu",
        items: [
            {
                link: "/",
                icon: <CircleUserRound />,
                text: "Profile"
            },
            {
                link: "/",
                icon: <MessagesSquare />,
                text: "Messages"
            },
            {
                link: "/",
                icon: <Settings />,
                text: "Settings"
            }
        ]
    }
]

export default function SidebarDashboard() {
  return (
    <aside className="hidden lg:flex w-[375px] min-h-screen flex-col bg-neutral-800 py-12 px-6 font-lg0">
        <div><UserItem /></div>
        <div className="grow pb-8">
            <Command className="bg-neutral-800 overflow-visible">
                <CommandList className="min-h-[400px]">
                    { menuList.map((menu: any, key: number) => <CommandGroup key={key} className="text-neutral-400" heading={menu.group}>
                        {menu.items.map((option: any, optionKey: number) => 
                        <CommandItem key={optionKey} className="flex gap-4 bg-neutral-900 hover:bg-neutral-800 rounded-full cursor-pointer hover:text-primary mb-2">
                            {option.icon}
                            {option.text}
                        </CommandItem>)}
                    </CommandGroup>)}
                </CommandList>
            </Command>
        </div>
        <div><h2 className='text-3xl font-bold'>Dashboard</h2></div>
    </aside>
  )
};