import Image from 'next/image';

const SingleEvent = ({ event }) => {
    return (
        <div>
            <Image
                src={event.image}
                alt={event.title}
                width={1000}
                height={500}
            />
            <h1>{event.title}</h1>
            <p>{event.description}</p>
            <input type="email" name="" id="" />
            <button>Submit</button>
        </div>
    );
};

export default SingleEvent;
