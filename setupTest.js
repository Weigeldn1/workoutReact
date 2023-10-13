//this code is essential to work with React components
//by configuring the adapter, you ensure Enzyme understands how to interact with and render React components 


import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });