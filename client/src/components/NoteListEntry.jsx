var NoteListEntry = ({note}) => {
  return (
    <div>
      <div>
        {note.description}
      </div>
      <div>
        {note.url}
      </div>
      <div>
        {note.username} {note.likes}
      </div>
    </div>
  );
};

NoteListEntry.propTypes = {
  note: React.propTypes.object.isRequired
};