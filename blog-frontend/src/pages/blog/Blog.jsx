import { h, Component } from "preact";
import Inputs from "../../components/Inputs";

class Blog extends Component {
  render() {
    return (
      <div>
        <h1>Blog</h1>
        {/* Add your blog content here */}
        <h2>New Page</h2>
        <p className="text-primary">This is a new page in the blog.</p>
        <Inputs />
      </div>
    );
  }
}

export default Blog;
