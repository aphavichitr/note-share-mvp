class NoteListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      showContents: false,
      likes: this.props.note.likes,
      subcontent: ''
    }
  }

  componentDidMount() {
    this.getSubstringContents();
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

  handleLikes() {
    this.fetchLikes(this.props.note.url);
  }

  fetchLikes(url) {
    var context = this;
    $.ajax({
      url: 'http://localhost:3000/likes',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({url: url}),
      success: function(data) {
        context.setState({
          likes: data.likes
        });
        console.log('Successful Get!');
      },
      error: function(data) {
        console.error('Get Failed! ', data);
      }
    });
  }

  getSubstringContents() {
    this.fetchSubContent(this.props.note.url);
  }

  fetchSubContent(url) {
    var context = this;
    $.ajax({
      url: 'http://localhost:3000/subcontent',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({url: url}),
      success: function(data) {
        var substr = data.substring(0, 50) + '...';
        context.setState({
          subcontent: substr
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
      <div class="row">
        <div class="description">
          {this.props.note.description}
        </div>
        <div class="url" onClick={this.handleClick.bind(this)}>
          {this.state.subcontent}
          <div>
            {this.state.showContents ? <NoteContent key={'1'} content={this.state.content}/> : null}
          </div>
        </div>
        <div class="interactive">
          <a> {this.props.note.username} </a>
          <a onClick={this.handleLikes.bind(this)}> Likes {this.state.likes}</a>
        </div>
      </div>
    );
  }
};

NoteListEntry.propTypes = {
  note: React.propTypes.object.isRequired
};