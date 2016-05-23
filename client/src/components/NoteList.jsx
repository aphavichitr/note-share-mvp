var NoteList = ({notes}) => (

  var notesList = notes.map(note =>
    <NoteListEntry note={note}/>
  );
);

NoteList.propTypes = {
  notes: React.propTypes.array.isRequired
};