import Header from "./components/Header";
import BlogList from "./components/BlogList";
import SidePanel from "./components/SidePanel";

function App() {
  return (
    <div className="content-container">
        <Header/>

        <div className="blog-grid">
            <BlogList/>
            <SidePanel/>
        </div>
    </div>
  );
}

export default App;
