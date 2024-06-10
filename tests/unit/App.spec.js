import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';
import ToDoItem from '@/components/ToDoItem.vue';

describe('App.vue', () => {
  it('renders a list of to-do items', () => {
    const wrapper = shallowMount(App);
    const toDoItems = wrapper.findAllComponents(ToDoItem);
    expect(toDoItems).toHaveLength(wrapper.vm.ToDoItems.length);
  });

  it('adds a new to-do item when "addToDo" is called', () => {
    const wrapper = shallowMount(App);
    const initialLength = wrapper.vm.ToDoItems.length;
    wrapper.vm.addToDo('New ToDo');
    expect(wrapper.vm.ToDoItems).toHaveLength(initialLength + 1);
  });

  it('deletes a to-do item when "deleteToDo" is called', () => {
    const wrapper = shallowMount(App);
    const initialLength = wrapper.vm.ToDoItems.length;
    wrapper.vm.deleteToDo(wrapper.vm.ToDoItems[0].id);
    expect(wrapper.vm.ToDoItems).toHaveLength(initialLength - 1);
  });
});
