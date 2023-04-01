import CategoryEvents from '@/components/events/categoryEvents';

const EventCategory = ({ events, city }) => {
    return <CategoryEvents events={events} city={city} />;
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
            events,
            city: category,
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
