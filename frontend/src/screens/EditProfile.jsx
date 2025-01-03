"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Icons } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  User,
  Mail,
  Phone,
  Briefcase,
  GraduationCap,
  MapPin,
  Calendar,
  FileText,
  Camera,
  Trash2,
  Plus,
} from "lucide-react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useNavigate } from "react-router";

export default function EditProfilePage() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // User information state
  const [fullName, setFullName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [phoneNumber, setPhoneNumber] = useState("+1234567890");
  const [role, setRole] = useState("student");
  const [bio, setBio] = useState(
    "A passionate student looking for opportunities in software development."
  );
  const [location, setLocation] = useState("San Francisco, CA");
  const [birthdate, setBirthdate] = useState("1995-05-15");
  const [skills, setSkills] = useState(["JavaScript", "React", "Node.js"]);
  const [newSkill, setNewSkill] = useState("");
  const [education, setEducation] = useState([
    {
      degree: "Bachelor of Science",
      field: "Computer Science",
      school: "University of Technology",
      year: "2023",
    },
  ]);
  const [experience, setExperience] = useState([
    {
      title: "Software Engineer Intern",
      company: "Tech Solutions Inc.",
      startDate: "2022-06",
      endDate: "2022-08",
      description:
        "Worked on developing new features for the company's main product.",
    },
  ]);
  const [profilePhoto, setProfilePhoto] = useState(
    "/placeholder.svg?height=200&width=200"
  );
  const [resume, setResume] = useState(null);
  const [githubUsername, setGithubUsername] = useState("johndoe");
  const [linkedinUrl, setLinkedinUrl] = useState(
    "https://www.linkedin.com/in/johndoe"
  );
  const [portfolioUrl, setPortfolioUrl] = useState("https://johndoe.com");
  const [isOpenToWork, setIsOpenToWork] = useState(true);
  const [preferredJobType, setPreferredJobType] = useState("full-time");
  const [salaryExpectation, setSalaryExpectation] = useState([50000, 100000]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Here you would typically make an API call to update the user's profile
    console.log("Profile update attempt", {
      fullName,
      email,
      phoneNumber,
      role,
      bio,
      location,
      birthdate,
      skills,
      education,
      experience,
      githubUsername,
      linkedinUrl,
      portfolioUrl,
      isOpenToWork,
      preferredJobType,
      salaryExpectation,
    });

    setIsLoading(false);
  };

  const handleAddSkill = () => {
    if (newSkill && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill]);
      setNewSkill("");
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  const handleProfilePhotoChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfilePhoto(e.target?.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResumeChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setResume(file);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 dark:bg-zinc-900">
      <main className="flex-grow container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Edit Your Profile
        </h1>
        <form onSubmit={handleSubmit}>
          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="personal">Personal Info</TabsTrigger>
              <TabsTrigger value="professional">Professional</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="preferences">Preferences</TabsTrigger>
            </TabsList>

            <TabsContent value="personal">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>
                    Update your personal details and contact information.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <img
                        src={profilePhoto}
                        alt="Profile"
                        width={200}
                        height={200}
                        className="rounded-full"
                      />
                      <label
                        htmlFor="profile-photo"
                        className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full cursor-pointer"
                      >
                        <Camera className="h-5 w-5" />
                      </label>
                      <input
                        id="profile-photo"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleProfilePhotoChange}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-500 dark:text-zinc-400" />
                        <Input
                          id="fullName"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-500 dark:text-zinc-400" />
                        <Input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phoneNumber">Phone Number</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-500 dark:text-zinc-400 z-10" />
                        <PhoneInput
                          international
                          countryCallingCodeEditable={false}
                          defaultCountry="US"
                          value={phoneNumber}
                          onChange={setPhoneNumber}
                          className="pl-10"
                          inputComponent={Input}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="birthdate">Birthdate</Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-500 dark:text-zinc-400" />
                        <Input
                          id="birthdate"
                          type="date"
                          value={birthdate}
                          onChange={(e) => setBirthdate(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-500 dark:text-zinc-400" />
                      <Input
                        id="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                      rows={4}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="professional">
              <Card>
                <CardHeader>
                  <CardTitle>Professional Information</CardTitle>
                  <CardDescription>
                    Add your skills, experience, and professional links.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label>Skills</Label>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {skills.map((skill, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-sm"
                        >
                          {skill}
                          <button
                            type="button"
                            onClick={() => handleRemoveSkill(skill)}
                            className="ml-2 text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
                          >
                            ×
                          </button>
                        </Badge>
                      ))}
                    </div>
                    <div className="flex space-x-2">
                      <Input
                        value={newSkill}
                        onChange={(e) => setNewSkill(e.target.value)}
                        placeholder="Add a skill"
                      />
                      <Button type="button" onClick={handleAddSkill}>
                        Add
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Experience</Label>
                    {experience.map((exp, index) => (
                      <Card key={index}>
                        <CardHeader>
                          <CardTitle>{exp.title}</CardTitle>
                          <CardDescription>{exp.company}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p>
                            {exp.startDate} - {exp.endDate}
                          </p>
                          <p>{exp.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                    <Button type="button" className="w-full">
                      Add Experience
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="resume">Resume</Label>
                    <div className="flex items-center space-x-2">
                      <Input
                        id="resume"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleResumeChange}
                      />
                      {resume && (
                        <Button type="button" variant="outline">
                          <FileText className="mr-2 h-4 w-4" />
                          View Resume
                        </Button>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="githubUsername">GitHub Username</Label>
                      <Input
                        id="githubUsername"
                        value={githubUsername}
                        onChange={(e) => setGithubUsername(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="linkedinUrl">LinkedIn URL</Label>
                      <Input
                        id="linkedinUrl"
                        value={linkedinUrl}
                        onChange={(e) => setLinkedinUrl(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="portfolioUrl">Portfolio URL</Label>
                    <Input
                      id="portfolioUrl"
                      value={portfolioUrl}
                      onChange={(e) => setPortfolioUrl(e.target.value)}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="education">
              <Card>
                <CardHeader>
                  <CardTitle>Education</CardTitle>
                  <CardDescription>
                    Add your educational background.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {education.map((edu, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle>
                          {edu.degree} in {edu.field}
                        </CardTitle>
                        <CardDescription>{edu.school}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>Graduated: {edu.year}</p>
                      </CardContent>
                    </Card>
                  ))}
                  <Button type="button" className="w-full">
                    Add Education
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="preferences">
              <Card>
                <CardHeader>
                  <CardTitle>Job Preferences</CardTitle>
                  <CardDescription>
                    Set your job preferences and availability.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="openToWork">Open to Work</Label>
                    <Switch
                      id="openToWork"
                      checked={isOpenToWork}
                      onCheckedChange={setIsOpenToWork}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="preferredJobType">Preferred Job Type</Label>
                    <Select
                      value={preferredJobType}
                      onValueChange={setPreferredJobType}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select job type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="full-time">Full-time</SelectItem>
                        <SelectItem value="part-time">Part-time</SelectItem>
                        <SelectItem value="contract">Contract</SelectItem>
                        <SelectItem value="internship">Internship</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Salary Expectation (Annual)</Label>
                    <div className="flex items-center space-x-2">
                      <span>${salaryExpectation[0].toLocaleString()}</span>
                      <Slider
                        min={0}
                        max={200000}
                        step={1000}
                        value={salaryExpectation}
                        onValueChange={setSalaryExpectation}
                        className="flex-grow"
                      />
                      <span>${salaryExpectation[1].toLocaleString()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="mt-8 flex justify-end">
            <Button type="submit" disabled={isLoading}>
              {isLoading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              Save Changes
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
}
