import { QueryClientProvider } from "react-query";
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import Home from './views/Home';
import queryClient from "./config/cache";


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path=":quantity" element={<Home />} />
          </Route>
          <Route
            path="*"
            element={<Home />}
          />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
