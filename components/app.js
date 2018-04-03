class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
    
  render () {
    return (
      <table>
        <tr>
          {movies((row, i) => 
            <td key={i}>{row.title}</td>
          )}
        </tr>
      </table>
    );
  }
}

ReactDOM.render(document.getElementById('App'));
const App = new App();