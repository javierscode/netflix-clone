import Hero from "./Hero";

export default {
    title: "molecules/Hero",
    component: Hero,
};

const Template = (args) => <Hero {...args} />;

export const Default = Template.bind({});

Default.args = {
    title: "Black Widow",
    description:
        "In 1995, Russian undercover agents, super-soldier Alexei Shostakov and Black Widow Melina Vostokoff, pose as a normal family in Ohio...",
    backgroundImage:
        "https://www.wallpaperflare.com/static/842/328/875/scarlett-johansson-redhead-women-black-widow-wallpaper.jpg",
};

export const WithVideo = Template.bind({});

WithVideo.args = {
    title: "Black Widow",
    description:
        "In 1995, Russian undercover agents, super-soldier Alexei Shostakov and Black Widow Melina Vostokoff, pose as a normal family in Ohio...",
    backgroundImage:
        "https://www.wallpaperflare.com/static/842/328/875/scarlett-johansson-redhead-women-black-widow-wallpaper.jpg",
    youtubeID: "ybji16u608U",
};

