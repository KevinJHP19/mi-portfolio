import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Header() {
    return (
        
            <NavigationMenu className="w-full bg-white text-black p-4 font-bold text-[16px] border">
                {/* Bloque del avatar y nombre */}
                <div className="flex items-center space-x-4">
                    <Avatar>
                        <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR1moG_tK57SDoMvcfavVmT6PLzF8IwaHqzw&s" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <span className="text-lg">KEVIN HUAMAN</span>
                </div>

                {/* Menú de navegación */}
                <NavigationMenuList className="flex space-x-8">
                    <NavigationMenuItem>
                        <NavigationMenuLink
                            className="text-black hover:text-purple-500 font-bold"
                            href="/"
                        >
                            INICIO
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink
                            className="hover:text-purple-500"
                            href="/about"
                        >
                            SOBRE MI
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink
                            className="hover:text-purple-500"
                            href="/projects"
                        >
                            PROYECTOS
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        
    );
}