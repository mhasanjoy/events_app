import Image from 'next/image';
import Link from 'next/link';

const EventCategory = ({ data }) => {
    return (
        <div>
            {data.map((event) => (
                <div key={event.id}>
                    <Link
                        href={`/events/${event.city.toLowerCase()}/${event.id}`}
                    >
                        <Image
                            src={event.image}
                            alt={event.title}
                            width={300}
                            height={300}
                        />
                        <h2>{event.title}</h2>
                        <p>{event.description}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default EventCategory;

export async function getStaticProps(context) {
    const { allEvents } = await import('/data/data.json');
    const { category } = context.params;

    const events = allEvents.filter(
        (event) => event.city.toLowerCase() === category
    );

    return {
        props: {
            data: events,
        },
    };
}

export async function getStaticPaths() {
    const { events_categories } = await import('/data/data.json');
    const paths = events_categories.map((category) => {
        return {
            params: {
                category: category.id.toString(),
            },
        };
    });

    return {
        paths,
        fallback: false,
    };
}
