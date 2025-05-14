"use client"
import React, { useEffect, useState } from 'react'
import { useSession } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle } from 'lucide-react';
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
    <div>
      <h1 className=" mx-12 py-12 text-3xl font-semibold text-red-600">
        Hi, User
      </h1>
      <div className=" grid grid-cols-1 place-items-center md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-red-600 dark:text-red-500">
              Online
            </CardTitle>
            <CheckCircle className="h-4 w-4 text-status-online" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">"GitGraph.com"</div>
            <p className="text-xs text-muted-foreground">of 8 websites</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-red-600 dark:text-red-500">
              Online
            </CardTitle>
            <CheckCircle className="h-4 w-4 text-status-online" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">"GitGraph.com"</div>
            <p className="text-xs text-muted-foreground">of 8 websites</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-red-600 dark:text-red-500">
              Online
            </CardTitle>
            <CheckCircle className="h-4 w-4 text-status-online" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">"GitGraph.com"</div>
            <p className="text-xs text-muted-foreground">of 8 websites</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default page
