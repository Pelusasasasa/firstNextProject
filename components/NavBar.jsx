import Link from "next/link"

const NavBar = () => {
  return (
    <nav className="bg-slate-400 flex justify-between items-center px-20 p-3 font-bold text-black mb-1">
        <Link href='/'>Home</Link>

        <ul>
            <li>
                <Link href='/'>
                    Users
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar