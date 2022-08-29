import Layout from "./components/Layout";
import { NewsProvider } from "./contexts/newsContext";
import { UserProvider } from "./contexts/userContext";

function App() {
  return (
      <UserProvider>
        <NewsProvider>
          <Layout />
        </NewsProvider>
      </UserProvider>
    
  );
}

export default App;
