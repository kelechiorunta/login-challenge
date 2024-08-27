'use client'
import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react';

/**
 * 
 * @returns Login Component
 */
export default function Login() {
  const { data: session } = useSession();

  return (
    <div>
      <h1>Login Page</h1>
      {!session ? (
        <>
          <h1 className='text-4xl my-4'>You are not signed in</h1>
          <button className='p-4 rounded text-blue-100 bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800' onClick={() => signIn('google')}>Sign in with Google</button>
        </>
      ) : (
        <>
          <h1 className='text-5xl '>Welcome, {session.user.name}</h1>
          <button onClick={signOut}>Sign out</button>
        </>
      )}
    </div>
  );
}
 
