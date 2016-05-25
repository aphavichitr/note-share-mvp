class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange(e) {
    this.props.handleSearchChange(e.target.value);
  }

  render() {
    return (
      <div class="search">
        <label for="search">Search:</label>
        <input type="text" onChange={this.handleChange.bind(this)}/>
      </div>
    );
  }
}
