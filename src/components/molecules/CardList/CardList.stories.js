import CardList from "./CardList";

export default {
    title: "molecules/CardList",
    component: CardList,
};

const Template = (args) => <CardList {...args} />;

export const Default = Template.bind({});

Default.args = {
    title: "Most Popular",
    list: [
        {
            title: "Horitzontal Card",
            imageURL:
                "https://image.tmdb.org/t/p/original/pcDc2WJAYGJTTvRSEIpRZwM3Ola.jpg",
        },
        {
            title: "Horitzontal Card",
            imageURL:
                "https://image.tmdb.org/t/p/original/pcDc2WJAYGJTTvRSEIpRZwM3Ola.jpg",
        },
        {
            title: "Horitzontal Card",
            imageURL:
                "https://image.tmdb.org/t/p/original/pcDc2WJAYGJTTvRSEIpRZwM3Ola.jpg",
        },
        {
            title: "Horitzontal Card",
            imageURL:
                "https://image.tmdb.org/t/p/original/pcDc2WJAYGJTTvRSEIpRZwM3Ola.jpg",
        },
        {
            title: "Horitzontal Card",
            imageURL:
                "https://image.tmdb.org/t/p/original/pcDc2WJAYGJTTvRSEIpRZwM3Ola.jpg",
        },
        {
            title: "Horitzontal Card",
            imageURL:
                "https://image.tmdb.org/t/p/original/pcDc2WJAYGJTTvRSEIpRZwM3Ola.jpg",
        },
        {
            title: "Horitzontal Card",
            imageURL:
                "https://image.tmdb.org/t/p/original/pcDc2WJAYGJTTvRSEIpRZwM3Ola.jpg",
        },
        {
            title: "Horitzontal Card",
            imageURL:
                "https://image.tmdb.org/t/p/original/pcDc2WJAYGJTTvRSEIpRZwM3Ola.jpg",
        },
    ],
};

export const Vertical = Template.bind({});

Vertical.args = {
    title: "Most Popular",
    list: [
        {
            title: "Horitzontal Card",
            imageURL:
                "https://image.tmdb.org/t/p/original/pcDc2WJAYGJTTvRSEIpRZwM3Ola.jpg",
        },
        {
            title: "Horitzontal Card",
            imageURL:
                "https://image.tmdb.org/t/p/original/pcDc2WJAYGJTTvRSEIpRZwM3Ola.jpg",
        },
        {
            title: "Horitzontal Card",
            imageURL:
                "https://image.tmdb.org/t/p/original/pcDc2WJAYGJTTvRSEIpRZwM3Ola.jpg",
        },
        {
            title: "Horitzontal Card",
            imageURL:
                "https://image.tmdb.org/t/p/original/pcDc2WJAYGJTTvRSEIpRZwM3Ola.jpg",
        },
        {
            title: "Horitzontal Card",
            imageURL:
                "https://image.tmdb.org/t/p/original/pcDc2WJAYGJTTvRSEIpRZwM3Ola.jpg",
        },
        {
            title: "Horitzontal Card",
            imageURL:
                "https://image.tmdb.org/t/p/original/pcDc2WJAYGJTTvRSEIpRZwM3Ola.jpg",
        },
        {
            title: "Horitzontal Card",
            imageURL:
                "https://image.tmdb.org/t/p/original/pcDc2WJAYGJTTvRSEIpRZwM3Ola.jpg",
        },
        {
            title: "Horitzontal Card",
            imageURL:
                "https://image.tmdb.org/t/p/original/pcDc2WJAYGJTTvRSEIpRZwM3Ola.jpg",
        },
    ],
    vertical: true
};
