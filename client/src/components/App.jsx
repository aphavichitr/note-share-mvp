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
    console.log('componentDidMount');
    $.ajax({
      url: 'http://localhost:3000/',
      type: 'GET',
      success: function(data) {
        console.log('Get Data: ', data);
        
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
    var formData = new FormData();
    formData.append('note', e.target.files[0]);
    formData.append('description', this.state.description);
    $.ajax({
      url: 'http://localhost:3000/',
      data: formData,
      type: 'POST',
      contentType: false,
      processData: false,
      success: function(data) {
        console.log('Post Data: ', data);
        console.log('Successful Post!');
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