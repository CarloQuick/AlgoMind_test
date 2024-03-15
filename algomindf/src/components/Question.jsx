"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";


export default function question() {
  const router = useRouter();
  return(
    <div style={rectangleContainerStyle}>
      <button type="button" onClick={() => router.push('/lesson')}>Stacks Lesson</button>
</div>
  )
}
const rectangleContainerStyle = {
  width: '300px',
  height: '150px',
  backgroundColor: '#ADD8E6',  // Corrected property name
  padding: '20px',
  borderRadius: '8px',  // Corrected property name
  marginTop: '20px',  // Corrected property name
  marginLeft: '20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};