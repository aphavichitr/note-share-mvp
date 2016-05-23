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
          <input type="file" />
          <NoteList notes={this.state.notes}/>
        </div>
      </div>
    );
  }
}