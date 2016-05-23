var NoteList = ({notes}) => {

  var noteList = notes.map(note =>
    <NoteListEntry note={note}/>
  );

  return (
    <div>
      {noteList}
    </div>
  );
};

NoteList.propTypes = {
  notes: React.propTypes.array.isRequired
};