const fs = require("fs");

//example code from other route.js files
//import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
//might need to create 
import Questions from "@/models/questions";

export async function POST(req) {
  console.log("Test code load - api");
  try {
    const { value } = await req.json();
    //check on server side that connection is working, deleted once models/users.js created
    console.log("Code: \n", value);
    
    return NextResponse.json({ message: "Code received" }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "An error occured while registering the user" },
      { status: 500 }
    );
  }
}

/*
async function GET(req) {
  const data = await req.json();
  
  fs.writeFile('test.cpp', data, (err) => {
    //in case of error, throw error
    if (err) throw err;
  })
  
 console.log("Receiving code...");


  return NextResponse.json({message: "Code received"}, {status: 201});
  
    try {
      const { username, email, password, provider, xp } = await req.json();
      
     
      await connectMongoDB();
      await User.create({
        username,
        email,
        password: hashedPassword,
        provider,
        xp: 0,
      });
  
      return NextResponse.json({ message: "Code received" }, { status: 201 });
    } catch (error) {
      console.error(error);
      return NextResponse.json(
        { message: "An error occured while sending the code to the backend" },
        { status: 500 }
      );
    }
    
  }
*/