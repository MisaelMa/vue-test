import UserDetails from '../src/components/UserDetails.vue';
import { mount } from '@vue/test-utils';

describe('UserDetails', () => {
  it('renders correctly with provided props', () => {
    const props = {
      id: 1,
      name: 'Neil',
      email: 'neil@example.com'
    };
    const wrapper = mount(UserDetails, { props });
    expect(wrapper.find('p.text-sm.font-medium.text-gray-900.truncate.dark\\:text-white').text()).toContain(props.name);
    expect(wrapper.find('p.text-sm.text-gray-500.truncate.dark\\:text-gray-400').text()).toContain(props.email);
  });
});
