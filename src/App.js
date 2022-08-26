import ListNews from "./components/ListNews";
import { NewsProvider } from "./contexts/newsContext";
import { UserProvider } from "./contexts/userContext";

function App() {
  return (
      <UserProvider>
        <NewsProvider>
          <ListNews/>
        </NewsProvider>
      </UserProvider>
    
  );
}

export default App;
