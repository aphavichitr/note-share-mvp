class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange(e) {
    this.props.handleSearchChange(e.target.value);
  }

  render() {
    return (
      <div class="input-group input-group-unstyled">
        <input type="text" onChange={this.handleChange.bind(this)} placeholder="Search for notes"/>
        <span class="input-group-addon">
          <i class="fa fa-search"></i>
        </span>
      </div>
    );
  }
}