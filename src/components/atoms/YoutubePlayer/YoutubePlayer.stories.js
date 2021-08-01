import YoutubePlayer from './YoutubePlayer'

export default {
    title: 'atoms/YoutubePlayer',
    component: YoutubePlayer,
}

const Template = (args) => <div style={{width:'100%', height:'60vh'}}><YoutubePlayer {...args} /></div>;

export const Default = Template.bind({});

Default.args = { id: 'ybji16u608U'};

