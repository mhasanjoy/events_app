import SingleEvent from '@/components/events/single-event';

const Event = ({ event }) => {
    return <SingleEvent event={event} />;
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
