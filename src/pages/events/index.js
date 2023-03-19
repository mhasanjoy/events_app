import EventsPage from '@/components/events/events-page';

const Events = ({ data }) => {
    return <EventsPage data={data} />;
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
