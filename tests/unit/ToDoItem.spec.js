import { shallowMount } from '@vue/test-utils';
import ToDoItem from '@/components/ToDoItem.vue';

describe('ToDoItem.vue', () => {
  const props = {
    label: 'Test ToDo',
    done: false,
    id: 'todo-1'
  };

  it('emits "checkbox-changed" event when checkbox is clicked', async () => {
    const wrapper = shallowMount(ToDoItem, { props });
    await wrapper.find('input[type="checkbox"]').setChecked();
    expect(wrapper.emitted()['checkbox-changed']).toBeTruthy();
  });

  it('emits "item-deleted" event when delete button is clicked', async () => {
    const wrapper = shallowMount(ToDoItem, { props });
    await wrapper.find('button.btn__danger').trigger('click');
    expect(wrapper.emitted()['item-deleted']).toBeTruthy();
  });

  it('toggles isEditing when edit button is clicked', async () => {
    const wrapper = shallowMount(ToDoItem, { props });
    await wrapper.find('button').trigger('click');
    expect(wrapper.vm.isEditing).toBe(true);
  });
});
