class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: []
    }
  }

  render() {
    return (
      <div>
        <Nav />
        <div>
          <NoteList notes={this.state.notes}/>
        </div>
      </div>
    );
  }
}