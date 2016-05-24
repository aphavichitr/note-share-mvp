var NoteList = ({notes}) => {
  return (
    <div>
      {notes.map(note =>
        <NoteListEntry key={note._id} note={note}/>
      )}
    </div>
  );
};

NoteList.propTypes = {
  notes: React.propTypes.array.isRequired
};