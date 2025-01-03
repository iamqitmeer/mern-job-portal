import { useState } from "react";
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
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { BarChart, LineChart, PieChart } from "recharts";
import {
  Search,
  MapPin,
  Building,
  Users,
  Briefcase,
  DollarSign,
  Star,
  TrendingUp,
  Filter,
  ChevronDown,
  ChevronRight,
  Globe,
  Clock,
  CalendarIcon,
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  Zap,
  Award,
  Heart,
  Share2,
  ExternalLink,
  BarChartIcon,
  PieChartIcon,
} from "lucide-react";

// Mock data for companies
const companies = [
  {
    id: 1,
    name: "TechCorp Inc.",
    logo: "TC",
    industry: "Technology",
    size: "1000-5000",
    location: "San Francisco, CA",
    founded: 2005,
    website: "https://techcorp.com",
    description: "Leading innovator in AI and machine learning solutions.",
    openPositions: 25,
    rating: 4.5,
    reviews: 1200,
    benefits: [
      "Health Insurance",
      "401(k)",
      "Remote Work",
      "Professional Development",
    ],
    culture: ["Innovative", "Fast-paced", "Collaborative"],
    growthRate: 15,
    revenueRange: "$100M - $500M",
    socialResponsibility: "Carbon Neutral by 2025",
    diversity: {
      gender: { male: 60, female: 40 },
      ethnicity: { white: 50, asian: 30, hispanic: 10, black: 10 },
    },
  },
  {
    id: 2,
    name: "GreenEnergy Solutions",
    logo: "GE",
    industry: "Renewable Energy",
    size: "500-1000",
    location: "Austin, TX",
    founded: 2010,
    website: "https://greenenergy.com",
    description:
      "Pioneering sustainable energy solutions for a greener future.",
    openPositions: 15,
    rating: 4.2,
    reviews: 800,
    benefits: [
      "Health Insurance",
      "Stock Options",
      "Flexible Hours",
      "Gym Membership",
    ],
    culture: ["Eco-friendly", "Mission-driven", "Innovative"],
    growthRate: 20,
    revenueRange: "$50M - $100M",
    socialResponsibility: "100% Renewable Energy Use",
    diversity: {
      gender: { male: 55, female: 45 },
      ethnicity: { white: 60, asian: 20, hispanic: 15, black: 5 },
    },
  },
  {
    id: 3,
    name: "FinTech Innovations",
    logo: "FI",
    industry: "Financial Technology",
    size: "100-500",
    location: "New York, NY",
    founded: 2015,
    website: "https://fintechinnovations.com",
    description:
      "Revolutionizing financial services through cutting-edge technology.",
    openPositions: 10,
    rating: 4.0,
    reviews: 500,
    benefits: [
      "Health Insurance",
      "Performance Bonuses",
      "Flexible Work Hours",
      "Professional Development",
    ],
    culture: ["Fast-paced", "Innovative", "Results-oriented"],
    growthRate: 30,
    revenueRange: "$10M - $50M",
    socialResponsibility: "Financial Literacy Programs",
    diversity: {
      gender: { male: 65, female: 35 },
      ethnicity: { white: 55, asian: 25, hispanic: 10, black: 10 },
    },
  },
  // Add more company data here...
];

export default function Companies() {
  const [searchTerm, setSearchTerm] = useState("");
  const [industryFilter, setIndustryFilter] = useState("All");
  const [sizeFilter, setSizeFilter] = useState("All");
  const [locationFilter, setLocationFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);
  const [sortBy, setSortBy] = useState("relevance");
  const [viewMode, setViewMode] = useState("grid");

  const filteredCompanies = companies
    .filter(
      (company) =>
        company.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (industryFilter === "All" || company.industry === industryFilter) &&
        (sizeFilter === "All" || company.size === sizeFilter) &&
        company.location.toLowerCase().includes(locationFilter.toLowerCase()) &&
        company.rating >= ratingFilter
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating;
        case "openPositions":
          return b.openPositions - a.openPositions;
        case "founded":
          return b.founded - a.founded;
        default:
          return 0;
      }
    });

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 dark:bg-zinc-900">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-zinc-900 text-white py-20">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Explore Companies"
              width={1600}
              height={400}
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Explore Top Companies
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
              Discover your next career opportunity at industry-leading
              companies. Find the perfect fit for your skills and aspirations.
            </p>
            <div className="flex space-x-4">
              <Button size="lg">Browse Companies</Button>
              <Button size="lg" variant="outline">
                Company Reviews
              </Button>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-white dark:bg-zinc-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <div className="w-full md:w-1/2 mb-4 md:mb-0">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400" />
                  <Input
                    type="text"
                    placeholder="Search companies..."
                    className="pl-10 bg-white dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  onClick={() =>
                    setViewMode(viewMode === "grid" ? "list" : "grid")
                  }
                >
                  {viewMode === "grid" ? (
                    <BarChartIcon className="w-4 h-4 mr-2" />
                  ) : (
                    <PieChartIcon className="w-4 h-4 mr-2" />
                  )}
                  {viewMode === "grid" ? "List View" : "Grid View"}
                </Button>
                <Select onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">Relevance</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="openPositions">
                      Most Open Positions
                    </SelectItem>
                    <SelectItem value="founded">Newest</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 mb-8">
              <Select onValueChange={setIndustryFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All Industries</SelectItem>
                  <SelectItem value="Technology">Technology</SelectItem>
                  <SelectItem value="Renewable Energy">
                    Renewable Energy
                  </SelectItem>
                  <SelectItem value="Financial Technology">
                    Financial Technology
                  </SelectItem>
                  {/* Add more industry options */}
                </SelectContent>
              </Select>
              <Select onValueChange={setSizeFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Company Size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All Sizes</SelectItem>
                  <SelectItem value="1-50">1-50 employees</SelectItem>
                  <SelectItem value="51-200">51-200 employees</SelectItem>
                  <SelectItem value="201-500">201-500 employees</SelectItem>
                  <SelectItem value="501-1000">501-1000 employees</SelectItem>
                  <SelectItem value="1000+">1000+ employees</SelectItem>
                </SelectContent>
              </Select>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400" />
                <Input
                  type="text"
                  placeholder="Location"
                  className="pl-10 bg-white dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700"
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value)}
                />
              </div>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">
                    <Star className="w-4 h-4 mr-2" />
                    Rating: {ratingFilter}+
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="space-y-4">
                    <h4 className="font-medium">Minimum Rating</h4>
                    <Slider
                      min={0}
                      max={5}
                      step={0.1}
                      value={[ratingFilter]}
                      onValueChange={(value) => setRatingFilter(value[0])}
                    />
                    <div className="flex justify-between text-sm text-zinc-500">
                      <span>0</span>
                      <span>5</span>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>

            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCompanies.map((company) => (
                  <Card key={company.id} className="overflow-hidden">
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage
                            src={`/placeholder.svg?height=48&width=48&text=${company.logo}`}
                          />
                          <AvatarFallback>{company.logo}</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-lg">
                            {company.name}
                          </CardTitle>
                          <CardDescription>{company.industry}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm text-zinc-500 dark:text-zinc-400">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {company.location}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-2" />
                          {company.size} employees
                        </div>
                        <div className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-2" />
                          {company.openPositions} open positions
                        </div>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 mr-2 text-yellow-400" />
                          {company.rating} ({company.reviews} reviews)
                        </div>
                      </div>
                      <div className="mt-4">
                        <h4 className="font-semibold mb-2">Top Benefits</h4>
                        <div className="flex flex-wrap gap-2">
                          {company.benefits
                            .slice(0, 3)
                            .map((benefit, index) => (
                              <Badge key={index} variant="secondary">
                                {benefit}
                              </Badge>
                            ))}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm">
                        View Profile
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Heart className="w-4 h-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredCompanies.map((company) => (
                  <Card key={company.id}>
                    <div className="flex items-center p-4">
                      <Avatar className="h-12 w-12 mr-4">
                        <AvatarImage
                          src={`/placeholder.svg?height=48&width=48&text=${company.logo}`}
                        />
                        <AvatarFallback>{company.logo}</AvatarFallback>
                      </Avatar>
                      <div className="flex-grow">
                        <CardTitle className="text-lg">
                          {company.name}
                        </CardTitle>
                        <CardDescription>{company.industry}</CardDescription>
                        <div className="flex space-x-4 mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                          <span className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />{" "}
                            {company.location}
                          </span>
                          <span className="flex items-center">
                            <Users className="w-4 h-4 mr-1" /> {company.size}
                          </span>
                          <span className="flex items-center">
                            <Star className="w-4 h-4 mr-1 text-yellow-400" />{" "}
                            {company.rating}
                          </span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        View Profile
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Featured Companies */}
        <section className="py-16 bg-zinc-100 dark:bg-zinc-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Featured Companies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {companies.slice(0, 3).map((company) => (
                <Card key={company.id} className="overflow-hidden">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage
                          src={`/placeholder.svg?height=48&width=48&text=${company.logo}`}
                        />
                        <AvatarFallback>{company.logo}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle>{company.name}</CardTitle>
                        <CardDescription>{company.industry}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                      {company.description}
                    </p>
                    <div className="flex justify-between text-sm text-zinc-500 dark:text-zinc-400">
                      <span className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-1" />{" "}
                        {company.openPositions} open roles
                      </span>
                      <span className="flex items-center">
                        <TrendingUp className="w-4 h-4 mr-1" />{" "}
                        {company.growthRate}% growth
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">View Company Profile</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Company Insights */}
        <section className="py-16 bg-white dark:bg-zinc-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Company Insights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Top Industries</CardTitle>
                </CardHeader>
                <CardContent>
                  <PieChart
                    data={[
                      { name: "Technology", value: 40 },
                      { name: "Finance", value: 30 },
                      { name: "Healthcare", value: 20 },
                      { name: "Retail", value: 10 },
                    ]}
                    index="name"
                    category="value"
                    valueFormatter={(value) => `${value}%`}
                    className="h-[300px]"
                  />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Company Growth Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <LineChart
                    data={[
                      { year: 2018, startups: 100, established: 500 },
                      { year: 2019, startups: 120, established: 520 },
                      { year: 2020, startups: 150, established: 530 },
                      { year: 2021, startups: 200, established: 550 },
                      { year: 2022, startups: 250, established: 580 },
                    ]}
                    index="year"
                    categories={["startups", "established"]}
                    colors={["blue", "green"]}
                    valueFormatter={(value) => `${value}`}
                    className="h-[300px]"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Company Comparison Tool */}
        <section className="py-16 bg-zinc-100 dark:bg-zinc-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Company Comparison Tool
            </h2>
            <Card>
              <CardHeader>
                <CardTitle>Compare Companies</CardTitle>
                <CardDescription>
                  Select up to 3 companies to compare side by side
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  {[1, 2, 3].map((index) => (
                    <Select key={index}>
                      <SelectTrigger>
                        <SelectValue placeholder={`Select Company ${index}`} />
                      </SelectTrigger>
                      <SelectContent>
                        {companies.map((company) => (
                          <SelectItem
                            key={company.id}
                            value={company.id.toString()}
                          >
                            {company.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  ))}
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-4 gap-4">
                    <div className="font-semibold">Criteria</div>
                    <div className="font-semibold">Company 1</div>
                    <div className="font-semibold">Company 2</div>
                    <div className="font-semibold">Company 3</div>
                  </div>
                  {[
                    "Industry",
                    "Size",
                    "Rating",
                    "Open Positions",
                    "Founded",
                  ].map((criteria) => (
                    <div key={criteria} className="grid grid-cols-4 gap-4">
                      <div>{criteria}</div>
                      <div>-</div>
                      <div>-</div>
                      <div>-</div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Generate Comparison Report</Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Company Reviews */}
        <section className="py-16 bg-white dark:bg-zinc-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Latest Company Reviews
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {companies.slice(0, 3).map((company) => (
                <Card key={company.id}>
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-10 w-10">
                        <AvatarImage
                          src={`/placeholder.svg?height=40&width=40&text=${company.logo}`}
                        />
                        <AvatarFallback>{company.logo}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">
                          {company.name}
                        </CardTitle>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(company.rating)
                                  ? "text-yellow-400 fill-current"
                                  : "text-zinc-300"
                              }`}
                            />
                          ))}
                          <span className="ml-2 text-sm text-zinc-500">
                            {company.rating.toFixed(1)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                      "Great work environment with lots of opportunities for
                      growth. The company really invests in its employees."
                    </p>
                    <div className="text-sm text-zinc-500">
                      Software Engineer - San Francisco, CA
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Read More Reviews
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-zinc-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Find Your Dream Company?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Explore thousands of companies and find the perfect match for your
              career goals.
            </p>
            <Button
              size="lg"
              className="bg-white text-zinc-900 hover:bg-zinc-100"
            >
              Start Your Company Search
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
