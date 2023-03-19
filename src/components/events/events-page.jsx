import Image from 'next/image';
import Link from 'next/link';

const EventsPage = ({ data }) => {
    return (
        <div className="events_page">
            {data.map((eventCategory) => (
                <div key={eventCategory.id} className="card">
                    <Link href={`/events/${eventCategory.id}`}>
                        <Image
                            src={eventCategory.image}
                            alt={eventCategory.title}
                            height={500}
                            width={500}
                        />
                        <h2>{eventCategory.title}</h2>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default EventsPage;
