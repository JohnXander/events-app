import Image from 'next/image'
import { useRouter } from 'next/router'
import { useRef } from 'react'

const EventPage = ({ data }) => {
    const inputEmail = useRef()
    const router = useRouter()

    const submitEmail = async (e) => {
        e.preventDefault()
        const emailValue = inputEmail.current.value
        const eventId = router?.query.id

        try {
            const response = await fetch('/api/email-registration', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email: emailValue, eventId })
            })

            if (!response.ok) throw new Error(`Error: ${response.status}`)
            const data = await response.json()
            console.log('POST', data)

        } catch (e) {
            console.log("Error", e)
        }

    }

    return (
        <div className='event_single_page'>
            <h1>{data.title}</h1>
            <Image
                src={data.image}
                width={1000}
                height={500}
                alt={data.title}
            />
            <p>{data.description}</p>
            <form onSubmit={submitEmail} className="email_registration">
                <label>Get registered for this event!</label>
                <input
                    ref={inputEmail}
                    type="email"
                    id='email'
                    placeholder='Your email...'
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default EventPage

export async function getStaticPaths() {
    const { allEvents } = await import('/data/data.json')
    const allPaths = allEvents.map(path => {
        return {
            params: {
                cat: path.city,
                id: path.id
            }
        }
    })

    return {
        paths: allPaths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const id = context.params.id
    const { allEvents } = await import('/data/data.json')
    const eventData = allEvents.find(ev => id === ev.id)
    
    return {
        props: { data: eventData }
    }
}