const EventCategory = ({ data }) => {
    return <div></div>;
};

export default EventCategory;

export async function getStaticProps(context) {
    const { allEvents } = await import('../../data/data.json');
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
    const { events_categories } = await import('../../data/data.json');
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
