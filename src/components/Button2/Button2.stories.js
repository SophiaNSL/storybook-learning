import Button2 from "./Button2";

export default {
    title: 'Button2',
    component: Button2,
    argTypes: { handleClick: {action: 'handleClick'}}
}

const Template = args => <Button2 {...args} />

export const Red = Template.bind({})
Red.args = {
    backgroundColor: 'red',
    label: 'Press me',
    size: 'md',
}

export const Green = Template.bind({})
Green.args = {
    backgroundColor: 'green',
    label: 'Press me',
    size: 'md',
}

export const Small = Template.bind({})
Small.args = {
    backgroundColor: 'red',
    label: 'Press me',
    size: 'sm',
}

export const Large = Template.bind({})
Large.args = {
    backgroundColor: 'red',
    label: 'Press me',
    size: 'lg',
}

export const longLabel = Template.bind({})
longLabel.args = {
    backgroundColor: 'red',
    label: 'Press me ssdsdsdadasdasdasdasdasdasdas',
    size: 'md',
}