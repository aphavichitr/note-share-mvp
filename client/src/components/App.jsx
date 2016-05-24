class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: []
    }
  }

  handleChange(e) {
    console.log('change happened');
  }


  render() {
    return (
      <div>
        <Nav />
        <div>
          <form method="POST" action="/">
            <input type="file" onChange={this.handleChange}/>
            <input type="text"/>
          </form>
          <NoteList notes={this.state.notes}/>
        </div>
      </div>
    );
  }
}