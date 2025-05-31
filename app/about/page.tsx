import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, BookOpen, Lightbulb, Target } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-textgray-light">
                  About marketmessage.io
                </h1>
                <p className="max-w-[600px] text-textgray-muted md:text-xl">
                  Translating technical innovation into compelling market narratives
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/images/consultant-profile.png"
                alt="Consultant Profile"
                width={400}
                height={400}
                className="rounded-lg object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-textgray-light">My Story</h2>
                <p className="text-textgray-muted md:text-lg">
                  After leading marketing at several high-growth tech startups and witnessing the struggle many founders
                  face in articulating their vision, I founded marketmessage.io to solve this specific problem.
                </p>
                <p className="text-textgray-muted md:text-lg">
                  Too often, brilliant technical innovations fail to gain traction because the messaging doesn't connect
                  with the audience. My mission is to bridge this gap, helping tech startups translate their complex
                  solutions into clear, compelling narratives.
                </p>
                <p className="text-textgray-muted md:text-lg">
                  I've developed a systematic approach to messaging and positioning that has helped dozens of startups
                  raise funding, acquire customers, and establish category leadership.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center space-y-2 rounded-lg border border-gray-800 p-6 shadow-sm bg-gray-900">
                  <div className="p-2 bg-gray-800 rounded-full">
                    <Award className="h-6 w-6 text-terminal-green" />
                  </div>
                  <h3 className="text-xl font-bold text-center text-textgray-light">10+</h3>
                  <p className="text-sm text-textgray-dim text-center">Years in Tech</p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border border-gray-800 p-6 shadow-sm bg-gray-900">
                  <div className="p-2 bg-gray-800 rounded-full">
                    <Target className="h-6 w-6 text-terminal-green" />
                  </div>
                  <h3 className="text-xl font-bold text-center text-textgray-light">50+</h3>
                  <p className="text-sm text-textgray-dim text-center">Startups Helped</p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border border-gray-800 p-6 shadow-sm bg-gray-900">
                  <div className="p-2 bg-gray-800 rounded-full">
                    <Lightbulb className="h-6 w-6 text-terminal-green" />
                  </div>
                  <h3 className="text-xl font-bold text-center text-textgray-light">$100M+</h3>
                  <p className="text-sm text-textgray-dim text-center">Funding Raised</p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border border-gray-800 p-6 shadow-sm bg-gray-900">
                  <div className="p-2 bg-gray-800 rounded-full">
                    <BookOpen className="h-6 w-6 text-terminal-green" />
                  </div>
                  <h3 className="text-xl font-bold text-center text-textgray-light">3</h3>
                  <p className="text-sm text-textgray-dim text-center">Published Books</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-textgray-light">
                The marketmessage.io Method
              </h2>
              <p className="max-w-[900px] text-textgray-muted md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A proven framework for developing messaging that moves markets
              </p>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 rounded-lg border border-gray-800 p-6 shadow-sm bg-gray-950">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-800">
                <div className="flex items-center justify-center rounded-full bg-gray-700 p-2">
                  <span className="text-xl font-bold text-textgray-light">1</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-textgray-light">Discover</h3>
              <p className="text-center text-textgray-muted">
                Deep dive into your business, technology, market, and competition to understand your unique position.
              </p>
              <ul className="space-y-2 text-sm text-textgray-dim">
                <li className="flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4 text-terminal-green" />
                  Stakeholder interviews
                </li>
                <li className="flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4 text-terminal-green" />
                  Customer research
                </li>
                <li className="flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4 text-terminal-green" />
                  Competitive analysis
                </li>
                <li className="flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4 text-terminal-green" />
                  Market assessment
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border border-gray-800 p-6 shadow-sm bg-gray-950">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-800">
                <div className="flex items-center justify-center rounded-full bg-gray-700 p-2">
                  <span className="text-xl font-bold text-textgray-light">2</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-textgray-light">Develop</h3>
              <p className="text-center text-textgray-muted">
                Create strategic messaging and positioning frameworks tailored to your specific needs and goals.
              </p>
              <ul className="space-y-2 text-sm text-textgray-dim">
                <li className="flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4 text-terminal-green" />
                  Messaging architecture
                </li>
                <li className="flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4 text-terminal-green" />
                  Value proposition design
                </li>
                <li className="flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4 text-terminal-green" />
                  Positioning statement
                </li>
                <li className="flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4 text-terminal-green" />
                  Key messaging pillars
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border border-gray-800 p-6 shadow-sm bg-gray-950">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-800">
                <div className="flex items-center justify-center rounded-full bg-gray-700 p-2">
                  <span className="text-xl font-bold text-textgray-light">3</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-textgray-light">Deploy</h3>
              <p className="text-center text-textgray-muted">
                Implement messaging across channels and train your team to consistently communicate your value.
              </p>
              <ul className="space-y-2 text-sm text-textgray-dim">
                <li className="flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4 text-terminal-green" />
                  Content development
                </li>
                <li className="flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4 text-terminal-green" />
                  Team training
                </li>
                <li className="flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4 text-terminal-green" />
                  Channel strategy
                </li>
                <li className="flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4 text-terminal-green" />
                  Measurement framework
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-textgray-light">
                Industry Expertise
              </h2>
              <p className="max-w-[900px] text-textgray-muted md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Specialized knowledge across key technology sectors
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center space-y-2 rounded-lg border border-gray-800 p-6 shadow-sm bg-gray-900">
              <h3 className="text-xl font-bold text-textgray-light">SaaS</h3>
              <p className="text-sm text-textgray-dim text-center">
                B2B and B2C software-as-a-service solutions across various verticals
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border border-gray-800 p-6 shadow-sm bg-gray-900">
              <h3 className="text-xl font-bold text-textgray-light">AI & ML</h3>
              <p className="text-sm text-textgray-dim text-center">
                Artificial intelligence and machine learning applications and platforms
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border border-gray-800 p-6 shadow-sm bg-gray-900">
              <h3 className="text-xl font-bold text-textgray-light">FinTech</h3>
              <p className="text-sm text-textgray-dim text-center">
                Financial technology solutions for consumers and businesses
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border border-gray-800 p-6 shadow-sm bg-gray-900">
              <h3 className="text-xl font-bold text-textgray-light">HealthTech</h3>
              <p className="text-sm text-textgray-dim text-center">
                Digital health, medical devices, and healthcare IT solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-textgray-light">
                Let's Craft Your Message
              </h2>
              <p className="max-w-[900px] text-textgray-muted md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Ready to transform how you communicate your value? Let's start the conversation.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <Link href="/contact">
                <Button className="w-full bg-terminal-dim hover:bg-terminal-muted text-black" size="lg">
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
