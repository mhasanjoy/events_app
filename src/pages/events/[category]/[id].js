import Image from 'next/image';

const Event = ({ event }) => {
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
        </div>
    );
};

export default Event;

export async function getStaticProps(context) {
    const { allEvents } = await import('/data/data.json');
    const { id } = context.params;
    const event = allEvents.find((event) => event.id === id);
    return {
        props: {
            event,
        },
    };
}

export async function getStaticPaths() {
    const { allEvents } = await import('/data/data.json');
    const paths = await allEvents.map((event) => {
        return {
            params: {
                category: event.city,
                id: event.id.toString(),
            },
        };
    });

    return {
        paths,
        fallback: false,
    };
}
