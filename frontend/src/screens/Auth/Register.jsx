import { useState } from "react";
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
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Icons } from "@/components/icons";
import {
  Mail,
  Lock,
  User,
  Phone,
  Briefcase,
  GraduationCap,
  Eye,
  EyeOff,
} from "lucide-react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { NavLink, useNavigate } from "react-router";

export default function SignUpPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [role, setRole] = useState("student");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Here you would typically make an API call to register the user
    console.log("Sign up attempt", {
      fullName,
      email,
      password,
      phoneNumber,
      role,
    });

    setIsLoading(false);
    // Redirect to login page or dashboard after successful registration
    router.push("/login");
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800">
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <Card className="w-full max-w-md overflow-hidden">
          <CardHeader className="space-y-1 bg-zinc-900 text-white">
            <CardTitle className="text-2xl font-bold text-center">
              Create your JobPortal account
            </CardTitle>
            <CardDescription className="text-center text-zinc-200">
              Join our community and start your career journey
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <Tabs value={`step${step}`} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-4">
                <TabsTrigger value="step1">Basic Info</TabsTrigger>
                <TabsTrigger value="step2">Contact</TabsTrigger>
                <TabsTrigger value="step3">Role</TabsTrigger>
              </TabsList>
              <Progress value={step * 33.33} className="mb-6" />
              <form onSubmit={handleSubmit} className="space-y-4">
                <TabsContent value="step1">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-500 dark:text-zinc-400" />
                        <Input
                          id="fullName"
                          type="text"
                          placeholder="Enter your full name"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="pl-10"
                          required
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
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-500 dark:text-zinc-400" />
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Create a password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="pl-10 pr-10"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-500 dark:text-zinc-400"
                        >
                          {showPassword ? (
                            <EyeOff size={20} />
                          ) : (
                            <Eye size={20} />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="step2">
                  <div className="space-y-4">
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
                  </div>
                </TabsContent>
                <TabsContent value="step3">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Role</Label>
                      <RadioGroup
                        defaultValue="student"
                        onValueChange={setRole}
                        className="flex flex-col space-y-2"
                      >
                        <div className="flex items-center space-x-2 bg-zinc-100 dark:bg-zinc-800 p-3 rounded-md">
                          <RadioGroupItem value="student" id="student" />
                          <Label
                            htmlFor="student"
                            className="flex items-center cursor-pointer"
                          >
                            <GraduationCap className="mr-2 h-5 w-5 text-blue-500" />
                            Student
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 bg-zinc-100 dark:bg-zinc-800 p-3 rounded-md">
                          <RadioGroupItem value="recruiter" id="recruiter" />
                          <Label
                            htmlFor="recruiter"
                            className="flex items-center cursor-pointer"
                          >
                            <Briefcase className="mr-2 h-5 w-5 text-green-500" />
                            Recruiter
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                </TabsContent>
                <div className="flex justify-between mt-6">
                  {step > 1 && (
                    <Button type="button" variant="outline" onClick={prevStep}>
                      Previous
                    </Button>
                  )}
                  {step < 3 ? (
                    <Button
                      type="button"
                      onClick={nextStep}
                      className="ml-auto"
                    >
                      Next
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      className="ml-auto"
                      disabled={isLoading}
                    >
                      {isLoading && (
                        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                      )}
                      Create Account
                    </Button>
                  )}
                </div>
              </form>
            </Tabs>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4 bg-zinc-50 dark:bg-zinc-800/50">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-zinc-300 dark:border-zinc-600" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-zinc-50 dark:bg-zinc-800 px-2 text-zinc-500 dark:text-zinc-400">
                  Or continue with
                </span>
              </div>
            </div>
            <div className="flex space-x-4">
              <Button variant="outline" className="w-full">
                <Icons.google className="mr-2 h-4 w-4" />
                Google
              </Button>
              <Button variant="outline" className="w-full">
                <Icons.github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            </div>
            <p className="text-center text-sm text-zinc-600 dark:text-zinc-400">
              Already have an account?{" "}
              <NavLink
                to="/login"
                className="font-medium text-blue-600 hover:underline dark:text-blue-400"
              >
                Sign in
              </NavLink>
            </p>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
