// pages/index.js
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Nihongo Task | Learn Japanese Online</title>
        <meta
          name="description"
          content="Learn Japanese with a native teacher based in Kyoto"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-800">
                Nihongo <span className="text-red-500">Task</span>
              </h1>
            </div>

            <nav className="hidden md:flex space-x-8">
              <Link
                href="/"
                className="text-gray-700 font-medium hover:text-red-500"
              >
                Home
              </Link>
              <Link
                href="/courses"
                className="text-gray-700 font-medium hover:text-red-500"
              >
                Courses
              </Link>
              <Link
                href="/resources"
                className="text-gray-700 font-medium hover:text-red-500"
              >
                Resources
              </Link>
              <Link
                href="/about"
                className="text-gray-700 font-medium hover:text-red-500"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 font-medium hover:text-red-500"
              >
                Contact
              </Link>
            </nav>

            <Link
              href="/get-started"
              className="hidden md:inline-flex items-center px-4 py-2 bg-red-500 text-white rounded-full text-sm font-medium hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Get Started
            </Link>

            <button className="md:hidden text-gray-500 focus:outline-none">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Learn <span className="text-red-500">Japanese</span> the
                Authentic Way
              </h2>
              <p className="text-xl text-gray-600 mb-10">
                Join students worldwide who are achieving fluency through our
                immersive approach taught by a native Japanese teacher based in
                Kyoto
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
                <Link
                  href="/start-journey"
                  className="px-8 py-3 bg-red-500 text-white rounded-full text-lg font-medium hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Start Your Journey
                </Link>
                <Link
                  href="/explore-courses"
                  className="px-8 py-3 bg-white text-gray-700 rounded-full text-lg font-medium border-2 border-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  Explore Courses
                </Link>
              </div>
              <div className="relative h-64 sm:h-80 md:h-96 rounded-lg shadow-xl overflow-hidden">
                <Image
                  src="/placeholder-hero.jpg"
                  alt="Japanese learning experience"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Why Learn with Nihongo Task?
              </h3>
              <p className="text-xl text-gray-600">
                A unique approach that combines authentic instruction from a
                Kyoto-based native speaker with cultural immersion
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-5xl mb-4">🎯</div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">
                  Native Speaker Instruction
                </h4>
                <p className="text-gray-600">
                  Learn Japanese from a native Japanese teacher who understands
                  the nuances of the language as it&apos;s actually spoken in Japan
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-5xl mb-4">🔄</div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">
                  Spaced Repetition
                </h4>
                <p className="text-gray-600">
                  Our system is designed to help you remember vocabulary and
                  grammar for the long term
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-5xl mb-4">🎭</div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">
                  Kyoto Cultural Insights
                </h4>
                <p className="text-gray-600">
                  Gain authentic cultural insights from a teacher based in
                  Kyoto, one of Japan&apos;s most historic and culturally
                  significant cities
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-5xl mb-4">👥</div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">
                  Community Support
                </h4>
                <p className="text-gray-600">
                  Join a vibrant community of learners who help each other
                  progress and stay motivated
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Preview Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Popular Courses
              </h3>
              <p className="text-xl text-gray-600">
                Structured learning paths for every level, from complete
                beginners to advanced speakers
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48">
                  <Image
                    src="/placeholder-beginner.jpg"
                    alt="Beginner Japanese Course"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-yellow-400 text-white text-sm font-medium rounded-full mb-4">
                    Beginner
                  </span>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">
                    Japanese Foundations
                  </h4>
                  <p className="text-gray-600 mb-6">
                    Start your Japanese journey with essential phrases,
                    hiragana, katakana, and basic grammar
                  </p>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <div className="text-lg font-bold text-red-500">$99</div>
                    <div className="flex items-center">
                      <div className="text-yellow-400 mr-1">★★★★★</div>
                      <span className="text-gray-600 text-sm">5.0</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48">
                  <Image
                    src="/placeholder-intermediate.jpg"
                    alt="Intermediate Japanese Course"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-blue-500 text-white text-sm font-medium rounded-full mb-4">
                    Intermediate
                  </span>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">
                    Practical Conversations
                  </h4>
                  <p className="text-gray-600 mb-6">
                    Take your Japanese to the next level with everyday
                    conversations and useful kanji
                  </p>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <div className="text-lg font-bold text-red-500">$129</div>
                    <div className="flex items-center">
                      <div className="text-yellow-400 mr-1">★★★★★</div>
                      <span className="text-gray-600 text-sm">4.9</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48">
                  <Image
                    src="/placeholder-advanced.jpg"
                    alt="Advanced Japanese Course"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-indigo-600 text-white text-sm font-medium rounded-full mb-4">
                    Advanced
                  </span>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">
                    Fluent Japanese
                  </h4>
                  <p className="text-gray-600 mb-6">
                    Master complex grammar, nuanced expressions, and business
                    Japanese for professional contexts
                  </p>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <div className="text-lg font-bold text-red-500">$159</div>
                    <div className="flex items-center">
                      <div className="text-yellow-400 mr-1">★★★★★</div>
                      <span className="text-gray-600 text-sm">4.8</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Student Success Stories
              </h3>
              <p className="text-xl text-gray-600">
                Hear from learners who transformed their Japanese skills with
                our courses
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
                <div className="text-gray-700 italic mb-6">
                  &quot;After just 6 months with Nihongo Task&apos;s courses, I was able
                  to have a full conversation during my trip to Japan. Learning
                  from a native speaker made all the difference!&quot;
                </div>
                <div className="flex items-center">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="/placeholder-avatar1.jpg"
                      alt="Sarah J."
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800">Sarah J.</h5>
                    <p className="text-sm text-gray-600">
                      Beginner to Intermediate
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
                <div className="text-gray-700 italic mb-6">
                  &quot;I tried several apps and courses before, but none of them
                  helped me understand Japanese culture like learning from a
                  Kyoto-based teacher. Now I can watch anime without subtitles!&quot;
                </div>
                <div className="flex items-center">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="/placeholder-avatar2.jpg"
                      alt="Michael T."
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800">Michael T.</h5>
                    <p className="text-sm text-gray-600">
                      Completed all courses
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
                <div className="text-gray-700 italic mb-6">
                  &quot;The community aspect is amazing. Having study partners and
                  feedback from native speakers has accelerated my learning
                  beyond what I thought possible.&quot;
                </div>
                <div className="flex items-center">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="/placeholder-avatar3.jpg"
                      alt="Elena R."
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800">Elena R.</h5>
                    <p className="text-sm text-gray-600">
                      Intermediate to Advanced
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-red-500 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Start Your Japanese Journey Today
              </h3>
              <p className="text-xl mb-10">
                Join over 50,000 students who have transformed their Japanese
                skills with our proven method
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/enroll"
                  className="px-8 py-3 bg-white text-indigo-600 rounded-full text-lg font-medium hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                >
                  Enroll Now
                </Link>
                <Link
                  href="/trial"
                  className="px-8 py-3 bg-transparent text-white rounded-full text-lg font-medium border-2 border-white hover:bg-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                >
                  Free Trial
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-700">
                Nihongo Task
              </h4>
              <p className="text-gray-400 mb-4">
                Making Japanese language learning authentic, practical, and
                enjoyable for everyone.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-500 transition-colors"
                >
                  f
                </a>
                <a
                  href="#"
                  className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-500 transition-colors"
                >
                  X
                </a>
                <a
                  href="#"
                  className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-500 transition-colors"
                >
                  ig
                </a>
                <a
                  href="#"
                  className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-500 transition-colors"
                >
                  yt
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-700">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/courses"
                    className="text-gray-400 hover:text-white"
                  >
                    Courses
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources"
                    className="text-gray-400 hover:text-white"
                  >
                    Resources
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-400 hover:text-white"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-400 hover:text-white"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-700">
                Courses
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/courses/beginner"
                    className="text-gray-400 hover:text-white"
                  >
                    Beginner Japanese
                  </Link>
                </li>
                <li>
                  <Link
                    href="/courses/intermediate"
                    className="text-gray-400 hover:text-white"
                  >
                    Intermediate Japanese
                  </Link>
                </li>
                <li>
                  <Link
                    href="/courses/advanced"
                    className="text-gray-400 hover:text-white"
                  >
                    Advanced Japanese
                  </Link>
                </li>
                <li>
                  <Link
                    href="/courses/jlpt"
                    className="text-gray-400 hover:text-white"
                  >
                    JLPT Preparation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/courses/business"
                    className="text-gray-400 hover:text-white"
                  >
                    Business Japanese
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-700">
                Resources
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/resources/worksheets"
                    className="text-gray-400 hover:text-white"
                  >
                    Free Worksheets
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/vocabulary"
                    className="text-gray-400 hover:text-white"
                  >
                    Vocabulary Lists
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/grammar"
                    className="text-gray-400 hover:text-white"
                  >
                    Grammar Guide
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/podcast"
                    className="text-gray-400 hover:text-white"
                  >
                    Podcast
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-gray-800 text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Nihongo Task. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
