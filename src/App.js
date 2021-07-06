import './App.css';
import { Component } from 'react';
class App extends Component {
  state = {
    posts: []
  }

  handleData = async () => {

    const postPromise = fetch('https://jsonplaceholder.typicode.com/posts');
    const photosPromise = fetch('https://jsonplaceholder.typicode.com/photos');

    let [posts, photos] = await Promise.all([postPromise, photosPromise]);
    posts = await posts.json();
    photos = await photos.json();

    posts = posts.map((post, index) => {
      return {
        ...post,
        url: photos[index].url
      }

    });

    this.setState({ posts })

  }


  componentDidMount() {
    this.handleData();
  }


  render() {

    const { posts } = this.state;

    return (
      <div className="posts">
        {posts.map(post => {
          return (
            <div className="card-wrapper" key={post.id}>
              <img className="card-image" src={post.url} alt={post.title}/>
              <h3 className="card-title">{post.title}</h3>
              <p className="card-body">{post.body}</p>
            </div>
          )
        })}

      </div>
    );
  }

}

export default App;
