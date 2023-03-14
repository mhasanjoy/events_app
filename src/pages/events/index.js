import Image from 'next/image';
import Link from 'next/link';

const Events = ({ data }) => {
    return (
        <div>
            {data.map((eventCategory) => (
                <div key={eventCategory.id}>
                    <Link href={`/events/${eventCategory.id}`}>
                        <Image
                            src={eventCategory.image}
                            alt={eventCategory.title}
                            height={300}
                            width={300}
                        />
                        <h2>{eventCategory.title}</h2>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Events;

export async function getStaticProps() {
    const { events_categories } = await import('../../../data/data.json');

    return {
        props: {
            data: events_categories,
        },
    };
}
