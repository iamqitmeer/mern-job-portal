import { useState, useEffect } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import {
  BookOpen,
  FileText,
  Users,
  TrendingUp,
  Briefcase,
  HelpCircle,
  ChevronRight,
  Download,
  Eye,
  ThumbsUp,
  MessageCircle,
  Share2,
  Search,
  Filter,
  SlidersHorizontal,
  CalendarIcon,
  Clock,
  Tag,
  Bookmark,
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  Star,
  BarChart as BarChartIcon,
  PieChart,
} from "lucide-react";
import { BarChart, LineChart } from "recharts";

export default function ResourcesPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("popular");
  const [filterDate, setFilterDate] = useState();
  const [filterDifficulty, setFilterDifficulty] = useState([0, 100]);
  const [filterBookmarked, setFilterBookmarked] = useState(false);
  const [viewMode, setViewMode] = useState("grid");

  const careerGuides = [
    {
      id: 1,
      title: "Finding Your Dream Job",
      category: "career",
      image: "career-guide-1.jpg",
      views: 1500,
      likes: 230,
      comments: 45,
      difficulty: 60,
      date: "2023-05-15",
      duration: 25,
    },
    {
      id: 2,
      title: "Navigating Career Changes",
      category: "career",
      image: "career-guide-2.jpg",
      views: 1200,
      likes: 180,
      comments: 32,
      difficulty: 75,
      date: "2023-06-02",
      duration: 35,
    },
    {
      id: 3,
      title: "Mastering Salary Negotiations",
      category: "career",
      image: "career-guide-3.jpg",
      views: 2000,
      likes: 310,
      comments: 67,
      difficulty: 80,
      date: "2023-04-20",
      duration: 40,
    },
    {
      id: 4,
      title: "Building a Personal Brand",
      category: "career",
      image: "career-guide-4.jpg",
      views: 1800,
      likes: 275,
      comments: 53,
      difficulty: 65,
      date: "2023-05-28",
      duration: 30,
    },
  ];

  const resumeTips = [
    {
      id: 5,
      title: "Crafting an ATS-Friendly Resume",
      category: "resume",
      image: "resume-tip-1.jpg",
      views: 3000,
      likes: 450,
      comments: 89,
      difficulty: 70,
      date: "2023-05-10",
      duration: 20,
    },
    {
      id: 6,
      title: "Resume Dos and Don'ts",
      category: "resume",
      image: "resume-tip-2.jpg",
      views: 2500,
      likes: 380,
      comments: 71,
      difficulty: 50,
      date: "2023-06-05",
      duration: 15,
    },
    {
      id: 7,
      title: "Writing a Compelling Cover Letter",
      category: "resume",
      image: "resume-tip-3.jpg",
      views: 2200,
      likes: 340,
      comments: 62,
      difficulty: 65,
      date: "2023-04-25",
      duration: 25,
    },
    {
      id: 8,
      title: "Tailoring Your Resume for Different Industries",
      category: "resume",
      image: "resume-tip-4.jpg",
      views: 1900,
      likes: 290,
      comments: 55,
      difficulty: 75,
      date: "2023-05-30",
      duration: 30,
    },
  ];

  const interviewPrep = [
    {
      id: 9,
      title: "Common Interview Questions and Answers",
      category: "interview",
      image: "interview-prep-1.jpg",
      views: 5000,
      likes: 780,
      comments: 156,
      difficulty: 60,
      date: "2023-05-12",
      duration: 45,
    },
    {
      id: 10,
      title: "Body Language Tips for Interviews",
      category: "interview",
      image: "interview-prep-2.jpg",
      views: 3500,
      likes: 520,
      comments: 98,
      difficulty: 55,
      date: "2023-06-08",
      duration: 20,
    },
    {
      id: 11,
      title: "Mastering the STAR Method",
      category: "interview",
      image: "interview-prep-3.jpg",
      views: 4200,
      likes: 650,
      comments: 123,
      difficulty: 70,
      date: "2023-04-18",
      duration: 35,
    },
    {
      id: 12,
      title: "Acing Virtual Interviews",
      category: "interview",
      image: "interview-prep-4.jpg",
      views: 3800,
      likes: 590,
      comments: 112,
      difficulty: 65,
      date: "2023-05-25",
      duration: 30,
    },
  ];

  const industryInsights = [
    {
      id: 13,
      title: "Tech Industry Trends 2025",
      category: "industry",
      image: "industry-insight-1.jpg",
      views: 2800,
      likes: 420,
      comments: 87,
      difficulty: 80,
      date: "2023-05-20",
      duration: 40,
    },
    {
      id: 14,
      title: "The Future of Remote Work",
      category: "industry",
      image: "industry-insight-2.jpg",
      views: 3200,
      likes: 490,
      comments: 103,
      difficulty: 60,
      date: "2023-06-10",
      duration: 35,
    },
    {
      id: 15,
      title: "Emerging Jobs in Green Energy",
      category: "industry",
      image: "industry-insight-3.jpg",
      views: 2100,
      likes: 320,
      comments: 68,
      difficulty: 75,
      date: "2023-04-30",
      duration: 30,
    },
    {
      id: 16,
      title: "AI and the Job Market",
      category: "industry",
      image: "industry-insight-4.jpg",
      views: 3500,
      likes: 540,
      comments: 115,
      difficulty: 85,
      date: "2023-05-22",
      duration: 45,
    },
  ];

  const allResources = [
    ...careerGuides,
    ...resumeTips,
    ...interviewPrep,
    ...industryInsights,
  ];

  const filteredResources = allResources
    .filter(
      (resource) =>
        (activeTab === "all" || resource.category === activeTab) &&
        resource.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (!filterDate || new Date(resource.date) >= filterDate) &&
        resource.difficulty >= filterDifficulty[0] &&
        resource.difficulty <= filterDifficulty[1]
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "popular":
          return b.views - a.views;
        case "recent":
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case "difficulty-asc":
          return a.difficulty - b.difficulty;
        case "difficulty-desc":
          return b.difficulty - a.difficulty;
        default:
          return 0;
      }
    });

  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 dark:bg-zinc-900">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-zinc-900 text-white py-20">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Career Resources"
              width={1600}
              height={400}
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Career Resources
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
              Empower your career journey with our comprehensive guides, expert
              tips, and industry insights.
            </p>
            <div className="flex space-x-4">
              <Button size="lg">Explore Resources</Button>
              <Button size="lg" variant="outline">
                Get Personalized Advice
              </Button>
            </div>
          </div>
        </section>

        {/* Resource Navigation and Filters */}
        <section className="py-12 bg-white dark:bg-zinc-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <Tabs
                defaultValue="all"
                className="w-full md:w-auto"
                onValueChange={setActiveTab}
              >
                <TabsList className="grid w-full grid-cols-5">
                  <TabsTrigger value="all">All Resources</TabsTrigger>
                  <TabsTrigger value="career">Career Guides</TabsTrigger>
                  <TabsTrigger value="resume">Resume Tips</TabsTrigger>
                  <TabsTrigger value="interview">Interview Prep</TabsTrigger>
                  <TabsTrigger value="industry">Industry Insights</TabsTrigger>
                </TabsList>
              </Tabs>
              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <Button
                  variant="outline"
                  onClick={() =>
                    setViewMode(viewMode === "grid" ? "list" : "grid")
                  }
                >
                  {viewMode === "grid" ? (
                    <BarChartIcon className="w-4 h-4 mr-2" />
                  ) : (
                    <PieChart className="w-4 h-4 mr-2" />
                  )}
                  {viewMode === "grid" ? "List View" : "Grid View"}
                </Button>
                <Select onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="recent">Most Recent</SelectItem>
                    <SelectItem value="difficulty-asc">
                      Easiest First
                    </SelectItem>
                    <SelectItem value="difficulty-desc">
                      Hardest First
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex-grow">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400" />
                  <Input
                    type="text"
                    placeholder="Search resources..."
                    className="pl-10 bg-white dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">
                    <Filter className="w-4 h-4 mr-2" />
                    Filters
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">Published After</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !filterDate && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {filterDate
                              ? format(filterDate, "PPP")
                              : "Pick a date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={filterDate}
                            onSelect={setFilterDate}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div className="space-y-2">
                      <Label>Difficulty Range</Label>
                      <Slider
                        min={0}
                        max={100}
                        step={1}
                        value={filterDifficulty}
                        onValueChange={setFilterDifficulty}
                      />
                      <div className="flex justify-between text-sm text-zinc-500">
                        <span>Beginner</span>
                        <span>Advanced</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch
                        id="bookmark-filter"
                        checked={filterBookmarked}
                        onCheckedChange={setFilterBookmarked}
                      />
                      <Label htmlFor="bookmark-filter">Bookmarked only</Label>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>

            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredResources.map((resource) => (
                  <Card key={resource.id} className="overflow-hidden">
                    <img
                      src={`/placeholder.svg?height=200&width=400&text=${resource.image}`}
                      alt={resource.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <CardHeader>
                      <CardTitle className="text-lg">
                        {resource.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex space-x-4 text-sm text-zinc-500 dark:text-zinc-400">
                        <span className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" /> {resource.views}
                        </span>
                        <span className="flex items-center">
                          <ThumbsUp className="w-4 h-4 mr-1" /> {resource.likes}
                        </span>
                        <span className="flex items-center">
                          <MessageCircle className="w-4 h-4 mr-1" />{" "}
                          {resource.comments}
                        </span>
                      </div>
                      <div className="mt-2 flex items-center">
                        <Clock className="w-4 h-4 mr-1 text-zinc-500 dark:text-zinc-400" />
                        <span className="text-sm text-zinc-500 dark:text-zinc-400">
                          {resource.duration} min read
                        </span>
                      </div>
                      <div className="mt-2">
                        <Badge
                          variant={
                            resource.difficulty > 75
                              ? "destructive"
                              : resource.difficulty > 50
                              ? "default"
                              : "secondary"
                          }
                        >
                          {resource.difficulty}% Difficulty
                        </Badge>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm">
                        Read More
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Bookmark className="w-4 h-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredResources.map((resource) => (
                  <Card key={resource.id}>
                    <div className="flex items-center p-4">
                      <img
                        src={`/placeholder.svg?height=80&width=80&text=${resource.image}`}
                        alt={resource.title}
                        width={80}
                        height={80}
                        className="rounded-md mr-4"
                      />
                      <div className="flex-grow">
                        <CardTitle className="text-lg mb-2">
                          {resource.title}
                        </CardTitle>
                        <div className="flex space-x-4 text-sm text-zinc-500 dark:text-zinc-400">
                          <span className="flex items-center">
                            <Eye className="w-4 h-4 mr-1" /> {resource.views}
                          </span>
                          <span className="flex items-center">
                            <ThumbsUp className="w-4 h-4 mr-1" />{" "}
                            {resource.likes}
                          </span>
                          <span className="flex items-center">
                            <MessageCircle className="w-4 h-4 mr-1" />{" "}
                            {resource.comments}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />{" "}
                            {resource.duration} min read
                          </span>
                        </div>
                      </div>
                      <Badge
                        variant={
                          resource.difficulty > 75
                            ? "destructive"
                            : resource.difficulty > 50
                            ? "default"
                            : "secondary"
                        }
                      >
                        {resource.difficulty}% Difficulty
                      </Badge>
                      <Button variant="outline" size="sm" className="ml-4">
                        Read More
                      </Button>
                      <Button variant="ghost" size="sm" className="ml-2">
                        <Bookmark className="w-4 h-4" />
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Featured Resources */}
        <section className="py-16 bg-zinc-100 dark:bg-zinc-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Featured Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="w-6 h-6 mr-2 text-zinc-600 dark:text-zinc-400" />
                    Ultimate Job Search Guide
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                    A comprehensive guide to finding and landing your dream job
                    in today's competitive market.
                  </p>
                  <Badge>50+ pages</Badge>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <Download className="w-4 h-4 mr-2" /> Download PDF
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="w-6 h-6 mr-2 text-zinc-600 dark:text-zinc-400" />
                    Resume Templates
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                    Professional resume templates for various industries, ready
                    for you to customize.
                  </p>
                  <Badge>10 templates</Badge>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <Eye className="w-4 h-4 mr-2" /> Preview Templates
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="w-6 h-6 mr-2 text-zinc-600 dark:text-zinc-400" />
                    Interview Simulator
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                    Practice common interview questions with our AI-powered
                    interview simulator.
                  </p>
                  <Badge>100+ questions</Badge>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Start Practicing</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Career Development Tools */}
        <section className="py-16 bg-white dark:bg-zinc-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Career Development Tools
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: TrendingUp,
                  title: "Salary Calculator",
                  description:
                    "Compare salaries across industries and locations.",
                },
                {
                  icon: Briefcase,
                  title: "Job Fit Assessment",
                  description:
                    "Find roles that match your skills and interests.",
                },
                {
                  icon: Users,
                  title: "Networking Tips",
                  description:
                    "Learn how to build and leverage your professional network.",
                },
                {
                  icon: BookOpen,
                  title: "Skill Development",
                  description:
                    "Courses and resources to enhance your professional skills.",
                },
              ].map((tool, index) => (
                <Card key={index}>
                  <CardHeader>
                    <tool.icon className="w-12 h-12 text-zinc-600 dark:text-zinc-400 mb-2" />
                    <CardTitle>{tool.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      {tool.description}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Explore <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Employer Resources */}
        <section className="py-16 bg-zinc-100 dark:bg-zinc-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Employer Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Hiring Best Practices</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {[
                      "Writing effective job descriptions",
                      "Conducting structured interviews",
                      "Implementing fair hiring processes",
                      "Onboarding new employees successfully",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center">
                        <ChevronRight className="w-4 h-4 mr-2 text-zinc-600 dark:text-zinc-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Download Hiring Guide</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Talent Retention Strategies</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {[
                      "Creating a positive work culture",
                      "Implementing effective feedback systems",
                      "Developing career growth opportunities",
                      "Offering competitive benefits packages",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center">
                        <ChevronRight className="w-4 h-4 mr-2 text-zinc-600 dark:text-zinc-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Get Retention Toolkit</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Resource Usage Analytics */}
        <section className="py-16 bg-white dark:bg-zinc-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Resource Usage Analytics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Most Popular Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={[
                      { name: "Career Guides", value: 35 },
                      { name: "Resume Tips", value: 25 },
                      { name: "Interview Prep", value: 30 },
                      { name: "Industry Insights", value: 10 },
                    ]}
                    index="name"
                    categories={["value"]}
                    colors={["zinc"]}
                    valueFormatter={(value) => `${value}%`}
                    className="h-[300px]"
                  />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>User Engagement Over Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <LineChart
                    data={[
                      { date: "Jan", views: 1000, downloads: 200 },
                      { date: "Feb", views: 1500, downloads: 300 },
                      { date: "Mar", views: 2000, downloads: 400 },
                      { date: "Apr", views: 2500, downloads: 500 },
                      { date: "May", views: 3000, downloads: 600 },
                      { date: "Jun", views: 3500, downloads: 700 },
                    ]}
                    index="date"
                    categories={["views", "downloads"]}
                    colors={["zinc", "blue"]}
                    valueFormatter={(value) => `${value}`}
                    className="h-[300px]"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-zinc-100 dark:bg-zinc-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <Accordion
              type="single"
              collapsible
              className="w-full max-w-3xl mx-auto"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  How do I create an effective resume?
                </AccordionTrigger>
                <AccordionContent>
                  To create an effective resume, focus on highlighting your
                  relevant skills and experiences, use a clean and professional
                  format, tailor it to the job you're applying for, and keep it
                  concise (ideally one to two pages). Don't forget to proofread
                  for any errors.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  What should I wear to a job interview?
                </AccordionTrigger>
                <AccordionContent>
                  For most professional job interviews, business attire is
                  appropriate. This typically means a suit for men and a suit or
                  professional dress for women. However, the specific dress code
                  can vary depending on the company culture, so it's a good idea
                  to research the company beforehand.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  How can I prepare for common interview questions?
                </AccordionTrigger>
                <AccordionContent>
                  To prepare for common interview questions, research the
                  company and position, practice your responses to typical
                  questions like "Tell me about yourself" and "Why do you want
                  this job?", prepare examples of your achievements, and
                  consider using the STAR method (Situation, Task, Action,
                  Result) to structure your answers.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  What are some effective networking strategies?
                </AccordionTrigger>
                <AccordionContent>
                  Effective networking strategies include attending industry
                  events and conferences, joining professional associations,
                  utilizing social media platforms like LinkedIn, reaching out
                  to alumni from your school, and setting up informational
                  interviews. Remember to focus on building genuine
                  relationships rather than just asking for favors.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Progress Tracker */}
        <section className="py-16 bg-white dark:bg-zinc-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Your Learning Progress
            </h2>
            <Card className="max-w-md mx-auto">
              <CardHeader>
                <CardTitle>Career Development Journey</CardTitle>
                <CardDescription>
                  Track your progress through our resources
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Progress</span>
                    <span>{progress}%</span>
                  </div>
                  <Progress value={progress} className="w-full" />
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <span>Resources Completed</span>
                    <span>8/20</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Time Spent Learning</span>
                    <span>12h 30m</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Certificates Earned</span>
                    <span>2</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">View Detailed Progress</Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-zinc-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Need Personalized Career Advice?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Our career experts are here to help you navigate your professional
              journey. Get tailored advice to achieve your career goals.
            </p>
            <Button
              size="lg"
              className="bg-white text-zinc-900 hover:bg-zinc-100"
            >
              Schedule a Consultation
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
