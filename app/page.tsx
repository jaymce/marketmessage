import Link from "next/link"
import Image from "next/image"
import { ArrowRight, MessageSquare, Lightbulb, Target } from "lucide-react"

import { Button } from "@/components/ui/button"
import { AsciiTerminal } from "@/components/ascii-terminal"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-gray-950 to-gray-900">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-textgray-light">
                  Messages That Move Markets
                </h1>
                <p className="max-w-[600px] text-textgray-muted md:text-xl">
                  We help tech startups find the words that win customers, convince investors, and define categories.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button className="px-8 bg-terminal-dim hover:bg-terminal-muted text-black">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    variant="outline"
                    className="px-8 border-gray-700 text-textgray-muted hover:bg-gray-800 hover:text-textgray-light"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <AsciiTerminal
                lines={[
                  "Analyzing market positioning...",
                  "Identifying key differentiators...",
                  "Crafting compelling narratives...",
                  "Optimizing message clarity...",
                  "Translating technical features to benefits...",
                  "Aligning with customer pain points...",
                  "Message strategy complete!",
                ]}
                className="w-full max-w-md shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-textgray-light">
                Services
              </h2>
              <p className="max-w-[900px] text-textgray-muted md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Specialized message and positioning services for tech innovators
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 mt-8">
            <div className="flex flex-col items-center space-y-2 rounded-lg border border-gray-800 p-6 shadow-sm bg-gray-900">
              <div className="p-2 bg-gray-800 rounded-full">
                <MessageSquare className="h-6 w-6 text-terminal-green" />
              </div>
              <h3 className="text-xl font-bold text-textgray-light">Message Strategy</h3>
              <p className="text-sm text-textgray-dim text-center">
                Develop clear, compelling messaging that resonates with your target audience and communicates your
                unique value.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border border-gray-800 p-6 shadow-sm bg-gray-900">
              <div className="p-2 bg-gray-800 rounded-full">
                <Target className="h-6 w-6 text-terminal-green" />
              </div>
              <h3 className="text-xl font-bold text-textgray-light">Market Positioning</h3>
              <p className="text-sm text-textgray-dim text-center">
                Establish a distinctive position in the market that highlights your competitive advantages and attracts
                your ideal customers.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border border-gray-800 p-6 shadow-sm bg-gray-900">
              <div className="p-2 bg-gray-800 rounded-full">
                <Lightbulb className="h-6 w-6 text-terminal-green" />
              </div>
              <h3 className="text-xl font-bold text-textgray-light">Go-to-Market Strategy</h3>
              <p className="text-sm text-textgray-dim text-center">
                Create comprehensive plans for launching products and entering new markets with maximum impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex items-center justify-center">
              <Image
                src="/images/consultant-profile.png"
                alt="Consultant Profile"
                width={400}
                height={400}
                className="rounded-lg object-cover shadow-lg"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-textgray-light">
                  About Me
                </h2>
                <p className="max-w-[600px] text-textgray-muted md:text-xl">
                  I believe in building trust through genuine partnership and delivering tangible results.
                </p>
                <p className="max-w-[600px] text-textgray-muted md:text-xl">
                  My experience includes contributing to the creation of new markets and segments with successful teams
                  at companies like Vontu, Hortonworks, CoreOS, Cockroach Labs, and Temporal. With a background as a
                  developer and operational experience in numerous startups (achieving an 80% success rate), I am a
                  proven resource for founders bringing technology to market.
                </p>
              </div>
              <div>
                <Link href="/about">
                  <Button
                    variant="outline"
                    className="border-gray-700 text-textgray-muted hover:bg-gray-800 hover:text-textgray-light"
                  >
                    Learn More About My Approach
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-textgray-light">
                Client Success Stories
              </h2>
              <p className="max-w-[900px] text-textgray-muted md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from startups that have transformed their message and positioning
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
            <div className="flex flex-col justify-between space-y-4 rounded-lg border border-gray-800 p-6 shadow-sm bg-gray-900">
              <div>
                <p className="text-sm text-textgray-dim">
                  "The message strategy we developed together helped us secure our Series A funding. Investors finally
                  understood what makes our technology special."
                </p>
              </div>
              <div>
                <p className="font-semibold text-textgray-light">Alex Chen</p>
                <p className="text-sm text-textgray-dim">CEO, TechNova</p>
              </div>
            </div>
            <div className="flex flex-col justify-between space-y-4 rounded-lg border border-gray-800 p-6 shadow-sm bg-gray-900">
              <div>
                <p className="text-sm text-textgray-dim">
                  "Our positioning in the market was completely transformed. We went from being one of many to having a
                  clear, distinctive voice that resonates with our target customers."
                </p>
              </div>
              <div>
                <p className="font-semibold text-textgray-light">Sarah Johnson</p>
                <p className="text-sm text-textgray-dim">Founder, DataSphere</p>
              </div>
            </div>
            <div className="flex flex-col justify-between space-y-4 rounded-lg border border-gray-800 p-6 shadow-sm bg-gray-900">
              <div>
                <p className="text-sm text-textgray-dim">
                  "The go-to-market strategy we developed together led to a successful product launch that exceeded our
                  expectations in terms of user acquisition."
                </p>
              </div>
              <div>
                <p className="font-semibold text-textgray-light">Michael Torres</p>
                <p className="text-sm text-textgray-dim">CTO, CloudPulse</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-textgray-light">
                Want To Talk Message?
              </h2>
              <p className="max-w-[900px] text-textgray-muted md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Let's transform how you talk about your technology and connect with your audience.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <Link href="/contact">
                <Button className="w-full bg-terminal-dim hover:bg-terminal-muted text-black" size="lg">
                  Schedule a Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
