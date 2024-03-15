import Link from 'next/link';
import PocketBase from 'pocketbase';
import styles from './Notes.module.css'
import CreateNote from './CreateNote';

// Variety of variables
// Cache behavior and runtime settings when no using fetch
export const dynamic = 'auto',
  dynamicParams = true,
  revalidate = 0,
  fetchCache = 'auto',
  runtime = 'nodejs',
  preferredRegion = 'auto'


async function getNotes(){
  // Original fetching
  // const res = await fetch(
  //   'http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30', 
  //   { cache: "no-store" }
  // ); 
  // const data = await res.json();

  // PocketBase fetching
  const db = new PocketBase('http://127.0.0.1:8090')
  const data = await db.collection('notes').getList()

  return data?.items as any[];
}

// Note component
function Note({note}: any) {
  const {id, title, content, created} = note || [];

  return (
    // Link to a note with random id
    <Link href={`/notes/${id}`}>
      <div className={styles.note}>
        <h2>{title}</h2>
        <p>{content}</p>
        <p>{created}</p>
      </div>
    </Link>
  )
}

// By default, components are server-rendered.
export default async function NotesPage(){
  const notes = await getNotes();

  return (
    <div>
      <h1 className='text-3xl font-bold m-4'>Notes</h1>
      <div className={styles.grid}>
        {notes.map((note) => {
          return <Note key={note.id} note={note} />;
        })}
      </div>

      <CreateNote />
    </div>
  )
}