class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange(e) {
    this.props.handleSearchChange(e.target.value);
  }

  render() {
    return (
      <div>
        Search
        <input type="text" onChange={this.handleChange.bind(this)}/>
      </div>
    );
  }
}
