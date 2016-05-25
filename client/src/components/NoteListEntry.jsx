class NoteListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      showContents: false
    }
  }

  handleClick() {
    this.fetchNote(this.props.note.url);
    this.setState({
      showContents: !this.state.showContents
    });
  }

  fetchNote(url) {
    var context = this;
    $.ajax({
      url: 'http://localhost:3000/note',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({url: url}),
      success: function(data) {
        console.log(data);
        context.setState({
          content: data
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
            {this.state.showContents ? <NoteContent key={'1'} content={this.state.content}/> : null}
          </div>
        </div>
        <div>
          <a> {this.props.note.username} </a>
          <span> Likes {this.props.note.likes}</span>
        </div>
      </div>
    );
  }
};

NoteListEntry.propTypes = {
  note: React.propTypes.object.isRequired
};