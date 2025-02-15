import React from 'react'
import { Card,CardHeader,CardTitle,CardDescription,CardContent } from './components/ui/card'
import { Label } from './components/ui/label'
import { Input} from './components/ui/input'
import { Button } from './components/ui/button'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'


const Signuppage = () => {
  return (
    <div>
      <div><Navbar /></div>
    
       
       <section className='flex justify-center items-center h-screen  text-white p-4'>

       <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="first-name">Name</Label>
              <Input id="first-name" placeholder="Enter your name " required />
            </div>
           
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="xyz@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>
          <Button type="submit" className="w-full">
            Create an account
          </Button>
          <Button variant="outline" className="w-full">
            Sign up with GitHub
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link to={"/login"} className="underline">
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>

       </section>

    </div>
  )
}

export default Signuppage
