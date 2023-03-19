import Image from 'next/image';
import Link from 'next/link';

const CategoryEvents = ({ data, cityName }) => {
    return (
        <div className="category_events">
            <h1>Events in {cityName}</h1>
            <div className="content">
                {data.map((event) => (
                    <Link
                        key={event.id}
                        className="card"
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
                ))}
            </div>
        </div>
    );
};

export default CategoryEvents;
