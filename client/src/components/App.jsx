class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      file: '',
      description: ''
    }
  }

  componentDidMount() {
    this.fetchNotes();
  }

  fetchNotes() {
    var context = this;
    $.ajax({
      url: 'http://localhost:3000/notes',
      type: 'GET',
      contentType: 'application/json',
      success: function(data) {
        context.setState({
          notes: data
        });
        console.log('Successful Get!');
      },
      error: function(data) {
        console.error('Get Failed! ', data);
      }
    });
  }

  textChange(e) {
    this.setState({
      description: e.target.value
    });
  }

  handleChange(e) {
    var context = this;
    var formData = new FormData();
    formData.append('note', e.target.files[0]);
    formData.append('description', this.state.description);
    $.ajax({
      url: 'http://localhost:3000/notes',
      data: formData,
      type: 'POST',
      contentType: false,
      processData: false,
      success: function(data) {
        console.log('Post Data: ', data);
        console.log('Successful Post!');
        context.fetchNotes();
      },
      error: function(data) {
        console.error('Post Failed! ', data);
      }
    })
  }

  render() {
    return (
      <div>
        <Nav />
        <div>
          <form method="POST" action="/" enctype="multipart/form-data">
            <input type="text" name="description" value={this.state.description} onChange={this.textChange.bind(this)}/>
            <input type="file" name="note" onChange={this.handleChange.bind(this)}/>
          </form>
          <NoteList notes={this.state.notes}/>
        </div>
      </div>
    );
  }
}