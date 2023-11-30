import css from "./Header.module.css"
import User from "@/app/(main-layout)/components/User/User";
import Link from "next/link";
const Header=()=>{
    return(<div className={css.Header}>
        <div>
            <Link href={'/movies'}>Movies</Link>
            <User/>
            <Link href={'/genres'}>Genres</Link>
        </div>
    </div>)
}

export default Header