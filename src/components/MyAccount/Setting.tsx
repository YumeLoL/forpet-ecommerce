import { Button } from '@material-tailwind/react'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/router'
import React from 'react'

export default function Setting() {
  const navigate = useRouter()
  return (
    <div>
      <Button
        variant="filled"
        color="black"
        size="sm"
        placeholder={undefined}
        onClick={() => {
          signOut()
          navigate.push('/')
        }}
      >
        LogOut
      </Button>
    </div>
  )
}
