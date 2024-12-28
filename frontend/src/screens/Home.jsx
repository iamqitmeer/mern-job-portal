import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { NavLink } from "react-router";

import {
  Briefcase,
  MapPin,
  DollarSign,
  Clock,
  Search,
  FileText,
  Users,
  Building2,
  ChevronRight,
  Star,
  TrendingUp,
  Zap,
  ArrowRight,
  Rocket,
  Globe,
  Award,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-800">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-teal-500 to-blue-600 py-20 text-white dark:from-teal-600 dark:to-blue-700">
          <div className="absolute inset-0 z-0">
            <img
              src="/placeholder.svg?height=1080&width=1920&text=Modern+Workplace"
              alt="Hero background"
              layout="fill"
              objectFit="cover"
              className="opacity-20"
            />
          </div>
          <div className="container relative z-10 mx-auto text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-6xl lg:text-7xl">
              Discover Your{" "}
              <span className="text-yellow-300">Dream Career</span>
            </h1>
            <p className="mb-8 text-xl text-zinc-100 md:text-2xl">
              Connecting ambitious professionals with innovative companies
            </p>
            <div className="mx-auto flex max-w-4xl flex-col items-center justify-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
              <div className="relative w-full md:w-2/3">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-zinc-400" />
                <Input
                  type="text"
                  placeholder="Job title, keywords, or company"
                  className="w-full rounded-full bg-white py-6 pl-10 pr-4 text-lg text-zinc-900 placeholder-zinc-500 focus:ring-2 focus:ring-yellow-300 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-400"
                />
              </div>
              <Button
                size="lg"
                className="w-full rounded-full bg-yellow-400 text-lg font-semibold text-zinc-900 hover:bg-yellow-300 md:w-auto dark:bg-yellow-500 dark:text-white dark:hover:bg-yellow-400"
              >
                Find Jobs
              </Button>
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <Badge
                variant="secondary"
                className="text-sm bg-white/20 backdrop-blur-sm"
              >
                100,000+ Jobs
              </Badge>
              <Badge
                variant="secondary"
                className="text-sm bg-white/20 backdrop-blur-sm"
              >
                10,000+ Companies
              </Badge>
              <Badge
                variant="secondary"
                className="text-sm bg-white/20 backdrop-blur-sm"
              >
                50+ Categories
              </Badge>
            </div>
          </div>
        </section>

        {/* Featured Jobs Section */}
        <section className="py-20 bg-white dark:bg-zinc-900">
          <div className="container mx-auto">
            <h2 className="mb-2 text-center text-4xl font-bold text-zinc-900 dark:text-white">
              Featured Jobs
            </h2>
            <p className="mb-12 text-center text-xl text-zinc-600 dark:text-zinc-400">
              Explore our hand-picked opportunities
            </p>
            <Tabs defaultValue="all" className="mb-12">
              <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4">
                <TabsTrigger value="all">All Jobs</TabsTrigger>
                <TabsTrigger value="tech">Tech</TabsTrigger>
                <TabsTrigger value="marketing">Marketing</TabsTrigger>
                <TabsTrigger value="design">Design</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="mt-8">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      title: "Senior Software Engineer",
                      company: "TechCorp Inc.",
                      location: "San Francisco, CA",
                      salary: "$120,000 - $160,000",
                      image: "TC",
                    },
                    {
                      title: "Product Marketing Manager",
                      company: "GrowthLabs",
                      location: "New York, NY",
                      salary: "$90,000 - $120,000",
                      image: "GL",
                    },
                    {
                      title: "UX/UI Designer",
                      company: "DesignMasters",
                      location: "London, UK",
                      salary: "£60,000 - £80,000",
                      image: "DM",
                    },
                  ].map((job, index) => (
                    <Card
                      key={index}
                      className="group overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 dark:bg-zinc-800 dark:border-zinc-700"
                    >
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <Avatar className="h-12 w-12">
                            <AvatarImage
                              src={`/placeholder.svg?height=48&width=48&text=${job.image}`}
                            />
                            <AvatarFallback>{job.image}</AvatarFallback>
                          </Avatar>
                          <Badge
                            variant="secondary"
                            className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100"
                          >
                            New
                          </Badge>
                        </div>
                        <CardTitle className="mt-4 text-xl group-hover:text-teal-600 dark:text-white dark:group-hover:text-teal-400">
                          {job.title}
                        </CardTitle>
                        <CardDescription className="text-lg dark:text-zinc-400">
                          {job.company}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center space-x-2 text-sm text-zinc-500 dark:text-zinc-400">
                          <MapPin className="h-4 w-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="mt-2 flex items-center space-x-2 text-sm text-zinc-500 dark:text-zinc-400">
                          <DollarSign className="h-4 w-4" />
                          <span>{job.salary}</span>
                        </div>
                        <div className="mt-4 flex flex-wrap gap-2">
                          <Badge variant="outline">Full-time</Badge>
                          <Badge variant="outline">Remote</Badge>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full group-hover:bg-teal-600 group-hover:text-white transition-colors dark:bg-teal-600 dark:text-white dark:hover:bg-teal-500">
                          Apply Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              {/* Add similar TabsContent for other categories */}
            </Tabs>
            <div className="mt-12 text-center">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"
              >
                View All Jobs
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bg-gradient-to-b from-zinc-50 to-white py-20 dark:from-zinc-800 dark:to-zinc-900">
          <div className="container mx-auto">
            <h2 className="mb-2 text-center text-4xl font-bold text-zinc-900 dark:text-white">
              How It Works
            </h2>
            <p className="mb-16 text-center text-xl text-zinc-600 dark:text-zinc-400">
              Your journey to success starts here
            </p>
            <div className="grid gap-12 md:grid-cols-3">
              {[
                {
                  icon: FileText,
                  title: "Create Your Profile",
                  description:
                    "Sign up and showcase your skills and experience.",
                },
                {
                  icon: Search,
                  title: "Explore Opportunities",
                  description:
                    "Browse through our curated job listings and find your match.",
                },
                {
                  icon: Briefcase,
                  title: "Apply with Ease",
                  description:
                    "Submit applications with just a few clicks and track your progress.",
                },
              ].map((step, index) => (
                <div key={index} className="relative text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="rounded-full bg-teal-100 p-6 dark:bg-teal-900">
                      <step.icon className="h-12 w-12 text-teal-600 dark:text-teal-300" />
                    </div>
                  </div>
                  <h3 className="mb-4 text-2xl font-semibold text-zinc-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-lg text-zinc-600 dark:text-zinc-400">
                    {step.description}
                  </p>
                  {index < 2 && (
                    <ChevronRight className="absolute right-0 top-1/2 hidden h-12 w-12 -translate-y-1/2 text-teal-300 md:block dark:text-teal-700" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Categories Section */}
        <section className="bg-zinc-100 py-20 dark:bg-zinc-800">
          <div className="container mx-auto">
            <h2 className="mb-2 text-center text-4xl font-bold text-zinc-900 dark:text-white">
              Explore Job Categories
            </h2>
            <p className="mb-12 text-center text-xl text-zinc-600 dark:text-zinc-400">
              Find opportunities in your field of expertise
            </p>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[
                { icon: Building2, name: "Technology", count: "1000+" },
                { icon: Users, name: "Healthcare", count: "800+" },
                { icon: FileText, name: "Education", count: "600+" },
                { icon: DollarSign, name: "Finance", count: "750+" },
                { icon: TrendingUp, name: "Marketing", count: "500+" },
                { icon: Zap, name: "Design", count: "400+" },
                { icon: Users, name: "Sales", count: "900+" },
                { icon: Building2, name: "Engineering", count: "700+" },
              ].map((category, index) => (
                <Card
                  key={index}
                  className="group transition-all hover:bg-teal-50 hover:shadow-lg dark:bg-zinc-700 dark:hover:bg-zinc-600"
                >
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="rounded-full bg-teal-100 p-3 group-hover:bg-teal-200 dark:bg-teal-900 dark:group-hover:bg-teal-800">
                        <category.icon className="h-8 w-8 text-teal-600 dark:text-teal-300" />
                      </div>
                      <CardTitle className="text-xl group-hover:text-teal-600 dark:text-white dark:group-hover:text-teal-300">
                        {category.name}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-zinc-500 dark:text-zinc-400">
                      {category.count} jobs available
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="ghost"
                      className="w-full group-hover:bg-teal-100 group-hover:text-teal-700 dark:text-zinc-300 dark:group-hover:bg-teal-900 dark:group-hover:text-teal-100"
                    >
                      Explore Jobs
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-white py-20 dark:bg-zinc-900">
          <div className="container mx-auto">
            <h2 className="mb-2 text-center text-4xl font-bold text-zinc-900 dark:text-white">
              Success Stories
            </h2>
            <p className="mb-16 text-center text-xl text-zinc-600 dark:text-zinc-400">
              Hear from professionals who found their dream jobs
            </p>
            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "John Doe",
                  role: "Software Developer",
                  image: "JD",
                  company: "TechGiant Inc.",
                },
                {
                  name: "Jane Smith",
                  role: "Marketing Manager",
                  image: "JS",
                  company: "BrandBoost Co.",
                },
                {
                  name: "Alex Johnson",
                  role: "UX Designer",
                  image: "AJ",
                  company: "DesignWave Studios",
                },
              ].map((testimonial, index) => (
                <Card
                  key={index}
                  className="overflow-hidden transition-all hover:shadow-xl dark:bg-zinc-800 dark:border-zinc-700"
                >
                  <CardHeader className="bg-gradient-to-r from-teal-500 to-blue-500 text-white dark:from-teal-600 dark:to-blue-600">
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-16 w-16 border-2 border-white">
                        <AvatarImage
                          src={`/placeholder.svg?height=64&width=64&text=${testimonial.image}`}
                        />
                        <AvatarFallback>{testimonial.image}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-2xl">
                          {testimonial.name}
                        </CardTitle>
                        <CardDescription className="text-lg text-teal-100">
                          {testimonial.role}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="mt-6">
                    <p className="text-lg text-zinc-600 dark:text-zinc-300">
                      "JobPortal transformed my job search. I found my dream
                      role at {testimonial.company} within weeks. The platform's
                      user-friendly interface and tailored job recommendations
                      made all the difference!"
                    </p>
                  </CardContent>
                  <CardFooter>
                    <div className="flex items-center space-x-1 text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-6 w-6 fill-current" />
                      ))}
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* New Section: Job Seeker Resources */}
        <section className="bg-gradient-to-b from-zinc-50 to-white py-20 dark:from-zinc-800 dark:to-zinc-900">
          <div className="container mx-auto">
            <h2 className="mb-2 text-center text-4xl font-bold text-zinc-900 dark:text-white">
              Job Seeker Resources
            </h2>
            <p className="mb-12 text-center text-xl text-zinc-600 dark:text-zinc-400">
              Empower your job search with our expert resources
            </p>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: FileText,
                  title: "Resume Writing Tips",
                  description:
                    "Learn how to craft a compelling resume that stands out.",
                },
                {
                  icon: Users,
                  title: "Interview Preparation",
                  description:
                    "Get expert advice on acing your job interviews.",
                },
                {
                  icon: Rocket,
                  title: "Career Development",
                  description:
                    "Discover strategies for long-term career growth and success.",
                },
                {
                  icon: Globe,
                  title: "Remote Work Guide",
                  description:
                    "Navigate the world of remote work opportunities.",
                },
                {
                  icon: TrendingUp,
                  title: "Salary Negotiation",
                  description:
                    "Master the art of negotiating your compensation package.",
                },
                {
                  icon: Award,
                  title: "Personal Branding",
                  description:
                    "Build a strong personal brand to attract top employers.",
                },
              ].map((resource, index) => (
                <Card
                  key={index}
                  className="group transition-all hover:shadow-lg dark:bg-zinc-800 dark:border-zinc-700"
                >
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="rounded-full bg-teal-100 p-3 group-hover:bg-teal-200 dark:bg-teal-900 dark:group-hover:bg-teal-800">
                        <resource.icon className="h-8 w-8 text-teal-600 dark:text-teal-300" />
                      </div>
                      <CardTitle className="text-xl group-hover:text-teal-600 dark:text-white dark:group-hover:text-teal-300">
                        {resource.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      {resource.description}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="ghost"
                      className="w-full group-hover:bg-teal-100 group-hover:text-teal-700 dark:text-zinc-300 dark:group-hover:bg-teal-900 dark:group-hover:text-teal-100"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-gradient-to-r from-teal-600 to-blue-600 py-20 text-white dark:from-teal-700 dark:to-blue-700">
          <div className="container mx-auto text-center">
            <h2 className="mb-6 text-4xl font-bold">
              Ready to Elevate Your Career?
            </h2>
            <p className="mb-12 text-2xl text-teal-100">
              Join thousands of professionals who have found their perfect job
              through JobPortal
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="rounded-full bg-white text-teal-600 hover:bg-teal-100 text-lg font-semibold px-8 py-4 dark:bg-zinc-800 dark:text-teal-300 dark:hover:bg-zinc-700"
            >
              Create Your Profile
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
