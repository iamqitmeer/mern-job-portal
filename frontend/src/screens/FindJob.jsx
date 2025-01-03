import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Slider } from '@/components/ui/slider'
import { Switch } from '@/components/ui/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Briefcase, MapPin, DollarSign, Clock, Search, Filter, ChevronDown, Star, PieChart } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { LineChart } from 'recharts'

// Dummy data for jobs
const jobs = [
  {
    id: 1,
    title: 'Senior Software Engineer',
    company: 'TechCorp Inc.',
    location: 'San Francisco, CA',
    salary: '$120,000 - $160,000',
    type: 'Full-time',
    posted: '2 days ago',
    description: 'We are seeking a talented Senior Software Engineer to join our innovative team...',
    requirements: ['5+ years of experience', 'Proficient in React and Node.js', 'Strong problem-solving skills'],
    logo: 'TC'
  },
  {
    id: 2,
    title: 'Product Marketing Manager',
    company: 'GrowthLabs',
    location: 'New York, NY',
    salary: '$90,000 - $120,000',
    type: 'Full-time',
    posted: '1 week ago',
    description: 'Join our dynamic marketing team to drive product growth and user acquisition...',
    requirements: ['3+ years in product marketing', 'Experience with SaaS products', 'Excellent communication skills'],
    logo: 'GL'
  },
  {
    id: 3,
    title: 'UX/UI Designer',
    company: 'DesignMasters',
    location: 'London, UK',
    salary: '£60,000 - £80,000',
    type: 'Contract',
    posted: '3 days ago',
    description: 'We are looking for a creative UX/UI Designer to help shape the future of our products...',
    requirements: ['Portfolio showcasing UX/UI projects', 'Proficiency in Figma and Sketch', 'Understanding of user-centered design principles'],
    logo: 'DM'
  },
  {
    id: 4,
    title: 'Data Scientist',
    company: 'AI Innovations',
    location: 'Remote',
    salary: '$100,000 - $140,000',
    type: 'Full-time',
    posted: '1 day ago',
    description: 'Join our AI team to develop cutting-edge machine learning models and data-driven solutions...',
    requirements: ['MS or PhD in Computer Science or related field', 'Experience with Python and TensorFlow', 'Strong background in statistics and mathematics'],
    logo: 'AI'
  },
  {
    id: 5,
    title: 'Sales Representative',
    company: 'Global Solutions Inc.',
    location: 'Chicago, IL',
    salary: '$50,000 - $80,000 + Commission',
    type: 'Full-time',
    posted: '5 days ago',
    description: 'We are expanding our sales team and looking for motivated individuals to drive business growth...',
    requirements: ['2+ years of sales experience', 'Excellent interpersonal skills', 'Ability to meet and exceed sales targets'],
    logo: 'GS'
  },
  // Add more job listings as needed
];

// Dummy data for job categories
const jobCategories = [
  { name: 'Technology', count: 1500 },
  { name: 'Marketing', count: 800 },
  { name: 'Design', count: 600 },
  { name: 'Sales', count: 1200 },
  { name: 'Finance', count: 500 },
  { name: 'Healthcare', count: 900 },
  { name: 'Education', count: 400 },
  { name: 'Engineering', count: 700 },
];

// Dummy data for job trends
const jobTrends = [
  { name: 'Jan', jobs: 1000 },
  { name: 'Feb', jobs: 1200 },
  { name: 'Mar', jobs: 1100 },
  { name: 'Apr', jobs: 1300 },
  { name: 'May', jobs: 1400 },
  { name: 'Jun', jobs: 1500 },
];

export default function FindJobs() {
  const [selectedJob, setSelectedJob] = useState(jobs[0]);

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 dark:bg-zinc-900">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-8">Find Your Dream Job</h1>
        
        {/* Search and Filter Section */}
        <section className="mb-12">
          <div className="flex flex-wrap gap-4 items-center mb-4">
            <div className="flex-grow">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400" />
                <Input 
                  type="text" 
                  placeholder="Job title, keywords, or company" 
                  className="pl-10 bg-white dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700"
                />
              </div>
            </div>
            <div className="flex-grow">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400" />
                <Input 
                  type="text" 
                  placeholder="City, state, or zip code" 
                  className="pl-10 bg-white dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700"
                />
              </div>
            </div>
            <Button className="bg-zinc-900 text-white hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200">
              Search Jobs
            </Button>
          </div>
          <div className="flex flex-wrap gap-4 items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="border-zinc-300 dark:border-zinc-700">
                  Job Type <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Full-time</DropdownMenuItem>
                <DropdownMenuItem>Part-time</DropdownMenuItem>
                <DropdownMenuItem>Contract</DropdownMenuItem>
                <DropdownMenuItem>Internship</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="border-zinc-300 dark:border-zinc-700">
                  Experience Level <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Entry Level</DropdownMenuItem>
                <DropdownMenuItem>Mid Level</DropdownMenuItem>
                <DropdownMenuItem>Senior Level</DropdownMenuItem>
                <DropdownMenuItem>Executive</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="border-zinc-300 dark:border-zinc-700">
                  Salary Range <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>$0 - $50,000</DropdownMenuItem>
                <DropdownMenuItem>$50,000 - $100,000</DropdownMenuItem>
                <DropdownMenuItem>$100,000 - $150,000</DropdownMenuItem>
                <DropdownMenuItem>$150,000+</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="outline" className="border-zinc-300 dark:border-zinc-700">
              <Filter className="mr-2 h-4 w-4" />
              More Filters
            </Button>
          </div>
        </section>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Job Listings */}
          <section className="lg:col-span-2">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">Featured Jobs</h2>
            <div className="space-y-4">
              {jobs.map((job) => (
                <Card key={job.id} className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => setSelectedJob(job)}>
                  <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                    <Avatar className="h-10 w-10 mr-2">
                      <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${job.logo}`} alt={job.company} />
                      <AvatarFallback>{job.logo}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{job.title}</CardTitle>
                      <CardDescription>{job.company}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                      <span className="flex items-center">
                        <MapPin className="mr-1 h-4 w-4" /> {job.location}
                      </span>
                      <span className="flex items-center">
                        <DollarSign className="mr-1 h-4 w-4" /> {job.salary}
                      </span>
                      <span className="flex items-center">
                        <Briefcase className="mr-1 h-4 w-4" /> {job.type}
                      </span>
                      <span className="flex items-center">
                        <Clock className="mr-1 h-4 w-4" /> Posted {job.posted}
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">View Details</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>

          {/* Job Details and Sidebar */}
          <section className="space-y-8">
            {/* Job Details */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={`/placeholder.svg?height=48&width=48&text=${selectedJob.logo}`} alt={selectedJob.company} />
                    <AvatarFallback>{selectedJob.logo}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>{selectedJob.title}</CardTitle>
                    <CardDescription>{selectedJob.company} - {selectedJob.location}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">Job Description</h3>
                    <p className="text-zinc-600 dark:text-zinc-400">{selectedJob.description}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">Requirements</h3>
                    <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400">
                      {selectedJob.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-zinc-900 text-white hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200">Apply Now</Button>
              </CardFooter>
            </Card>

            {/* Job Categories */}
            <Card>
              <CardHeader>
                <CardTitle>Job Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[200px]">
                  {jobCategories.map((category, index) => (
                    <div key={index} className="flex justify-between items-center py-2">
                      <span className="text-zinc-600 dark:text-zinc-400">{category.name}</span>
                      <Badge variant="secondary">{category.count}</Badge>
                    </div>
                  ))}
                </ScrollArea>
              </CardContent>
            </Card>

            {/* Job Market Trends */}
            <Card>
              <CardHeader>
                <CardTitle>Job Market Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="chart" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="chart">Chart</TabsTrigger>
                    <TabsTrigger value="stats">Stats</TabsTrigger>
                  </TabsList>
                  <TabsContent value="chart">
                    <LineChart
                      data={jobTrends}
                      index="name"
                      categories={["jobs"]}
                      colors={["zinc"]}
                      valueFormatter={(value) => `${value} jobs`}
                      className="h-[200px]"
                    />
                  </TabsContent>
                  <TabsContent value="stats">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-zinc-600 dark:text-zinc-400">Total Jobs</span>
                        <span className="font-semibold">15,000+</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-600 dark:text-zinc-400">Monthly Growth</span>
                        <span className="font-semibold text-green-600">+5.2%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-600 dark:text-zinc-400">Top Category</span>
                        <span className="font-semibold">Technology</span>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
    </div>
  )
}

