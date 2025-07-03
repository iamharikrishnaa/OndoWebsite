"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-white">
      {/* Abstract shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-[5%] w-64 h-64 rounded-full bg-gray-100 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-[10%] w-72 h-72 rounded-full bg-gray-100 blur-3xl"></div>

        <motion.div
          className="absolute top-[15%] right-[15%] w-24 h-24 rounded-full border border-black/20"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        ></motion.div>

        <motion.div
          className="absolute bottom-[20%] left-[20%] w-32 h-32 rounded-full border border-black/20"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
        ></motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Content */}
          <motion.div
            className="lg:col-span-6 xl:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-black/10 text-black font-medium text-sm mb-6">
              <span className="mr-2">•</span> Professional Web Development Services
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Elevate Your <span className="text-black">Digital Presence</span> With Expert Solutions
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              We craft high-performance, visually stunning websites and applications that drive business growth and
              deliver exceptional user experiences.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-black mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-gray-700">Custom web development tailored to your business needs</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-black mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-gray-700">Responsive designs that work perfectly on all devices</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-black mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-gray-700">SEO optimization to improve your online visibility</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-md px-8 py-6 bg-black hover:bg-black/90 text-white group shadow-lg shadow-black/20 hover:shadow-black/30 transition-all"
              >
                <Link href="/contact" className="flex items-center">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-md px-8 py-6 border-gray-300 hover:bg-gray-50 group transition-all"
              >
                <Link href="/work" className="flex items-center">
                  View Portfolio
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            className="lg:col-span-6 xl:col-span-7"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              {/* Main image */}
              <div className="relative z-10 rounded-lg shadow-2xl overflow-hidden border border-gray-100">
                <Image
                  src="/images/abstract-code-banner.jpg"
                  alt="Abstract web architecture visualization"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                  priority
                />
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-6 -left-6 z-20 bg-white rounded-lg shadow-lg p-4 border border-gray-100"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M20 6L9 17L4 12"
                        stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium">User Experience</p>
                    <p className="text-black font-bold">100%</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -right-6 z-20 bg-white rounded-lg shadow-lg p-4 border border-gray-100"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 20V10"
                        stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18 20V4"
                        stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6 20V16"
                        stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium">User Engagement</p>
                    <p className="text-black font-bold">+42.9%</p>
                  </div>
                </div>
              </motion.div>

              {/* Code snippet */}
              <motion.div
                className="absolute top-1/2 -right-10 transform -translate-y-1/2 z-20 bg-black rounded-lg shadow-lg p-4 border border-gray-800 hidden xl:block"
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
              >
                <pre className="text-xs text-gray-300 font-mono">
                  <code>{`function optimizeSite() {
  const performance = 100;
  const seo = 100;
  const ux = 100;
  
  return success();
}`}</code>
                </pre>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Trusted by section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-6">Trusted by innovative companies</p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <Image
                  src={`/images/clients/client-${i}.svg`}
                  alt={`Client logo ${i}`}
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
