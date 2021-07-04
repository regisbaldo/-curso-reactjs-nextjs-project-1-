import './App.css';
import { Component } from 'react';
class App extends Component {
  state = {
    shouldCounter: true,
    counter: 0,
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

  componentDidMount() {
    this.handleTimeout();
  }
  componentDidUpdate() {
    this.handleTimeout();

  };

  handleTimeout = () => {
    const { counter, shouldCounter } = this.state;
    if (shouldCounter) {

      setTimeout(() => {

        this.setState({ counter: counter + 1 })

      }, 1000)
    }
  };

  componentWillUnmount() {
    this.setState({ shouldCounter: false })

  }
  render() {

    const { posts, counter } = this.state;

    return (
      <div className="App">
        <h1>{counter}</h1>
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
