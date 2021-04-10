import Header from "./components/Header";
import BlogContent from "./components/BlogContent";
import SidePanel from "./components/SidePanel";

function App() {
  return (
    <div className="content-container">
        <Header/>
        <BlogContent/>
        <SidePanel/>
    </div>
  );
}

export default App;
