"use client";

import { useSession } from 'next-auth/react';
import React from 'react'

export default function UserInfo() {
    const section = useSession()
  return (
    <div>
      <p>{JSON.stringify(section)}</p>
    </div>
  )
}
