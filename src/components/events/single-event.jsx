import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';

const SingleEvent = ({ event }) => {
    const inputEmail = useRef();
    const router = useRouter();
    const [message, setMessage] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();

        const emailValue = inputEmail.current.value;
        const eventId = router?.query.id;

        const validRegex =
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (!emailValue.match(validRegex)) {
            setMessage('Please introduce a correct email address');
        }

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
            setMessage(data.message);
            inputEmail.current.value = '';
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
            <p>{message}</p>
        </div>
    );
};

export default SingleEvent;
