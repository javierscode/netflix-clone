import Header from "./Header";

export default {
    title: "atoms/Header",
    component: Header,
};

const Template = (args) => (
    <Header {...args}>
        <a>Home</a>
        <a>Movies</a>
        <a>TV Shows</a>
    </Header>
);

export const Default = Template.bind({});
