class NoteListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: '',
      showContents: false
    }
  }

  handleClick() {
    var url = document.getElementByClassName('url').innerHTML;
    this.fetchNote(url);
    this.setState({
      showContents: !this.state.showContents
    });
  }

  fetchNote(url) {
    console.log('URL', url);
    var context = this;
    $.ajax({
      url: 'http://localhost:3000/note',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({url: url}),
      success: function(data) {
        context.setState({
          note: data
        });
        console.log('Successful Get!');
      },
      error: function(data) {
        console.error('Get Failed! ', data);
      }
    });
  }

  render() {
    return (
      <div>
        <div>
          {this.props.note.description}
        </div>
        <div class="url" onClick={this.handleClick.bind(this)}>
          {this.props.note.url}
          <div>
            {this.state.showContents ? <NoteContent note={note}/> : null}
          </div>
        </div>
        <div>
          {this.props.note.username} {this.props.note.likes}
        </div>
      </div>
    );
  }
};

NoteListEntry.propTypes = {
  note: React.propTypes.object.isRequired
};