import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRef } from 'react';

const SingleEvent = ({ event }) => {
    const inputEmail = useRef();
    const router = useRouter();

    const onSubmit = async (event) => {
        event.preventDefault();

        const emailValue = inputEmail.current.value;
        const eventId = router?.query.id;

        try {
            const response = await fetch('/api/email-registration', {
                method: 'POST',
                body: JSON.stringify({
                    email: emailValue,
                    eventId,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const data = await response.json();
        } catch (error) {
            console.log('ERROR', error);
        }
    };

    return (
        <div className="event_single_page">
            <h1>{event.title}</h1>
            <Image
                src={event.image}
                alt={event.title}
                width={1000}
                height={500}
            />
            <p>{event.description}</p>
            <form onSubmit={onSubmit} className="email_registration">
                <label htmlFor="register">Get registered for this event!</label>
                <input
                    ref={inputEmail}
                    type="email"
                    name="register"
                    id="email"
                    placeholder="Please insert your email here"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default SingleEvent;
