import Image from 'next/image';
import Link from 'next/link';

const HomePage = ({ eventsCategories }) => {
    return (
        <main>
            {eventsCategories.map((eventCategory) => (
                <div key={eventCategory.id}>
                    <Link href={`/events/${eventCategory.id}`}>
                        <Image
                            src={eventCategory.image}
                            alt={eventCategory.title}
                            width={300}
                            height={300}
                        />
                        <h2>{eventCategory.title}</h2>
                        <p>{eventCategory.description}</p>
                    </Link>
                </div>
            ))}
        </main>
    );
};

export default HomePage;
