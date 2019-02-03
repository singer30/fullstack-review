import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
    }
    const onLoad = this.onLoad.bind(this);
  }

  onLoad() {
    return fetch(`http://localhost:1228/repos`, {
      method: "GET",
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
    }).then(response => console.log('am i getting?'))  //this.setState({ repos: response })
      .catch(error => console.error(error));
  }

  componentDidMount() {
    this.onLoad();
  }

  search(term) {
    return fetch(`http://localhost:1128/repos`, {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: term }) // do I need this line?
    }).then(response => console.log(response.json()))
      //.then((json) => console.log(json))
      .catch(error => console.error(error));
  }
  render() {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos} />
      <Search onSearch={this.search.bind(this)} />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

// onLoad={this.onLoad.bind(this)}