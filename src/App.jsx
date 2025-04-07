import { BrowserRouter as Router, Link } from 'react-router-dom';
import AppRoutes from './routes';

function App() {
  return (
    <Router basename="/NevelTech-Test">
      <AppRoutes />
    </Router>
  );
}

export default App;
