import { Meta, Story } from "@storybook/angular";
import { Ngj8Column } from "projects/ngj8-ui/src/lib/ngj8-table/ngj8-column.model";
import { Ngj8TableComponent } from "projects/ngj8-ui/src/public-api";

export default {
    title: 'Example/Ngj8Table',
    component: Ngj8TableComponent
  } as Meta;
  
  const Template: Story<Ngj8TableComponent> = (args: Ngj8TableComponent) => ({
    props: args,
  });
  
  export const Default = Template.bind({});
  Default.args = {
    columns: [
        {key: 'name', header: 'Name' },
        {key: 'age', header: 'Age' }
    ] as Ngj8Column[],
    data: [
        { name: 'Vlad', age: 3}, 
        { name: 'Meme', age: 24}, 
        { name: 'J8', age: 25}]
  };