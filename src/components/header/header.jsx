import Image from "next/image"
import Link from "next/link"

export const Header = () => {
    return (
        <header>
            <div>
                <div className="topNav">
                    <Image
                        src={'/images/logo.png'}
                        width={40}
                        height={40}
                        alt={'logo'}
                    />
                    <nav>
                        <ul>
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/events">Events</Link>
                            </li>
                            <li>
                                <Link href="/about-us">About Us</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <h1>John Xander's Events App</h1>
            </div>
      </header>
    )
}