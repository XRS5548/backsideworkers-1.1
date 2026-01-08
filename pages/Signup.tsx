"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, Mail, Lock, User, Building, Globe, Users } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

export default function SignupPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const [form, setForm] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    businessName: "",
    businessWebsite: "",
    employeeSize: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    console.log(form)
    setLoading(false)
    // router.push("/dashboard")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 px-4 py-8 flex items-center justify-center">
      <div className="w-full max-w-2xl flex flex-col md:flex-row gap-6">
        {/* Left side - Brand/Info */}
        <div className="md:w-2/5 flex flex-col justify-center">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
              Join Our Platform
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Create your account and start managing your business efficiently
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white">Team Management</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Scale with your team</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                <Building className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white">Business Tools</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">All-in-one solution</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <Card className="md:w-3/5 shadow-xl border-0">
          <CardHeader className="pb-4">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full">
                <User className="h-6 w-6 text-white" />
              </div>
            </div>
            <CardTitle className="text-2xl text-center text-gray-800 dark:text-white">
              Create Account
            </CardTitle>
            <CardDescription className="text-center">
              Fill in your details to get started
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Personal Info Section */}
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Personal Info
                  </h3>
                  
                  <div className="space-y-3">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium">
                        Full Name *
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="name"
                          name="name"
                          placeholder="Rohit Verma"
                          onChange={handleChange}
                          required
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-sm font-medium">
                        Email *
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="you@email.com"
                          onChange={handleChange}
                          required
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="username" className="text-sm font-medium">
                        Username *
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="username"
                          name="username"
                          placeholder="rohit_dev"
                          onChange={handleChange}
                          required
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="password" className="text-sm font-medium">
                        Password *
                      </Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          onChange={handleChange}
                          required
                          className="pl-10 pr-10"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Business Info Section */}
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Business Info
                  </h3>
                  
                  <div className="space-y-3">
                    <div>
                      <Label htmlFor="businessName" className="text-sm font-medium">
                        Business Name *
                      </Label>
                      <div className="relative">
                        <Building className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="businessName"
                          name="businessName"
                          placeholder="BackSide Worker Pvt Ltd"
                          onChange={handleChange}
                          required
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="businessWebsite" className="text-sm font-medium">
                        Business Website
                      </Label>
                      <div className="relative">
                        <Globe className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="businessWebsite"
                          name="businessWebsite"
                          placeholder="https://example.com"
                          onChange={handleChange}
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div>
                      <Label className="text-sm font-medium">
                        Employee Size *
                      </Label>
                      <Select
                        onValueChange={(value) =>
                          setForm({ ...form, employeeSize: value })
                        }
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select team size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="solo">
                            <div className="flex items-center gap-2">
                              <User className="h-4 w-4" />
                              Solo
                            </div>
                          </SelectItem>
                          <SelectItem value="1-10">1–10 employees</SelectItem>
                          <SelectItem value="11-50">11–50 employees</SelectItem>
                          <SelectItem value="51-200">51–200 employees</SelectItem>
                          <SelectItem value="200+">200+ employees</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>

              <Separator className="my-4" />

              <div className="space-y-4">
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 h-11 text-base"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent mr-2" />
                      Creating Account...
                    </>
                  ) : (
                    "Create Account"
                  )}
                </Button>

                <div className="text-center">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Already have an account?{" "}
                    <Button
                      type="button"
                      variant="link"
                      className="p-0 text-blue-600 hover:text-blue-700"
                      onClick={() => router.push("/login")}
                    >
                      Sign in
                    </Button>
                  </p>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}