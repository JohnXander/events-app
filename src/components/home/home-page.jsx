import Image from "next/image"
import Link from "next/link"

export const HomePage = ({ data }) => {
    return (
        <div className="home_body">
            {data.map(ev => (
                <Link
                    className="card"
                    key={ev.id}
                    href={`events/${ev.id}`}>
                    <div className="image-container">
                        <Image
                            src={ev.image}
                            alt={ev.title}
                            width={600}
                            height={600}
                            style={{objectFit: "cover", borderRadius: "3px"}}
                        />
                    </div>
                    <div className="content">
                        <h2>{ev.title}</h2>
                        <p>{ev.description}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}