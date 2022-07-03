import { Meta, Story } from "@storybook/angular";
import { action } from '@storybook/addon-actions';
import { Ngj8ButtonComponent } from "projects/ngj8-ui/src/public-api";

export default {
    title: 'Example/Ngj8Button',
    component: Ngj8ButtonComponent
  } as Meta;
  

  export const actionsData = {
    click: action('click')
  };

  const Template: Story<Ngj8ButtonComponent> = (args: Ngj8ButtonComponent) => ({
    props: {
        ...args,
        click: actionsData.click,
    }
  });
  
  export const Default = Template.bind({});
  Default.args = {
    label: 'Save'
  };

  export const Clicked = Template.bind({});
  Clicked.args = {
    label: 'Save',
    clicked: true
  };