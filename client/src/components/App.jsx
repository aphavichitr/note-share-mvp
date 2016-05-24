class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      file: ''
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
          <form method="POST" enctype="multipart/form-data" action="/">
            <input type="file" name="note" onChange={this.handleChange}/>
            <input type="submit" value="Post Note"/>
          </form>
          <NoteList notes={this.state.notes}/>
        </div>
      </div>
    );
  }
}