'use client'
import { Button, TextInput } from '@payloadcms/ui'
import { PasswordInput } from 'node_modules/@payloadcms/ui/dist/fields/Password/input.js'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export const CreateAccountForm = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleCreateAccount = async () => {
    console.log('Creating account...')
    console.log(email, password)

    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (response.ok) {
      const data = await response.json()
      console.log(data)
      router.push('/admin/collections/users')
    } else {
      alert('Failed to create account')
    }
  }

  return (
    <div>
      <TextInput
        label="Email"
        path="email"
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
      />
      <PasswordInput
        label="Password"
        path="password"
        value={password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
      />
      <Button onClick={handleCreateAccount}>Create Account</Button>
    </div>
  )
}

export default CreateAccountForm
