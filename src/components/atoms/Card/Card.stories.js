import Card from './Card'

export default {
    title: 'atoms/Card',
    component: Card,
}

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = { title: 'Horitzontal Card', imageURL: 'https://image.tmdb.org/t/p/original/pcDc2WJAYGJTTvRSEIpRZwM3Ola.jpg' };

export const Large = Template.bind({});
Large.args = { title: 'Vertical Card', large: true };
