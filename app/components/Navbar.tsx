import Link from "next/link";
import { ModeToggle } from "./ToggleChangeTheme";

const Navbar = () => {
    return(
        <nav className="w-full relative flex items-center justify-between max-w-3xl mx-auto px-4 py-5">
            <Link href='/' className="font-bold text-3xl">
                Rama<span className="uppercase text-primary">dev</span>
            </Link>
            <ModeToggle />
        </nav>
    )
}
export default Navbar;