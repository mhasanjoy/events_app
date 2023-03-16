import HomePage from '@/components/home/home-page';

export default function Home({ eventsCategories }) {
    return (
        <>
            <HomePage eventsCategories={eventsCategories} />
        </>
    );
}

export async function getStaticProps() {
    const { events_categories } = await import('../../data/data.json');

    return {
        props: {
            eventsCategories: events_categories,
        },
    };
}
