import CategoryEvents from '@/components/events/categoryEvents';

const EventCategory = ({ data, cityName }) => {
    return <CategoryEvents data={data} cityName={cityName} />;
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
            cityName: category,
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
