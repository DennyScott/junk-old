import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

//Create a Local Storage Mock
const localStorageMock = (function() {
  const store = {};
  return {
    getItem: key => store[key] || null,
    setItem: (key, value) => (store[key] = value.toString()),
    clear: () => (store = {}),
  };
})();
global.localStorage = localStorageMock;
