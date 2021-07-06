import './App.css';
import { Component } from 'react';
import { loadPosts } from './utils/load-posts';
import Posts from './components/Posts';
class App extends Component {
  state = {
    posts: []
  }

  handlePosts = async () => {
    const posts = await loadPosts();
    this.setState({ posts })

  }


  async componentDidMount() {
    await this.handlePosts();
  }


  render() {

    const { posts } = this.state;

    return (
      <div className="container">
        <Posts posts={posts} />
      </div>
    );
  }

}

export default App;
