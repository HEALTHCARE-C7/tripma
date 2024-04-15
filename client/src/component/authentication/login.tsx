import { FormEvent } from 'react'
import { useRouter } from 'next/router'
import { cookies } from 'next/headers'
// import { useNavigation}  from 'next/navigation';
// import { useRouter } from 'next/navigation'

export default function LoginPage() {
  
  const router = useRouter()
  const cookieStore = cookies()
//   const navigation = useNavigation();
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
 
    const formData = new FormData(event.currentTarget)
    const email = formData.get('email')
    const password = formData.get('password')
 
    const response = await fetch('http://localhost:3000/api/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
    
    const token=cookieStore.get('token')
   console.log(response.ok);
   console.log(token);
   
   
    if (response.ok) {
      router.push('/profile')
    console.log('success');
    
    } else {
      console.error(Error); 
      
    }
  }
 
  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  )
}