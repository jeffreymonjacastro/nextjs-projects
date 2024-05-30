"use client";
import React, { useState } from 'react'
import axios from 'axios'

export default function Games() {
  const fetch = async () => {
    try {
      const res = await axios.post("/api/games");
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h1>Hi</h1>
      <button onClick={fetch}>Fetch</button>
    </div>
  )
}
