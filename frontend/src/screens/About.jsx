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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Users,
  Briefcase,
  Globe,
  Award,
  ArrowRight,
  ChevronRight,
  Rocket,
  Target,
  Zap,
  Heart,
  Lightbulb,
  Smile,
  Coffee,
  BookOpen,
  Compass,
  Feather,
  MessageCircle,
  Headphones,
  BarChart as BarChartIcon,
  PieChart,
  TrendingUp,
  DollarSign,
  Percent,
  Star,
  CheckCircle,
  Clock,
  Laptop,
  Smartphone,
  Building,
  GraduationCap,
  Handshake,
  Layers,
  ShieldCheck,
  RefreshCwIcon as Refresh,
  Cpu,
  Cloud,
  Database,
  Shield,
} from "lucide-react";
import {
  LineChart,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Line,
  Bar,
} from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const userGrowthData = [
  { year: 2010, users: 0.1 },
  { year: 2011, users: 0.5 },
  { year: 2012, users: 1 },
  { year: 2013, users: 2 },
  { year: 2014, users: 3.5 },
  { year: 2015, users: 5 },
  { year: 2016, users: 8 },
  { year: 2017, users: 12 },
  { year: 2018, users: 18 },
  { year: 2019, users: 25 },
  { year: 2020, users: 35 },
  { year: 2021, users: 42 },
  { year: 2022, users: 48 },
  { year: 2023, users: 50 },
];

const jobCategoriesData = [
  { category: "Technology", jobs: 500000 },
  { category: "Healthcare", jobs: 400000 },
  { category: "Finance", jobs: 350000 },
  { category: "Education", jobs: 300000 },
  { category: "Marketing", jobs: 250000 },
  { category: "Sales", jobs: 200000 },
  { category: "Design", jobs: 150000 },
  { category: "Engineering", jobs: 100000 },
];

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-800">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="xl:p-12 relative overflow-hidden bg-gradient-to-r from-zinc-800 to-zinc-900 py-32 text-white">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="About Us background"
              layout="fill"
              objectFit="cover"
              className="opacity-10"
            />
          </div>
          <div className="container relative z-10 mx-auto text-center">
            <Badge className="mb-4 bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100">
              Est. 2010
            </Badge>
            <h1 className="mb-6 text-5xl font-bold md:text-7xl lg:text-8xl">
              Shaping the Future of <span className="text-teal-400">Work</span>
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-xl text-zinc-300 md:text-2xl">
              At JobPortal, we're not just connecting talent with opportunity –
              we're revolutionizing the way the world works, one career at a
              time.
            </p>
            <Button
              size="lg"
              className="rounded-full bg-teal-500 text-white hover:bg-teal-600 dark:bg-teal-600 dark:hover:bg-teal-700"
            >
              Explore Our Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* Key Statistics */}
        <section className="xl:p-12 py-24 bg-white dark:bg-zinc-900">
          <div className="container mx-auto">
            <h2 className="mb-12 text-center text-4xl font-bold text-zinc-900 dark:text-white">
              Our Global Impact
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Users,
                  title: "50M+",
                  description: "Active Users",
                  color: "text-blue-500",
                },
                {
                  icon: Briefcase,
                  title: "2M+",
                  description: "Jobs Posted Monthly",
                  color: "text-green-500",
                },
                {
                  icon: Globe,
                  title: "190+",
                  description: "Countries Served",
                  color: "text-purple-500",
                },
                {
                  icon: Award,
                  title: "98%",
                  description: "Satisfaction Rate",
                  color: "text-yellow-500",
                },
              ].map((stat, index) => (
                <Card
                  key={index}
                  className="text-center dark:bg-zinc-800 dark:border-zinc-700 hover:shadow-lg transition-shadow duration-300"
                >
                  <CardHeader>
                    <div
                      className={`mx-auto rounded-full bg-zinc-100 p-4 dark:bg-zinc-700 ${stat.color}`}
                    >
                      <stat.icon className="h-10 w-10" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="text-4xl font-bold text-zinc-900 dark:text-white mb-2">
                      {stat.title}
                    </CardTitle>
                    <CardDescription className="text-lg text-zinc-600 dark:text-zinc-400">
                      {stat.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mission and Vision */}
        <section className="xl:p-12 py-24 bg-zinc-100 dark:bg-zinc-800">
          <div className="container mx-auto">
            <div className="grid gap-16 md:grid-cols-2">
              <div>
                <h2 className="mb-6 text-4xl font-bold text-zinc-900 dark:text-white">
                  Our Mission
                </h2>
                <p className="mb-8 text-xl text-zinc-600 dark:text-zinc-400">
                  To empower individuals and businesses by creating a platform
                  that seamlessly connects talent with opportunity, fostering
                  growth, innovation, and success in the global job market.
                </p>
                <ul className="space-y-4">
                  {[
                    {
                      icon: Target,
                      text: "Connect millions with their dream jobs",
                    },
                    {
                      icon: Zap,
                      text: "Streamline the hiring process for businesses",
                    },
                    {
                      icon: Heart,
                      text: "Promote diversity and inclusion in the workplace",
                    },
                    {
                      icon: Globe,
                      text: "Bridge geographical barriers in employment",
                    },
                    {
                      icon: Rocket,
                      text: "Accelerate career growth and development",
                    },
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="rounded-full bg-teal-100 p-2 dark:bg-teal-900">
                        <item.icon className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                      </div>
                      <span className="text-lg text-zinc-700 dark:text-zinc-300">
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-4xl font-bold text-zinc-900 dark:text-white">
                  Our Vision
                </h2>
                <p className="mb-8 text-xl text-zinc-600 dark:text-zinc-400">
                  To be the world's leading platform for career development and
                  talent acquisition, driving economic growth and shaping the
                  future of work through technology and innovation.
                </p>
                <div className="relative h-96 overflow-hidden rounded-lg shadow-xl">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1677529494234-5d797511f539?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Our Vision"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="mb-2 text-3xl font-bold text-white">
                      Shaping Tomorrow
                    </h3>
                    <p className="text-xl text-zinc-200">
                      Building a future where every individual can thrive in
                      their career
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Timeline */}
        <section className="xl:p-12 py-24 bg-white dark:bg-zinc-900">
          <div className="container mx-auto">
            <h2 className="mb-12 text-center text-4xl font-bold text-zinc-900 dark:text-white">
              Our Journey
            </h2>
            <div className="relative">
              <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 transform bg-zinc-200 dark:bg-zinc-700"></div>
              {[
                {
                  year: "2010",
                  title: "JobPortal Founded",
                  description:
                    "Started with a vision to revolutionize job searching",
                  icon: Rocket,
                },
                {
                  year: "2013",
                  title: "1 Million Users",
                  description:
                    "Reached our first major milestone in user growth",
                  icon: Users,
                },
                {
                  year: "2015",
                  title: "Global Expansion",
                  description: "Launched operations in 50+ countries",
                  icon: Globe,
                },
                {
                  year: "2018",
                  title: "AI Integration",
                  description: "Introduced AI-powered job matching technology",
                  icon: Cpu,
                },
                {
                  year: "2020",
                  title: "Remote Work Pioneer",
                  description:
                    "Led the shift to remote work during global challenges",
                  icon: Laptop,
                },
                {
                  year: "2023",
                  title: "50 Million Users",
                  description:
                    "Celebrating our global community of job seekers and employers",
                  icon: Award,
                },
              ].map((event, index) => (
                <div
                  key={index}
                  className={`relative mb-12 ${
                    index % 2 === 0 ? "left-timeline" : "right-timeline"
                  }`}
                >
                  <div
                    className={`flex items-center ${
                      index % 2 === 0 ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`w-5/12 ${
                        index % 2 === 0 ? "text-right" : "text-left"
                      }`}
                    >
                      <div className="bg-zinc-100 p-6 rounded-lg shadow-md dark:bg-zinc-800 hover:shadow-xl transition-shadow duration-300">
                        <span className="text-teal-500 font-bold text-xl">
                          {event.year}
                        </span>
                        <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mt-2">
                          {event.title}
                        </h3>
                        <p className="text-zinc-600 dark:text-zinc-400 mt-2">
                          {event.description}
                        </p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 transform">
                      <div className="rounded-full bg-teal-500 p-2 shadow-lg">
                        <event.icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* User Growth Chart */}
        <section className="xl:p-12 py-24 bg-zinc-100 dark:bg-zinc-800">
          <div className="container mx-auto">
            <h2 className="mb-12 text-center text-4xl font-bold text-zinc-900 dark:text-white">
              Our Exponential Growth
            </h2>
            <Card className="w-full max-w-4xl mx-auto dark:bg-zinc-900">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-zinc-900 dark:text-white">
                  User Growth Over Time
                </CardTitle>
                <CardDescription>
                  Millions of users from 2010 to 2023
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    users: {
                      label: "Users (Millions)",
                      color: "hsl(var(--chart-1))",
                    },
                  }}
                  className="h-[400px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={userGrowthData}>
                      <XAxis dataKey="year" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Line
                        type="monotone"
                        dataKey="users"
                        stroke="var(--color-users)"
                        strokeWidth={2}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Our Values */}
        <section className="xl:p-12 py-24 bg-white dark:bg-zinc-900">
          <div className="container mx-auto">
            <h2 className="mb-12 text-center text-4xl font-bold text-zinc-900 dark:text-white">
              Our Core Values
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Lightbulb,
                  title: "Innovation",
                  description:
                    "Constantly pushing boundaries to improve the job search experience",
                },
                {
                  icon: Heart,
                  title: "Empathy",
                  description:
                    "Understanding and addressing the needs of job seekers and employers",
                },
                {
                  icon: Target,
                  title: "Impact",
                  description:
                    "Striving to make a meaningful difference in people's careers and businesses",
                },
                {
                  icon: Users,
                  title: "Diversity",
                  description:
                    "Embracing and promoting diversity in the workplace",
                },
                {
                  icon: Zap,
                  title: "Efficiency",
                  description:
                    "Streamlining processes to save time for both job seekers and employers",
                },
                {
                  icon: Smile,
                  title: "User-Centric",
                  description:
                    "Putting our users' needs and experiences at the forefront of everything we do",
                },
              ].map((value, index) => (
                <Card
                  key={index}
                  className="dark:bg-zinc-800 dark:border-zinc-700 hover:shadow-lg transition-shadow duration-300"
                >
                  <CardHeader>
                    <div className="mb-4 rounded-full bg-teal-100 p-3 w-12 h-12 flex items-center justify-center dark:bg-teal-900">
                      <value.icon className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-zinc-900 dark:text-white">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Job Categories Chart */}
        <section className="xl:p-12 py-24 bg-zinc-100 dark:bg-zinc-800">
          <div className="container mx-auto">
            <h2 className="mb-12 text-center text-4xl font-bold text-zinc-900 dark:text-white">
              Job Categories Distribution
            </h2>
            <Card className="w-full max-w-4xl mx-auto dark:bg-zinc-900">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-zinc-900 dark:text-white">
                  Jobs by Category
                </CardTitle>
                <CardDescription>
                  Number of jobs available in each category
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    jobs: {
                      label: "Number of Jobs",
                      color: "hsl(var(--chart-1))",
                    },
                  }}
                  className="h-[400px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={jobCategoriesData} layout="vertical">
                      <XAxis type="number" />
                      <YAxis dataKey="category" type="category" width={100} />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="jobs" fill="var(--color-jobs)" />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Meet Our Team */}
        <section className="xl:p-12 py-24 bg-white dark:bg-zinc-900">
          <div className="container mx-auto">
            <h2 className="mb-12 text-center text-4xl font-bold text-zinc-900 dark:text-white">
              Meet Our Leadership
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Sarah Johnson",
                  role: "CEO & Co-founder",
                  image: "SJ",
                  quote:
                    "Revolutionizing the way people find their dream careers",
                  image:
                    "https://images.unsplash.com/photo-1563237023-b1e970526dcb?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                  name: "Michael Chen",
                  role: "CTO",
                  image: "MC",
                  quote:
                    "Leveraging technology to create seamless job-matching experiences",
                  image:
                    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                  name: "Emily Rodriguez",
                  role: "Head of Product",
                  image: "ER",
                  quote:
                    "Designing intuitive solutions for complex career challenges",
                  image:
                    "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                  name: "David Kim",
                  role: "Head of Marketing",
                  image: "DK",
                  quote: "Connecting millions to opportunities that matter",
                  image:
                    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                  name: "Olivia Patel",
                  role: "Head of Customer Success",
                  image: "OP",
                  quote: "Ensuring every user interaction exceeds expectations",
                  image:
                    "https://images.unsplash.com/photo-1609010697446-11f2155278f0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                  name: "Alex Thompson",
                  role: "Head of HR",
                  image: "AT",
                  quote: "Building a culture of innovation and inclusivity",
                  image:
                    "https://images.unsplash.com/photo-1615702669705-0d3002c6801c?q=80&w=1321&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
              ].map((member, index) => (
                <Card
                key={index}
                className="overflow-hidden dark:bg-zinc-800 dark:border-zinc-700 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative w-full h-[300px] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-zinc-900 dark:text-white">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-zinc-600 dark:text-zinc-400">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-700 dark:text-zinc-300 italic">
                    "{member.quote}"
                  </p>
                </CardContent>
              </Card>
              
              ))}
            </div>
          </div>
        </section>

        {/* Our Technology Stack */}
        <section className="xl:p-12 py-24 bg-zinc-100 dark:bg-zinc-800">
          <div className="container mx-auto">
            <h2 className="mb-12 text-center text-4xl font-bold text-zinc-900 dark:text-white">
              Our Technology Stack
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Cpu,
                  title: "AI-Powered Matching",
                  description:
                    "Advanced algorithms for precise job-candidate matching",
                },
                {
                  icon: Cloud,
                  title: "Cloud Infrastructure",
                  description: "Scalable and reliable cloud-based architecture",
                },
                {
                  icon: Shield,
                  title: "Data Security",
                  description:
                    "State-of-the-art encryption and privacy measures",
                },
                {
                  icon: Smartphone,
                  title: "Mobile-First Design",
                  description: "Optimized experience across all devices",
                },
                {
                  icon: Database,
                  title: "Big Data Analytics",
                  description:
                    "Insights-driven decision making and trend analysis",
                },
                {
                  icon: Refresh,
                  title: "Real-Time Updates",
                  description: "Instant notifications and live job postings",
                },
              ].map((tech, index) => (
                <Card
                  key={index}
                  className="dark:bg-zinc-900 dark:border-zinc-700 hover:shadow-lg transition-shadow duration-300"
                >
                  <CardHeader>
                    <div className="mb-4 rounded-full bg-blue-100 p-3 w-12 h-12 flex items-center justify-center dark:bg-blue-900">
                      <tech.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <CardTitle className="text-xl font-bold text-zinc-900 dark:text-white">
                      {tech.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      {tech.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Culture */}
        <section className="xl:p-12 py-24 bg-white dark:bg-zinc-900">
          <div className="container mx-auto">
            <h2 className="mb-12 text-center text-4xl font-bold text-zinc-900 dark:text-white">
              Life at JobPortal
            </h2>
            <Tabs defaultValue="work" className="mx-auto max-w-3xl">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="work">Work Environment</TabsTrigger>
                <TabsTrigger value="growth">Growth Opportunities</TabsTrigger>
                <TabsTrigger value="perks">Perks & Benefits</TabsTrigger>
              </TabsList>
              <TabsContent value="work" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Collaborative Work Environment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Coffee className="mr-2 h-5 w-5 text-teal-500" />
                        <span>Open-concept office with cozy break areas</span>
                      </li>
                      <li className="flex items-center">
                        <MessageCircle className="mr-2 h-5 w-5 text-teal-500" />
                        <span>Regular team-building activities and events</span>
                      </li>
                      <li className="flex items-center">
                        <Zap className="mr-2 h-5 w-5 text-teal-500" />
                        <span>
                          Cross-functional projects to foster innovation
                        </span>
                      </li>
                      <li className="flex items-center">
                        <Users className="mr-2 h-5 w-5 text-teal-500" />
                        <span>Diverse and inclusive work culture</span>
                      </li>
                      <li className="flex items-center">
                        <Laptop className="mr-2 h-5 w-5 text-teal-500" />
                        <span>Flexible remote work options</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="growth" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Continuous Learning & Development</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <BookOpen className="mr-2 h-5 w-5 text-teal-500" />
                        <span>
                          Learning stipend for courses and conferences
                        </span>
                      </li>
                      <li className="flex items-center">
                        <Compass className="mr-2 h-5 w-5 text-teal-500" />
                        <span>Mentorship programs for career guidance</span>
                      </li>
                      <li className="flex items-center">
                        <Target className="mr-2 h-5 w-5 text-teal-500" />
                        <span>Clear career progression paths</span>
                      </li>
                      <li className="flex items-center">
                        <GraduationCap className="mr-2 h-5 w-5 text-teal-500" />
                        <span>
                          Internal workshops and skill-sharing sessions
                        </span>
                      </li>
                      <li className="flex items-center">
                        <Rocket className="mr-2 h-5 w-5 text-teal-500" />
                        <span>Leadership development programs</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="perks" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Comprehensive Benefits Package</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Heart className="mr-2 h-5 w-5 text-teal-500" />
                        <span>Competitive health and wellness benefits</span>
                      </li>
                      <li className="flex items-center">
                        <Feather className="mr-2 h-5 w-5 text-teal-500" />
                        <span>Flexible work arrangements</span>
                      </li>
                      <li className="flex items-center">
                        <Coffee className="mr-2 h-5 w-5 text-teal-500" />
                        <span>Generous paid time off and parental leave</span>
                      </li>
                      <li className="flex items-center">
                        <DollarSign className="mr-2 h-5 w-5 text-teal-500" />
                        <span>Competitive salary and equity packages</span>
                      </li>
                      <li className="flex items-center">
                        <Smile className="mr-2 h-5 w-5 text-teal-500" />
                        <span>
                          Employee assistance programs and mental health support
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Our Impact */}
        <section className="xl:p-12 py-24 bg-zinc-100 dark:bg-zinc-800">
          <div className="container mx-auto">
            <h2 className="mb-12 text-center text-4xl font-bold text-zinc-900 dark:text-white">
              Our Impact
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="dark:bg-zinc-900 dark:border-zinc-700 hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="mb-4 rounded-full bg-green-100 p-3 w-12 h-12 flex items-center justify-center dark:bg-green-900">
                    <BarChartIcon className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-zinc-900 dark:text-white">
                    Economic Growth
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                    Driving economic growth by connecting talent with
                    opportunity.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-green-600 dark:text-green-400">
                      $50B+
                    </span>
                    <span className="text-zinc-500 dark:text-zinc-400">
                      Annual economic impact
                    </span>
                  </div>
                </CardContent>
              </Card>
              <Card className="dark:bg-zinc-900 dark:border-zinc-700 hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="mb-4 rounded-full bg-blue-100 p-3 w-12 h-12 flex items-center justify-center dark:bg-blue-900">
                    <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-zinc-900 dark:text-white">
                    Career Transformations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                    Helping individuals find fulfilling careers and advance
                    professionally.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                      10M+
                    </span>
                    <span className="text-zinc-500 dark:text-zinc-400">
                      Careers launched
                    </span>
                  </div>
                </CardContent>
              </Card>
              <Card className="dark:bg-zinc-900 dark:border-zinc-700 hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="mb-4 rounded-full bg-purple-100 p-3 w-12 h-12 flex items-center justify-center dark:bg-purple-900">
                    <Globe className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-zinc-900 dark:text-white">
                    Global Reach
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                    Connecting talent and opportunities across borders.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                      190+
                    </span>
                    <span className="text-zinc-500 dark:text-zinc-400">
                      Countries served
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="xl:p-12 py-24 bg-white dark:bg-zinc-900">
          <div className="container mx-auto">
            <h2 className="mb-12 text-center text-4xl font-bold text-zinc-900 dark:text-white">
              What People Say
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Alex Chen",
                  role: "Software Engineer",
                  company: "TechCorp",
                  quote:
                    "JobPortal helped me land my dream job at a top tech company. The AI-powered job matching is incredibly accurate!",
                },
                {
                  name: "Sophia Rodriguez",
                  role: "Marketing Manager",
                  company: "CreativeMinds",
                  quote:
                    "As an employer, JobPortal has revolutionized our hiring process. We've found amazing talent quickly and efficiently.",
                },
                {
                  name: "James Thompson",
                  role: "Recent Graduate",
                  company: "University X",
                  quote:
                    "The career resources and guidance on JobPortal were invaluable in kickstarting my professional journey.",
                },
                {
                  name: "Emily Watson",
                  role: "HR Director",
                  company: "Global Innovations",
                  quote:
                    "JobPortal's analytics tools have given us unprecedented insights into hiring trends and candidate preferences.",
                },
                {
                  name: "Michael Lee",
                  role: "Freelance Designer",
                  company: "Self-employed",
                  quote:
                    "The platform's support for freelancers and remote workers has opened up a world of opportunities for me.",
                },
                {
                  name: "Sarah Johnson",
                  role: "Career Changer",
                  company: "FinTech Solutions",
                  quote:
                    "JobPortal's career transition resources helped me successfully pivot from marketing to data science.",
                },
              ].map((testimonial, index) => (
                <Card
                  key={index}
                  className="dark:bg-zinc-800 dark:border-zinc-700 hover:shadow-xl transition-shadow duration-300"
                >
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage
                          src={`/placeholder.svg?height=40&width=40&text=${testimonial.name[0]}`}
                        />
                        <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg font-semibold text-zinc-900 dark:text-white">
                          {testimonial.name}
                        </CardTitle>
                        <CardDescription className="text-zinc-600 dark:text-zinc-400">
                          {testimonial.role} at {testimonial.company}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zinc-700 dark:text-zinc-300 italic">
                      "{testimonial.quote}"
                    </p>
                  </CardContent>
                  <CardFooter>
                    <div className="flex items-center space-x-1 text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="xl:p-12 py-24 bg-zinc-100 dark:bg-zinc-800">
          <div className="container mx-auto">
            <h2 className="mb-12 text-center text-4xl font-bold text-zinc-900 dark:text-white">
              Frequently Asked Questions
            </h2>
            <Accordion
              type="single"
              collapsible
              className="w-full max-w-3xl mx-auto"
            >
              {[
                {
                  question: "How does JobPortal's AI matching work?",
                  answer:
                    "Our AI-powered matching system analyzes job seekers' skills, experience, and preferences alongside employers' requirements to create highly accurate job recommendations and candidate matches.",
                },
                {
                  question: "Is JobPortal available worldwide?",
                  answer:
                    "Yes, JobPortal is available in over 190 countries, supporting multiple languages and local job markets.",
                },
                {
                  question:
                    "How does JobPortal ensure data privacy and security?",
                  answer:
                    "We employ state-of-the-art encryption, regular security audits, and strict data handling policies to ensure the utmost protection of our users' information.",
                },
                {
                  question:
                    "What resources does JobPortal offer for career development?",
                  answer:
                    "JobPortal provides a wealth of resources including career guides, skill assessments, resume builders, interview preparation tools, and personalized learning recommendations.",
                },
                {
                  question:
                    "How can employers use JobPortal to improve their hiring process?",
                  answer:
                    "Employers can leverage our AI-powered candidate matching, applicant tracking system, employer branding tools, and analytics dashboard to streamline and optimize their hiring process.",
                },
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-zinc-900 dark:text-white">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-zinc-600 dark:text-zinc-400">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Join Our Team */}
        <section className="xl:p-12 py-24 bg-gradient-to-r from-zinc-800 to-zinc-900 text-white">
          <div className="container mx-auto text-center">
            <h2 className="mb-6 text-4xl font-bold">Join Our Mission</h2>
            <p className="mb-8 text-xl text-zinc-300 max-w-3xl mx-auto">
              We're always looking for passionate individuals to join our team
              and help shape the future of work. Explore exciting career
              opportunities at JobPortal and be part of our journey.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="rounded-full bg-teal-500 text-white hover:bg-teal-600 text-lg font-semibold px-8 py-4"
            >
              View Open Positions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
