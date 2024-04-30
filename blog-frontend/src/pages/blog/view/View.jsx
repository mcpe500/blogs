import { h, Component } from "preact";

class View extends Component {
  render() {
    return (
      <div>
        <h1>View</h1>
        {/* Add your blog content here */}
        <h2>New Page</h2>
        <p className="text-primary">This is a new page in the blog.</p>
      </div>
    );
  }
}

export default View;
