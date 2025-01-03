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
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Icons } from "@/components/icons";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import {
  Bell,
  Lock,
  Eye,
  UserCog,
  CreditCard,
  HelpCircle,
  LogOut,
  Trash2,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
  Globe,
  Github,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Camera,
  FileText,
  DollarSign,
  Clock,
  CalendarIcon,
  Settings,
  Shield,
  Key,
  AlertTriangle,
  BarChart,
  PieChart,
  Activity,
  Zap,
  Gift,
  Star,
  Heart,
  ThumbsUp,
  MessageCircle,
  Share2,
  Download,
  Upload,
  RefreshCw,
  Sliders,
  Volume2,
  VolumeX,
  Sun,
  Moon,
  Languages,
  Flag,
  Smartphone,
  Database,
  BookOpen,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function SettingsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Account settings state
  const [fullName, setFullName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("+1234567890");
  const [location, setLocation] = useState("San Francisco, CA");
  const [bio, setBio] = useState(
    "A passionate professional looking for new opportunities."
  );
  const [birthdate, setBirthdate] = useState(new Date("1990-01-01"));

  const [profilePhoto, setProfilePhoto] = useState(
    "/placeholder.svg?height=128&width=128"
  );
  const [coverPhoto, setCoverPhoto] = useState(
    "/placeholder.svg?height=400&width=800"
  );

  // Notification settings state
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [jobAlerts, setJobAlerts] = useState(true);
  const [messageNotifications, setMessageNotifications] = useState(true);
  const [newsletterSubscription, setNewsletterSubscription] = useState(true);
  const [eventReminders, setEventReminders] = useState(true);
  const [networkUpdates, setNetworkUpdates] = useState(true);
  const [applicationStatus, setApplicationStatus] = useState(true);

  // Privacy settings state
  const [profileVisibility, setProfileVisibility] = useState("public");
  const [showEmail, setShowEmail] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  const [allowMessaging, setAllowMessaging] = useState(true);
  const [showOnlineStatus, setShowOnlineStatus] = useState(true);
  const [showLastSeen, setShowLastSeen] = useState(true);
  const [showProfileViews, setShowProfileViews] = useState(true);
  const [allowDataSharing, setAllowDataSharing] = useState(false);

  // Subscription settings state
  const [currentPlan, setCurrentPlan] = useState("free");
  const [autoRenew, setAutoRenew] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState("credit_card");

  // Preferences settings state
  const [language, setLanguage] = useState("en");
  const [timezone, setTimezone] = useState("UTC");
  const [theme, setTheme] = useState("system");
  const [currency, setCurrency] = useState("USD");
  const [jobPreferences, setJobPreferences] = useState(["full-time", "remote"]);
  const [salaryRange, setSalaryRange] = useState([50000, 100000]);
  const [skills, setSkills] = useState(["JavaScript", "React", "Node.js"]);
  const [interests, setInterests] = useState([
    "Technology",
    "Design",
    "Marketing",
  ]);

  // Security settings state
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
  const [loginAlerts, setLoginAlerts] = useState(true);
  const [deviceManagement, setDeviceManagement] = useState([
    { id: 1, name: "MacBook Pro", lastUsed: "2023-06-15T10:30:00Z" },
    { id: 2, name: "iPhone 12", lastUsed: "2023-06-16T08:45:00Z" },
  ]);

  // Social media integration state
  const [linkedAccounts, setLinkedAccounts] = useState({
    github: "",
    linkedin: "",
    twitter: "",
    facebook: "",
    instagram: "",
  });

  // Activity log state
  const [activityLog] = useState([
    { id: 1, action: "Profile updated", date: "2023-06-15T14:30:00Z" },
    {
      id: 2,
      action: "Applied to Software Engineer position",
      date: "2023-06-14T09:15:00Z",
    },
    {
      id: 3,
      action: "Viewed Company XYZ profile",
      date: "2023-06-13T16:45:00Z",
    },
  ]);

  // Data export/import state
  const [dataFormat, setDataFormat] = useState("json");

  // Accessibility settings state
  const [fontSize, setFontSize] = useState("medium");
  const [highContrast, setHighContrast] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [screenReader, setScreenReader] = useState(false);

  const handleSaveSettings = async (even) => {
    event.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Here you would typically make an API call to update the user's settings
    console.log("Settings update attempt", {
      fullName,
      email,
      phoneNumber,
      location,
      bio,
      birthdate,
      profilePhoto,
      coverPhoto,
      emailNotifications,
      pushNotifications,
      jobAlerts,
      messageNotifications,
      newsletterSubscription,
      eventReminders,
      networkUpdates,
      applicationStatus,
      profileVisibility,
      showEmail,
      showPhone,
      allowMessaging,
      showOnlineStatus,
      showLastSeen,
      showProfileViews,
      allowDataSharing,
      currentPlan,
      autoRenew,
      paymentMethod,
      language,
      timezone,
      theme,
      currency,
      jobPreferences,
      salaryRange,
      skills,
      interests,
      twoFactorAuth,
      loginAlerts,
      deviceManagement,
      linkedAccounts,
      dataFormat,
      fontSize,
      highContrast,
      reduceMotion,
      screenReader,
    });

    setIsLoading(false);
  };

  const handleChangePassword = async (even) => {
    event.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Here you would typically make an API call to change the user's password
    console.log("Password change attempt", {
      password,
      newPassword,
      confirmPassword,
    });

    setIsLoading(false);
    setPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  const handleDeleteAccount = async () => {
    if (
      window.confirm(
        "Are you sure you want to delete your account? This action cannot be undone."
      )
    ) {
      setIsLoading(true);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Here you would typically make an API call to delete the user's account
      console.log("Account deletion attempt");

      setIsLoading(false);
      router.push("/");
    }
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

  const handleCoverPhotoChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setCoverPhoto(e.target?.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 dark:bg-zinc-900">
      <main className="flex-grow container mx-auto py-12 px-4 sm:px-6 lg:px-8">
   
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sidebar */}
          <Card className="col-span-1 md:row-span-2">
            <CardHeader>
              <CardTitle>Settings Menu</CardTitle>
            </CardHeader>
            <CardContent>
              <nav className="space-y-2">
                <NavLink
                  href="#account"
                  className="flex items-center p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
                >
                  <UserCog className="mr-2 h-5 w-5" />
                  Account
                </NavLink>
                <NavLink
                  href="#notifications"
                  className="flex items-center p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
                >
                  <Bell className="mr-2 h-5 w-5" />
                  Notifications
                </NavLink>
                <NavLink
                  href="#privacy"
                  className="flex items-center p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
                >
                  <Lock className="mr-2 h-5 w-5" />
                  Privacy
                </NavLink>
                <NavLink
                  href="#subscription"
                  className="flex items-center p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
                >
                  <CreditCard className="mr-2 h-5 w-5" />
                  Subscription
                </NavLink>
                <NavLink
                  href="#preferences"
                  className="flex items-center p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
                >
                  <Settings className="mr-2 h-5 w-5" />
                  Preferences
                </NavLink>
                <NavLink
                  href="#security"
                  className="flex items-center p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
                >
                  <Shield className="mr-2 h-5 w-5" />
                  Security
                </NavLink>
                <NavLink
                  href="#social"
                  className="flex items-center p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
                >
                  <Share2 className="mr-2 h-5 w-5" />
                  Social Media
                </NavLink>
                <NavLink
                  href="#activity"
                  className="flex items-center p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
                >
                  <Activity className="mr-2 h-5 w-5" />
                  Activity Log
                </NavLink>
                <NavLink
                  href="#data"
                  className="flex items-center p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
                >
                  <Database className="mr-2 h-5 w-5" />
                  Data Management
                </NavLink>
                <NavLink
                  href="#accessibility"
                  className="flex items-center p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
                >
                  <Eye className="mr-2 h-5 w-5" />
                  Accessibility
                </NavLink>
                <NavLink
                  href="#help"
                  className="flex items-center p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
                >
                  <HelpCircle className="mr-2 h-5 w-5" />
                  Help & Support
                </NavLink>
              </nav>
            </CardContent>
          </Card>

          {/* Main Content */}
          <div className="col-span-1 md:col-span-2 space-y-8">
            {/* Account Settings */}
            <Card id="account">
              <CardHeader>
                <CardTitle>Account Information</CardTitle>
                <CardDescription>
                  Manage your account details and profile information.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-center">
                    <div className="relative">
                      <Avatar className="w-32 h-32">
                        <AvatarImage src={profilePhoto} alt="Profile" />
                        <AvatarFallback>
                          {fullName
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
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
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      id="fullName"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phoneNumber">Phone Number</Label>
                    <Input
                      id="phoneNumber"
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
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
                  <div className="space-y-2">
                    <Label htmlFor="birthdate">Birthdate</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !birthdate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {birthdate ? format(birthdate, "PPP") : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={birthdate}
                          onSelect={setBirthdate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
                <Separator />
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Cover Photo</h3>
                  <div className="relative h-48 bg-zinc-200 dark:bg-zinc-800 rounded-lg overflow-hidden">
                    <img
                      src={coverPhoto}
                      alt="Cover"
                      layout="fill"
                      objectFit="cover"
                    />
                    <label
                      htmlFor="cover-photo"
                      className="absolute bottom-4 right-4 bg-blue-500 text-white p-2 rounded-full cursor-pointer"
                    >
                      <Camera className="h-5 w-5" />
                    </label>
                    <input
                      id="cover-photo"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleCoverPhotoChange}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Notification Settings */}
            <Card id="notifications">
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>
                  Manage how you receive notifications.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="email-notifications">
                      Email Notifications
                    </Label>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      Receive notifications via email
                    </p>
                  </div>
                  <Switch
                    id="email-notifications"
                    checked={emailNotifications}
                    onCheckedChange={setEmailNotifications}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="push-notifications">
                      Push Notifications
                    </Label>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      Receive notifications on your device
                    </p>
                  </div>
                  <Switch
                    id="push-notifications"
                    checked={pushNotifications}
                    onCheckedChange={setPushNotifications}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="job-alerts">Job Alerts</Label>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      Receive notifications for new job postings
                    </p>
                  </div>
                  <Switch
                    id="job-alerts"
                    checked={jobAlerts}
                    onCheckedChange={setJobAlerts}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="message-notifications">
                      Message Notifications
                    </Label>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      Receive notifications for new messages
                    </p>
                  </div>
                  <Switch
                    id="message-notifications"
                    checked={messageNotifications}
                    onCheckedChange={setMessageNotifications}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="newsletter-subscription">
                      Newsletter Subscription
                    </Label>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      Receive our weekly newsletter
                    </p>
                  </div>
                  <Switch
                    id="newsletter-subscription"
                    checked={newsletterSubscription}
                    onCheckedChange={setNewsletterSubscription}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="event-reminders">Event Reminders</Label>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      Receive reminders for upcoming events
                    </p>
                  </div>
                  <Switch
                    id="event-reminders"
                    checked={eventReminders}
                    onCheckedChange={setEventReminders}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="network-updates">Network Updates</Label>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      Receive updates about your network
                    </p>
                  </div>
                  <Switch
                    id="network-updates"
                    checked={networkUpdates}
                    onCheckedChange={setNetworkUpdates}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="application-status">
                      Application Status Updates
                    </Label>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      Receive updates about your job applications
                    </p>
                  </div>
                  <Switch
                    id="application-status"
                    checked={applicationStatus}
                    onCheckedChange={setApplicationStatus}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Privacy Settings */}
            <Card id="privacy">
              <CardHeader>
                <CardTitle>Privacy Settings</CardTitle>
                <CardDescription>
                  Control your profile visibility and data sharing preferences.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="profile-visibility">Profile Visibility</Label>
                  <Select
                    value={profileVisibility}
                    onValueChange={setProfileVisibility}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select profile visibility" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="public">Public</SelectItem>
                      <SelectItem value="private">Private</SelectItem>
                      <SelectItem value="connections">
                        Connections Only
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="show-email">Show Email Address</Label>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      Allow others to see your email address
                    </p>
                  </div>
                  <Switch
                    id="show-email"
                    checked={showEmail}
                    onCheckedChange={setShowEmail}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="show-phone">Show Phone Number</Label>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      Allow others to see your phone number
                    </p>
                  </div>
                  <Switch
                    id="show-phone"
                    checked={showPhone}
                    onCheckedChange={setShowPhone}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="allow-messaging">Allow Messaging</Label>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      Allow others to send you messages
                    </p>
                  </div>
                  <Switch
                    id="allow-messaging"
                    checked={allowMessaging}
                    onCheckedChange={setAllowMessaging}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="show-online-status">
                      Show Online Status
                    </Label>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      Allow others to see when you're online
                    </p>
                  </div>
                  <Switch
                    id="show-online-status"
                    checked={showOnlineStatus}
                    onCheckedChange={setShowOnlineStatus}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="show-last-seen">Show Last Seen</Label>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      Allow others to see when you were last active
                    </p>
                  </div>
                  <Switch
                    id="show-last-seen"
                    checked={showLastSeen}
                    onCheckedChange={setShowLastSeen}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="show-profile-views">
                      Show Profile Views
                    </Label>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      Allow others to see who viewed your profile
                    </p>
                  </div>
                  <Switch
                    id="show-profile-views"
                    checked={showProfileViews}
                    onCheckedChange={setShowProfileViews}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="allow-data-sharing">
                      Allow Data Sharing
                    </Label>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      Allow us to share your data with trusted partners
                    </p>
                  </div>
                  <Switch
                    id="allow-data-sharing"
                    checked={allowDataSharing}
                    onCheckedChange={setAllowDataSharing}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Subscription Settings */}
            <Card id="subscription">
              <CardHeader>
                <CardTitle>Subscription Management</CardTitle>
                <CardDescription>
                  Manage your subscription plan and billing information.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Current Plan</Label>
                  <p className="text-lg font-medium">
                    {currentPlan === "free" ? "Free Plan" : "Premium Plan"}
                  </p>
                </div>
                {currentPlan === "free" && <Button>Upgrade to Premium</Button>}
                {currentPlan !== "free" && (
                  <>
                    <Separator />
                    <div className="space-y-2">
                      <Label>Billing Information</Label>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        Your next billing date is on July 1, 2023
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="auto-renew">
                          Auto-renew Subscription
                        </Label>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">
                          Automatically renew your subscription
                        </p>
                      </div>
                      <Switch
                        id="auto-renew"
                        checked={autoRenew}
                        onCheckedChange={setAutoRenew}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="payment-method">Payment Method</Label>
                      <Select
                        value={paymentMethod}
                        onValueChange={setPaymentMethod}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select payment method" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="credit_card">
                            Credit Card
                          </SelectItem>
                          <SelectItem value="paypal">PayPal</SelectItem>
                          <SelectItem value="bank_transfer">
                            Bank Transfer
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button variant="outline">Update Billing Info</Button>
                    <Button variant="destructive">Cancel Subscription</Button>
                  </>
                )}
              </CardContent>
            </Card>

            {/* Preferences Settings */}
            <Card id="preferences">
              <CardHeader>
                <CardTitle>Preferences</CardTitle>
                <CardDescription>
                  Customize your account preferences and job search settings.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="language">Language</Label>
                  <Select value={language} onValueChange={setLanguage}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Español</SelectItem>
                      <SelectItem value="fr">Français</SelectItem>
                      <SelectItem value="de">Deutsch</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timezone">Timezone</Label>
                  <Select value={timezone} onValueChange={setTimezone}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select timezone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="UTC">UTC</SelectItem>
                      <SelectItem value="EST">Eastern Time</SelectItem>
                      <SelectItem value="CST">Central Time</SelectItem>
                      <SelectItem value="PST">Pacific Time</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="theme">Theme</Label>
                  <Select value={theme} onValueChange={setTheme}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="currency">Preferred Currency</Label>
                  <Select value={currency} onValueChange={setCurrency}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="USD">USD</SelectItem>
                      <SelectItem value="EUR">EUR</SelectItem>
                      <SelectItem value="GBP">GBP</SelectItem>
                      <SelectItem value="JPY">JPY</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Job Preferences</Label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "full-time",
                      "part-time",
                      "contract",
                      "remote",
                      "on-site",
                    ].map((pref) => (
                      <Badge
                        key={pref}
                        variant={
                          jobPreferences.includes(pref) ? "default" : "outline"
                        }
                        className="cursor-pointer"
                        onClick={() => {
                          if (jobPreferences.includes(pref)) {
                            setJobPreferences(
                              jobPreferences.filter((p) => p !== pref)
                            );
                          } else {
                            setJobPreferences([...jobPreferences, pref]);
                          }
                        }}
                      >
                        {pref}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Salary Range</Label>
                  <div className="flex items-center space-x-2">
                    <span>${salaryRange[0].toLocaleString()}</span>
                    <Slider
                      min={0}
                      max={200000}
                      step={1000}
                      value={salaryRange}
                      onValueChange={setSalaryRange}
                      className="flex-grow"
                    />
                    <span>${salaryRange[1].toLocaleString()}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Skills</Label>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-sm"
                      >
                        {skill}
                        <button
                          type="button"
                          onClick={() =>
                            setSkills(skills.filter((s) => s !== skill))
                          }
                          className="ml-2 text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
                        >
                          ×
                        </button>
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Add a skill"
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          const newSkill = e.currentTarget.value.trim();
                          if (newSkill && !skills.includes(newSkill)) {
                            setSkills([...skills, newSkill]);
                            e.currentTarget.value = "";
                          }
                        }
                      }}
                    />
                    <Button
                      type="button"
                      onClick={() => {
                        const input = document.querySelector(
                          'input[placeholder="Add a skill"]'
                        );
                        const newSkill = input.value.trim();
                        if (newSkill && !skills.includes(newSkill)) {
                          setSkills([...skills, newSkill]);
                          input.value = "";
                        }
                      }}
                    >
                      Add
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Interests</Label>
                  <div className="flex flex-wrap gap-2">
                    {interests.map((interest) => (
                      <Badge
                        key={interest}
                        variant="secondary"
                        className="text-sm"
                      >
                        {interest}
                        <button
                          type="button"
                          onClick={() =>
                            setInterests(
                              interests.filter((i) => i !== interest)
                            )
                          }
                          className="ml-2 text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
                        >
                          ×
                        </button>
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Add an interest"
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          const newInterest = e.currentTarget.value.trim();
                          if (newInterest && !interests.includes(newInterest)) {
                            setInterests([...interests, newInterest]);
                            e.currentTarget.value = "";
                          }
                        }
                      }}
                    />
                    <Button
                      type="button"
                      onClick={() => {
                        const input = document.querySelector(
                          'input[placeholder="Add an interest"]'
                        );
                        const newInterest = input.value.trim();
                        if (newInterest && !interests.includes(newInterest)) {
                          setInterests([...interests, newInterest]);
                          input.value = "";
                        }
                      }}
                    >
                      Add
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Security Settings */}
            <Card id="security">
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
                <CardDescription>
                  Manage your account security and login preferences.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="two-factor-auth">
                      Two-Factor Authentication
                    </Label>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      Add an extra layer of security to your account
                    </p>
                  </div>
                  <Switch
                    id="two-factor-auth"
                    checked={twoFactorAuth}
                    onCheckedChange={setTwoFactorAuth}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="login-alerts">Login Alerts</Label>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      Receive alerts for new login attempts
                    </p>
                  </div>
                  <Switch
                    id="login-alerts"
                    checked={loginAlerts}
                    onCheckedChange={setLoginAlerts}
                  />
                </div>
                <Separator />
                <div className="space-y-2">
                  <Label>Device Management</Label>
                  <ScrollArea className="h-[200px] w-full rounded-md border p-4">
                    {deviceManagement.map((device) => (
                      <div
                        key={device.id}
                        className="flex items-center justify-between py-2"
                      >
                        <div>
                          <p className="font-medium">{device.name}</p>
                          <p className="text-sm text-zinc-500 dark:text-zinc-400">
                            Last used:{" "}
                            {new Date(device.lastUsed).toLocaleString()}
                          </p>
                        </div>
                        <Button variant="outline" size="sm">
                          Remove
                        </Button>
                      </div>
                    ))}
                  </ScrollArea>
                </div>
                <Button variant="outline" className="w-full">
                  Change Password
                </Button>
              </CardContent>
            </Card>

            {/* Social Media Integration */}
            <Card id="social">
              <CardHeader>
                <CardTitle>Social Media Integration</CardTitle>
                <CardDescription>
                  Connect your social media accounts for easier networking.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Github className="h-5 w-5" />
                    <Label>GitHub</Label>
                  </div>
                  {linkedAccounts.github ? (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        setLinkedAccounts({ ...linkedAccounts, github: "" })
                      }
                    >
                      Disconnect
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      onClick={() =>
                        setLinkedAccounts({
                          ...linkedAccounts,
                          github: "connected",
                        })
                      }
                    >
                      Connect
                    </Button>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Linkedin className="h-5 w-5" />
                    <Label>LinkedIn</Label>
                  </div>
                  {linkedAccounts.linkedin ? (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        setLinkedAccounts({ ...linkedAccounts, linkedin: "" })
                      }
                    >
                      Disconnect
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      onClick={() =>
                        setLinkedAccounts({
                          ...linkedAccounts,
                          linkedin: "connected",
                        })
                      }
                    >
                      Connect
                    </Button>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Twitter className="h-5 w-5" />
                    <Label>Twitter</Label>
                  </div>
                  {linkedAccounts.twitter ? (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        setLinkedAccounts({ ...linkedAccounts, twitter: "" })
                      }
                    >
                      Disconnect
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      onClick={() =>
                        setLinkedAccounts({
                          ...linkedAccounts,
                          twitter: "connected",
                        })
                      }
                    >
                      Connect
                    </Button>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Facebook className="h-5 w-5" />
                    <Label>Facebook</Label>
                  </div>
                  {linkedAccounts.facebook ? (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        setLinkedAccounts({ ...linkedAccounts, facebook: "" })
                      }
                    >
                      Disconnect
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      onClick={() =>
                        setLinkedAccounts({
                          ...linkedAccounts,
                          facebook: "connected",
                        })
                      }
                    >
                      Connect
                    </Button>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Instagram className="h-5 w-5" />
                    <Label>Instagram</Label>
                  </div>
                  {linkedAccounts.instagram ? (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        setLinkedAccounts({ ...linkedAccounts, instagram: "" })
                      }
                    >
                      Disconnect
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      onClick={() =>
                        setLinkedAccounts({
                          ...linkedAccounts,
                          instagram: "connected",
                        })
                      }
                    >
                      Connect
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Activity Log */}
            <Card id="activity">
              <CardHeader>
                <CardTitle>Activity Log</CardTitle>
                <CardDescription>
                  Review your recent account activity.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[300px] w-full rounded-md border p-4">
                  {activityLog.map((activity) => (
                    <div key={activity.id} className="mb-4 last:mb-0">
                      <p className="font-medium">{activity.action}</p>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        {new Date(activity.date).toLocaleString()}
                      </p>
                    </div>
                  ))}
                </ScrollArea>
              </CardContent>
            </Card>

            {/* Data Management */}
            <Card id="data">
              <CardHeader>
                <CardTitle>Data Management</CardTitle>
                <CardDescription>
                  Manage your data and account information.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="data-export">Export Your Data</Label>
                  <Select value={dataFormat} onValueChange={setDataFormat}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select data format" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="json">JSON</SelectItem>
                      <SelectItem value="csv">CSV</SelectItem>
                      <SelectItem value="pdf">PDF</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Export Data
                </Button>
                <Separator />
                <div className="space-y-2">
                  <Label htmlFor="data-import">Import Data</Label>
                  <Input id="data-import" type="file" />
                </div>
                <Button className="w-full">
                  <Upload className="mr-2 h-4 w-4" />
                  Import Data
                </Button>
                <Separator />
                <div className="space-y-2">
                  <Label>Data Retention</Label>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    Choose how long we keep your data
                  </p>
                  <Select defaultValue="1year">
                    <SelectTrigger>
                      <SelectValue placeholder="Select retention period" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="6months">6 months</SelectItem>
                      <SelectItem value="1year">1 year</SelectItem>
                      <SelectItem value="2years">2 years</SelectItem>
                      <SelectItem value="indefinite">Indefinite</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Accessibility Settings */}
            <Card id="accessibility">
              <CardHeader>
                <CardTitle>Accessibility Settings</CardTitle>
                <CardDescription>
                  Customize your experience to make the platform more
                  accessible.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="font-size">Font Size</Label>
                  <Select value={fontSize} onValueChange={setFontSize}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select font size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">Small</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="large">Large</SelectItem>
                      <SelectItem value="x-large">Extra Large</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="high-contrast">High Contrast Mode</Label>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      Increase contrast for better readability
                    </p>
                  </div>
                  <Switch
                    id="high-contrast"
                    checked={highContrast}
                    onCheckedChange={setHighContrast}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="reduce-motion">Reduce Motion</Label>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      Minimize animations and transitions
                    </p>
                  </div>
                  <Switch
                    id="reduce-motion"
                    checked={reduceMotion}
                    onCheckedChange={setReduceMotion}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="screen-reader">
                      Screen Reader Optimization
                    </Label>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      Optimize content for screen readers
                    </p>
                  </div>
                  <Switch
                    id="screen-reader"
                    checked={screenReader}
                    onCheckedChange={setScreenReader}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Help & Support */}
            <Card id="help">
              <CardHeader>
                <CardTitle>Help & Support</CardTitle>
                <CardDescription>
                  Get assistance and find answers to your questions.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">
                    Frequently Asked Questions
                  </h3>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>
                        How do I change my password?
                      </AccordionTrigger>
                      <AccordionContent>
                        To change your password, go to the Security section in
                        your account settings. Click on "Change Password" and
                        follow the prompts to set a new password.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>
                        How can I delete my account?
                      </AccordionTrigger>
                      <AccordionContent>
                        To delete your account, go to the bottom of the Account
                        settings page and click on "Delete Account". Please note
                        that this action is irreversible and will permanently
                        remove all your data.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>
                        How do I update my job preferences?
                      </AccordionTrigger>
                      <AccordionContent>
                        You can update your job preferences in the Preferences
                        section of your account settings. Here you can set your
                        desired job types, salary range, and other preferences.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
                <Separator />
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Contact Support</h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    If you need further assistance, please don't hesitate to
                    contact our support team.
                  </p>
                  <Button className="w-full">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Contact Support
                  </Button>
                </div>
                <Separator />
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Documentation</h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    Check out our comprehensive documentation for detailed
                    guides and tutorials.
                  </p>
                  <Button variant="outline" className="w-full">
                    <BookOpen className="mr-2 h-4 w-4" />
                    View Documentation
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Save Changes */}
            <div className="flex justify-end space-x-4">
              <Button variant="outline" onClick={() => router.back()}>
                Cancel
              </Button>
              <Button onClick={handleSaveSettings}>
                {isLoading && (
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                )}
                Save Changes
              </Button>
            </div>

            {/* Danger Zone */}
            <Card className="border-red-500">
              <CardHeader>
                <CardTitle className="text-red-500">Danger Zone</CardTitle>
                <CardDescription>
                  Irreversible and destructive actions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Delete Account</Label>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      Permanently delete your account and all associated data
                    </p>
                  </div>
                  <Button variant="destructive" onClick={handleDeleteAccount}>
                    Delete Account
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
