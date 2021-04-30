import Editor from './Editor';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <div className="h-100">
        <Editor />
      </div>
    </Provider>
  );
}

export default App;
