class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      file: ''
    }
  }

  handleChange(e) {
    debugger;
    //var form = $('form')[0];

    var formData = new FormData();
    formData.append('file', e.target.files[0]);
    console.log('File: ', e.target.files[0]);
    console.log('Formdata: ',formData);
    $.ajax({
      url: 'http://localhost:3000/',
      data: e.target.files[0],
      type: 'POST',
      contentType: false,
      processData: false,
      success: function(data) {
        console.log('Data: ', data);
        console.log('Successful Post!');
      },
      error: function(data) {
        console.error('Post Failed!', data);
      }
    })
  }

  render() {
    return (
      <div>
        <Nav />
        <div>
          <form method="POST" action="/" enctype="multipart/form-data">
            <input type="file" name="note" onChange={this.handleChange}/>
          </form>
          <NoteList notes={this.state.notes}/>
        </div>
      </div>
    );
  }
}
            // <input type="text" name="description"/>
            // <input type="submit" value="Post Note"/>