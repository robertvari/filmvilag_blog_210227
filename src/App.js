import Header from "./components/Header";
import BlogList from "./components/BlogList/BlogList";
import SidePanel from "./components/SidePanel/SidePanel";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PostDetails from "./components/PostDetails/PostDetails";


function App() {
  return (
      <Router>
            <div className="content-container">
                <Header/>

                <Switch>
                    <Route path="/posts/:id">
                        <PostDetails/>
                    </Route>

                    <Route path="/">
                        <div className="blog-grid">
                            <BlogList/>
                            <SidePanel/>
                        </div>
                    </Route>
                </Switch>
            </div>
      </Router>
  );
}

export default App;
