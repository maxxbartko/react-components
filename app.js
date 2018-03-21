var App = () => (
    <div>
        <h2>My Grocery List</h2>
        <GroceryList groceries={['Fake butter', 'More fake butter', 'Even more fake butter']} />
    </div>
);

// Update our `GroceryList` to use the new `GroceryListItem` component
// This can still be a stateless function component!
var GroceryList = (props) => (
    <ul>
        {props.groceries.map(grocery =>
            <GroceryListItem grocery={grocery} />
        )}
    </ul>
);

class GroceryListItem extends React.Component {
    constructor(props) {
        super(props);

        // `state` is just an object literal
        this.state = {
            done: false
        };
    }

    // When a list item is clicked, we will toggle the `done`
    // boolean, and our component's `render` method will run again
    onListItemHover() {
        this.setState({
            done: !this.state.done
        });
    }

    render() {
        // Making the style conditional on our `state` lets us 
        // update it based on user interactions.
        var style = {
            textDecoration: this.state.done ? 'bold' : 'none'
        };

        // You can pass inline styles using React's `style` attribute to any component
        // snake-cased css properties become camelCased this this object
        return (
            <li style={style} onMouseOver={this.onListItemHover.bind(this)}>{this.props.grocery}</li>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));