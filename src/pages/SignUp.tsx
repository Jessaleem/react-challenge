import { useRef } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function SignUp() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    const user = await createUserWithEmailAndPassword(auth, email!, password!);
    console.log(user);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='email'
        placeholder='example@example.com'
        ref={emailRef}
        required
      />
      <input
        type='password'
        placeholder='Enter your password'
        ref={passwordRef}
        required
      />
      <button type='submit'>Sign Up</button>
    </form>
  );
}
