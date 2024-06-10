import { shallowMount } from '@vue/test-utils';
import ToDoForm from '@/components/ToDoForm.vue';

describe('ToDoForm.vue', () => {
  it('emits "todo-added" event with correct payload when form is submitted', async () => {
    const wrapper = shallowMount(ToDoForm);
    const input = wrapper.find('input');
    input.setValue('New ToDo');
    await wrapper.find('form').trigger('submit.prevent');
    expect(wrapper.emitted()['todo-added'][0]).toEqual(['New ToDo']);
  });

  it('clears input after form submission', async () => {
    const wrapper = shallowMount(ToDoForm);
    const input = wrapper.find('input');
    input.setValue('New ToDo');
    await wrapper.find('form').trigger('submit.prevent');
    expect(wrapper.find('input').element.value).toBe('');
  });
});
