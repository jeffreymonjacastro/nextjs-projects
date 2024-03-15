"use client"
// This component will be rendered on the client

import { useState } from "react"
import { useRouter } from "next/navigation"
import PocketBase from "pocketbase"

export default function CreateNode() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const router = useRouter()

  const createNote = async() => {

    // Original fetch
    // await fetch('http://127.0.0.1:8090/api/collections/notes/records', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     title,
    //     content
    //   })
    // })

    // PocketBase fetch
    const db = new PocketBase('http://127.0.0.1:8090')
    await db.collection('notes').create({
      title,
      content
    })

    setContent('')
    setTitle('')

    router.refresh()
  }

  return (
    <form onSubmit={createNote}>
      <h3>Create a new Note</h3>
      <input 
        type="text" 
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea 
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button 
        type="submit"
        className="bg-black text-white font-bold py-2 px-4 rounded-full"
      >
        Create Note
      </button>
    </form>
  )
}