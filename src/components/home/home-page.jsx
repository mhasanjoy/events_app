import Image from 'next/image';
import Link from 'next/link';

const HomePage = ({ eventsCategories }) => {
    return (
        <div className="home-body">
            {eventsCategories.map((eventCategory) => (
                <Link
                    href={`/events/${eventCategory.id}`}
                    key={eventCategory.id}
                    className="card"
                >
                    <div className="image">
                        <Image
                            src={eventCategory.image}
                            alt={eventCategory.title}
                            width={600}
                            height={400}
                        />
                    </div>
                    <div className="content">
                        <h2>{eventCategory.title}</h2>
                        <p>{eventCategory.description}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default HomePage;
