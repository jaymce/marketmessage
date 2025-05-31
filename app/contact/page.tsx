"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    })

    setFormData({
      name: "",
      email: "",
      company: "",
      message: "",
    })

    setIsSubmitting(false)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Get in Touch</h1>
              <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Ready to clarify your message and strengthen your market position? Let's talk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-white">Contact Information</h2>
                <p className="text-gray-300 md:text-lg">
                  Reach out to discuss how marketmessage.io can help your startup communicate more effectively.
                </p>
              </div>
              <div className="grid gap-4">
                <Card className="bg-gray-900 border-gray-800">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <Mail className="h-6 w-6 text-terminal-green" />
                      <div>
                        <h3 className="font-medium text-white">Email</h3>
                        <p className="text-sm text-gray-400">hello@marketmessage.io</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-gray-900 border-gray-800">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <Phone className="h-6 w-6 text-terminal-green" />
                      <div>
                        <h3 className="font-medium text-white">Phone</h3>
                        <p className="text-sm text-gray-400">(555) 123-4567</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-gray-900 border-gray-800">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <MapPin className="h-6 w-6 text-terminal-green" />
                      <div>
                        <h3 className="font-medium text-white">Location</h3>
                        <p className="text-sm text-gray-400">San Francisco, CA</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">Availability</h3>
                <p className="text-gray-300">
                  I'm currently available for new consulting engagements starting in May 2023.
                </p>
              </div>
            </div>
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name" className="text-white">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-gray-800 border-gray-700 text-white"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email" className="text-white">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-gray-800 border-gray-700 text-white"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="company" className="text-white">
                      Company
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Your company name"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="bg-gray-800 border-gray-700 text-white"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="message" className="text-white">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="How can I help you?"
                      value={formData.message}
                      onChange={handleChange}
                      className="min-h-[150px] bg-gray-800 border-gray-700 text-white"
                      required
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Frequently Asked Questions</h2>
              <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Common questions about our messaging and positioning services
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6">
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">How long does a typical engagement last?</h3>
                <p className="text-gray-300">
                  Engagements typically range from 4-12 weeks, depending on the scope of work. I offer both
                  project-based and retainer arrangements to suit your needs.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">Do you work with early-stage startups?</h3>
                <p className="text-gray-300">
                  Yes, I work with startups at all stages, from pre-seed to Series C. I offer tailored packages for
                  early-stage startups with limited budgets.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">What industries do you specialize in?</h3>
                <p className="text-gray-300">
                  I specialize in B2B and B2C technology companies, with particular expertise in SaaS, AI/ML, FinTech,
                  and HealthTech. However, I've worked across various tech sectors.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">How do you measure success?</h3>
                <p className="text-gray-300">
                  Success metrics vary by project but typically include improvements in conversion rates, sales cycle
                  length, customer acquisition costs, and investor pitch success rates.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
