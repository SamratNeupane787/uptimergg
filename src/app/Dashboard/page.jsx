"use client"
import React, { useEffect, useState } from 'react'
import { useSession } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
function page() {
  const {session} = useSession()
  const [websitelink, setWebsiteLink] = useState("")
  console.log(session)
  const router = useRouter()
  useEffect(()=>{

    const callweb = async () => {
      const response = await fetch("/api/addwebsite");
    };
    callweb();

  },[])

 const handleSubmit = async()=>{
    const response = await fetch("/api/addwebsite", {
      method: "POST",
      body: JSON.stringify({
        email: session.session.publicUserData.identifier,
        websiteLink: websitelink,
      }),
    });
    if (response.ok) {
      console.log("Website added");
      alert("Website adddddeeeedd")
    } else {
      console.error("Error adding website");
    }
  };
 

  return (
    <div className="bg-gray-600 text-red-500 h-[32rem] p-4">
      <input
        type="text"
        value={websitelink}
        onChange={(e) => setWebsiteLink(e.target.value)}
        className="p-2 rounded"
        placeholder="Enter website"
      />
      <button
        onClick={handleSubmit}
        className="ml-2 p-2 bg-white text-black rounded"
      >
        Add Website
      </button>
    </div>
  );
}

export default page
