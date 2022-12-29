import Image from "next/image"
import Link from "next/link"

export const Header = () => {
    return (
        <header>
            <div>
                <Image
                    src={'/images/logo.png'}
                    width={50}
                    height={50}
                    alt={'logo'}
                />
                <nav>
                    <img src="" alt="" />
                    <Link href="/">Home</Link>
                    <Link href="/events">Events</Link>
                    <Link href="/about-us">About Us</Link>
                </nav>
            </div>
            <h1>Bla Bla Bla</h1>
      </header>
    )
}