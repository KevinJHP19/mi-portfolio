'use client';

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList
} from "@/components/ui/navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Header() {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className="fixed top-0 left-0 w-full bg-white text-black p-4 font-bold text-[16px] shadow-md border-b border-gray-200 z-50">
            <NavigationMenu className="w-full flex justify-between items-center">
                {/* Bloque del avatar y nombre */}
                <div className="flex items-center space-x-4">
                    <Avatar>
                        <AvatarImage src="Foto_mia_actual.png" alt="avatar" />
                        <AvatarFallback>KH</AvatarFallback>
                    </Avatar>
                    <span className="text-lg">KEVIN HUAMAN</span>
                </div>

                {/* Menú de navegación */}
                <NavigationMenuList className="flex space-x-36 me-[50px]">
                    <NavigationMenuItem>
                        <NavigationMenuLink
                            className="text-black hover:text-purple-500 font-bold"
                            href="/"
                            onClick={(e) => handleScroll(e, 'presentacion')}
                        >
                            INICIO
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink
                            className="hover:text-purple-500 font-bold"
                            href="#about"
                            onClick={(e) => handleScroll(e, 'about')}
                        >
                            SOBRE MI
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink
                            className="hover:text-purple-500 font-bold"
                            href="#proyectos"
                            onClick={(e) => handleScroll(e, 'proyectos')}
                        >
                            PROYECTOS
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </header>
    );
}