import { BrowserRouter as Router, Link } from 'react-router-dom';
import AppRoutes from './routes';

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
