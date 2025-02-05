export default function Archive({ archiveNotes }) {
  return (
    <>
      <div className="archive-area">
        <h2>Archived Notes</h2>
        <p>All your archived notes are stored here. You can restore or delete them anytime.</p>
        {archiveNotes.length === 0 ? (
          <>
            <h5>No notes have been archived yet. Move notes here for safekeeping, or <span>create a new note.</span></h5>
          </>
        ) : (
          archiveNotes.map(x => (
            <div className="archive" key={x.id}>
              <h4>{x.title}</h4>
              <h6>{x.tags}</h6>
              <h3>{x.date}</h3>
              <hr />
            </div>
          ))
        )}
      </div>
    </>
  );
}
