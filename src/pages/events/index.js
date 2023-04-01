import EventsPage from '@/components/events/events-page';

const Events = ({ eventsCategories }) => {
    return <EventsPage eventsCategories={eventsCategories} />;
};

export default Events;

export async function getStaticProps() {
    const { events_categories } = await import('../../../data/data.json');

    return {
        props: {
            eventsCategories: events_categories,
        },
    };
}
