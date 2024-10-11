
import Link from "next/link";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } 
from "@/components/ui/navigation-menu";
import {ModeToggle} from "@/components/mode-toggle"
import { NavigationItem, NavItem } from "@/components/ui/nav-bar/navigation-item";
import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs'

export function NavigationBar() {
    // const [isDarkMode, setIsDarkMode] = useState(false);
    // const toggleTheme = () => {
    //     setIsDarkMode(prevMode => !prevMode);
    // };
    return (
    <div className="flex flex-row justify-between items">
        <div><NavigationMenu className="flex flex-row justify between min-w-full list-none h-16 sticky-top-0 p-5">
            {/* <div className="flex flex-row"> */}
            <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Home
                    </NavigationMenuLink>
                    </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <Link href="/quiz" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Quiz
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <Link href="/about-me" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        About me
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
            </NavigationMenu></div>
            <div className="flex justify-end p-4 gap-2">
                <ModeToggle />
                <SignedIn>
                    <UserButton />
                    </SignedIn>
                    <SignedOut>
                        <SignInButton>Sign In</SignInButton>
                    </SignedOut></div>
        </div>
    )
}

const navItems: NavItem[] = [
	{ navigationLink: "/", navigationDescription: "Project Heartcode" },
	{ navigationLink: "/quiz", navigationDescription: "Quiz" },
	{ navigationLink: "/about-me", navigationDescription: "About Me" },
]


