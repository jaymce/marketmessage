import Link from "next/link"
import { ArrowRight, MessageSquare, Lightbulb, Target, Users, BarChart, PenTool, Presentation } from "lucide-react"

import { Button } from "@/components/ui/button"
import { AsciiTerminal } from "@/components/ascii-terminal"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-gray-950 to-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-textgray-light">
                Message & Positioning Services
              </h1>
              <p className="max-w-[900px] text-textgray-muted md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Specialized services to help tech startups communicate their unique value
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 mx-auto">
            {/* Service 1 */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-block p-3 rounded-full bg-gray-800">
                  <MessageSquare className="h-8 w-8 text-terminal-green" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold text-textgray-light">Message Strategy</h2>
                  <p className="text-textgray-muted md:text-lg">
                    Craft a clear, compelling narrative that explains your complex technology in simple terms that
                    resonate with your target audience.
                  </p>
                </div>
                <ul className="space-y-2 text-textgray-dim">
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 text-terminal-green" />
                    Value proposition development
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 text-terminal-green" />
                    Messaging framework creation
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 text-terminal-green" />
                    Brand voice definition
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 text-terminal-green" />
                    Audience-specific messaging
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center lg:justify-end">
                <AsciiTerminal
                  lines={[
                    "Analyzing current messaging...",
                    "Identifying key value propositions...",
                    "Crafting compelling narratives...",
                    "Optimizing for target audience...",
                    "Messaging strategy complete!",
                  ]}
                  className="w-full max-w-md"
                />
              </div>
            </div>

            {/* Service 2 */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4 order-2 lg:order-1">
                <div className="p-4 bg-gray-900 rounded-lg shadow-lg max-w-md border border-gray-800">
                  <p className="italic text-textgray-dim">
                    "Our positioning work helped us stand out in a crowded market. We're now recognized as the go-to
                    solution in our niche, which has dramatically improved our sales conversations."
                  </p>
                  <div className="mt-4">
                    <p className="font-semibold text-textgray-light">Emily Chen</p>
                    <p className="text-sm text-textgray-dim">Founder, DataFlow</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 order-1 lg:order-2">
                <div className="inline-block p-3 rounded-full bg-gray-800">
                  <Target className="h-8 w-8 text-terminal-green" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold text-textgray-light">Market Positioning</h2>
                  <p className="text-textgray-muted md:text-lg">
                    Define your unique place in the market landscape to stand out from competitors and own a distinct
                    territory in your customers' minds.
                  </p>
                </div>
                <ul className="space-y-2 text-textgray-dim">
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 text-terminal-green" />
                    Competitive landscape analysis
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 text-terminal-green" />
                    Differentiation strategy
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 text-terminal-green" />
                    Market opportunity assessment
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 text-terminal-green" />
                    Positioning statement development
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 3 */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-block p-3 rounded-full bg-gray-800">
                  <Lightbulb className="h-8 w-8 text-terminal-green" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold text-textgray-light">Go-to-Market Strategy</h2>
                  <p className="text-textgray-muted md:text-lg">
                    Create comprehensive plans for launching products and entering new markets with maximum impact.
                  </p>
                </div>
                <ul className="space-y-2 text-textgray-dim">
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 text-terminal-green" />
                    Launch planning and execution
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 text-terminal-green" />
                    Channel strategy development
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 text-terminal-green" />
                    Marketing campaign planning
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 text-terminal-green" />
                    Sales enablement
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center lg:justify-end">
                <AsciiTerminal
                  lines={[
                    "Mapping market landscape...",
                    "Identifying target segments...",
                    "Developing channel strategy...",
                    "Creating launch timeline...",
                    "Go-to-market plan ready!",
                  ]}
                  className="w-full max-w-md"
                />
              </div>
            </div>

            {/* Service 4 */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4 order-2 lg:order-1">
                <div className="p-4 bg-gray-900 rounded-lg shadow-lg max-w-md border border-gray-800">
                  <p className="italic text-textgray-dim">
                    "After refining our pitch, we secured funding in our first round of meetings with VCs. The clarity
                    and compelling story made all the difference."
                  </p>
                  <div className="mt-4">
                    <p className="font-semibold text-textgray-light">Sophia Rodriguez</p>
                    <p className="text-sm text-textgray-dim">Founder, HealthTech Solutions</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 order-1 lg:order-2">
                <div className="inline-block p-3 rounded-full bg-gray-800">
                  <Presentation className="h-8 w-8 text-terminal-green" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold text-textgray-light">Investor Pitching</h2>
                  <p className="text-textgray-muted md:text-lg">
                    Refine your pitch to effectively communicate your vision, business model, and growth potential to
                    investors.
                  </p>
                </div>
                <ul className="space-y-2 text-textgray-dim">
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 text-terminal-green" />
                    Pitch deck development
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 text-terminal-green" />
                    Storytelling and narrative creation
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 text-terminal-green" />
                    Financial story alignment
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 text-terminal-green" />
                    Presentation coaching
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-textgray-light">
                Additional Services
              </h2>
              <p className="max-w-[900px] text-textgray-muted md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Specialized consulting services to address specific needs
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
            <div className="flex flex-col items-center space-y-2 rounded-lg border border-gray-800 p-6 shadow-sm bg-gray-950">
              <div className="p-2 bg-gray-800 rounded-full">
                <BarChart className="h-6 w-6 text-terminal-green" />
              </div>
              <h3 className="text-xl font-bold text-textgray-light">Market Research</h3>
              <p className="text-sm text-textgray-dim text-center">
                In-depth analysis of market trends, customer needs, and competitive landscape to inform strategic
                decisions.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border border-gray-800 p-6 shadow-sm bg-gray-950">
              <div className="p-2 bg-gray-800 rounded-full">
                <PenTool className="h-6 w-6 text-terminal-green" />
              </div>
              <h3 className="text-xl font-bold text-textgray-light">Brand Development</h3>
              <p className="text-sm text-textgray-dim text-center">
                Create a cohesive brand identity that reflects your company's values and resonates with your target
                audience.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border border-gray-800 p-6 shadow-sm bg-gray-950">
              <div className="p-2 bg-gray-800 rounded-full">
                <Users className="h-6 w-6 text-terminal-green" />
              </div>
              <h3 className="text-xl font-bold text-textgray-light">Sales Strategy</h3>
              <p className="text-sm text-textgray-dim text-center">
                Develop effective sales approaches and processes to convert prospects into customers and drive revenue
                growth.
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
                Ready to Find Your Message?
              </h2>
              <p className="max-w-[900px] text-textgray-muted md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Schedule a consultation to discuss how we can clarify and strengthen your market message.
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
