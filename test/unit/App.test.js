import { shallow } from '@vue/test-utils'
import App from '../../src/scripts/components/App.vue';

describe('App.vue', () => {
  
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(App);
  })

  it('renders expected html', () => {
    const btn = wrapper.find('button');
    expect(btn.text()).toMatch('toggle...');
  });

  it('Should match snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

})
