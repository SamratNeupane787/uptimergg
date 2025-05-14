import { connectMongoDb } from "@/lib/connect";
import { websiteAdd } from "@/Models/websites.model";
import { NextResponse } from "next/server";

export async function GET(params) {
 try {
  await connectMongoDb()
 } catch (error) {
  console.log("Error connecting database: ", error)
 }


}


export async function POST(params){
  const {websiteLink, email} = await params.json() 
  try{
    await connectMongoDb()
  }catch(error){
    console.log("Error connecting database",error)
  }
    
  const dataExist = await websiteAdd.findOne({websiteLink, email})

  if (!dataExist) {
    await websiteAdd.create({
      websiteLink,
      email,
    });
    return NextResponse.json(
      {
        message: "Website Added Successfully",
      },
      {
        status: 201,
      }
    );
  } else {
    return NextResponse.json(
      { Message: "Failed adding website" },
      { status: 400 }
    );
  }

}