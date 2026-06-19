'use client'
import { useEffect } from 'react'
export default function Redirect() {
  useEffect(() => { window.location.replace('https://app.hackthebox.com/public/users/89243') }, [])
  return null
}
