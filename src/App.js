import './App.css';
import { Component } from 'react';
class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: "Título 1",
        body: "Corpo 1"
      },
      {
        id: 2,
        title: "Título 2",
        body: "Corpo 2"
      },
      {
        id: 3,
        title: "Título 2",
        body: "Corpo 2"
      },
    ]
  }

  render() {

    const { posts } = this.state;

    return (
      <div className="App">
        <div>
          {posts.map((post) => {
            return (
              <div key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </div>
            )
          }
          )}
        </div>
        <div>
        </div>
      </div>
    );
  }

}

export default App;
