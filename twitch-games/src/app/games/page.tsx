"use client";
import React from 'react'
import axios from 'axios'

const authCredentials = {
  client_id: "yyvp2u9wbydyznzro0oz3wcc13d8w2",
  token: "trf1z1ykibd1n8ktsj8mo3424lhp3e",
}

export default function Games() {
  const fetch = async () => {
    try {
      const res = await axios.get("/api/games", {
        headers: {
          "Client-ID": `${authCredentials.client_id}`,
          "Content-Type": "application/json",
          "Authorization": `Bearer ${authCredentials.token}`,
        }
      })
      
      console.log(res);
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
