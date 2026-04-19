import { useState } from "react";
import { api } from "../../lib/api";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import signUpAnimation from "../../assets/anime/sign_up.json";
import logoApp from "../../assets/logo/logo_app.webp";
import { useAuth } from "../../context/AuthContext";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowLeft,
  ArrowRight,
  User,
  Phone,
} from "lucide-react";

function SignUp() {
  const navigate = useNavigate();
  const { login } = useAuth();
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";

    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter a valid 10-digit mobile number";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (
      !/(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/.test(formData.password)
    ) {
      newErrors.password = "Must include uppercase, number & special character";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.agreeTerms)
      newErrors.agreeTerms = "You must agree to the terms";

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    try {
      const response = await api.post("/auth/register", {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        mobile: formData.mobile,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      });

      if (response.token) {
        console.log("Account created:", response);
        login(response.token);
        navigate("/");
      } else {
        throw new Error("Registration succeeded but no token was provided.");
      }
    } catch (error) {
      const message = error.message || "Something went wrong";
      if (message.toLowerCase().includes("email")) {
        setErrors((prev) => ({ ...prev, email: message }));
      } else if (message.toLowerCase().includes("mobile")) {
        setErrors((prev) => ({ ...prev, mobile: message }));
      } else {
        console.error("Registration error:", message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center bg-light-bg dark:bg-dark-bg p-4 md:p-6 lg:p-8 gap-8 overflow-hidden font-dm text-light-text1 dark:text-dark-text1">
      <style>
        {`
           .check-icon { display: none; }
           input:checked ~ .check-icon { display: block; opacity: 1; }
         `}
      </style>

      {/* ---- LEFT PANEL (Immersive Brand Experience) ---- */}
      <div className="hidden lg:flex w-1/2 h-full min-h-[calc(100vh-4rem)] relative group">
        <div className="absolute inset-0 bg-button-primary/5 dark:bg-button-primary/10 rounded-[3rem] blur-[80px] pointer-events-none transition-all duration-1000 group-hover:bg-button-primary/20" />

        <div className="w-full h-full flex flex-col bg-light-card1 dark:bg-[#0c0c0e]/80 border border-light-border dark:border-white/5 rounded-[3rem] p-12 shadow-2xl relative z-10 overflow-hidden backdrop-blur-xl">
          {/* Ambient Lighting */}
          <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-button-primary/20 rounded-full blur-[120px] pointer-events-none" />

          {/* Top Row */}
          <div className="flex items-center justify-between relative z-10">
            {/* Back to website */}
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 text-sm font-bold text-light-text2 dark:text-gray-400 border border-light-border dark:border-white/10 rounded-full px-5 py-2.5 hover:bg-light-hover dark:hover:bg-white/5 hover:text-light-text1 dark:hover:text-white transition-all shadow-sm active:scale-95 group/btn"
            >
              <ArrowLeft
                size={16}
                className="group-hover/btn:-translate-x-1 transition-transform"
              />
              Back to website
            </button>
          </div>

          {/* Center Animation */}
          <div className="flex-1 flex flex-col items-center justify-center relative z-10">
            <div className="relative w-full max-w-lg">
              <div className="absolute inset-0 bg-button-primary/10 rounded-full blur-[80px]" />
              <Lottie
                animationData={signUpAnimation}
                loop={true}
                className="w-full relative z-10 drop-shadow-2xl hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Bottom Slogan */}
          <div className="relative z-10 pl-2">
            <h2 className="text-3xl lg:text-4xl font-black leading-tight tracking-tight mb-3">
              Design, Print, Verify <br />{" "}
              <span className="text-button-primary">Effortlessly</span>
            </h2>
            <p className="text-light-text2 dark:text-gray-400 font-medium text-lg leading-relaxed max-w-md">
              Securely access Zaptian ID Designer and start building
              professional credentials instantly.
            </p>
          </div>
        </div>
      </div>

      {/* ---- RIGHT PANEL (Auth Portal) ---- */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4">
        <div className="w-full max-w-[460px] flex flex-col gap-6 animate-slideUp">
          {/* Heading */}
          <div className="text-center md:text-left mb-2">
            {/* Mobile Logo Fallback */}
            <div className="flex justify-center md:hidden mb-8">
              <img
                src={logoApp}
                alt="Zaptian Logo"
                className="w-auto h-24 object-contain"
              />
            </div>
            <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-3">
              Create an account
            </h1>
            <p className="text-light-text2 dark:text-gray-400 font-medium">
              Join thousands of organizations generating secure credentials.
            </p>
          </div>

          {/* Form Fields */}
          <div className="flex flex-col gap-5">
            {/* First Name & Last Name */}
            <div className="flex flex-col sm:flex-row gap-5">
              <div className="flex-1 flex flex-col gap-2">
                <label className="text-sm font-bold text-light-text1 dark:text-gray-300 ml-1">
                  First Name
                </label>
                <div className="relative group/input">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within/input:text-button-primary transition-colors">
                    <User size={18} />
                  </div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full pl-11 pr-4 py-3.5 rounded-xl bg-white dark:bg-[#14151a] border ${errors.firstName ? "border-red-500 ring-1 ring-red-500" : "border-light-border dark:border-white/10"} placeholder:text-gray-400 focus:outline-none focus:border-button-primary focus:ring-1 focus:ring-button-primary text-light-text1 dark:text-white transition-all shadow-inner`}
                  />
                </div>
                {errors.firstName && (
                  <p className="text-xs text-red-500 font-semibold ml-1">
                    {errors.firstName}
                  </p>
                )}
              </div>

              <div className="flex-1 flex flex-col gap-2">
                <label className="text-sm font-bold text-light-text1 dark:text-gray-300 ml-1">
                  Last Name
                </label>
                <div className="relative group/input">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within/input:text-button-primary transition-colors">
                    <User size={18} />
                  </div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-full pl-11 pr-4 py-3.5 rounded-xl bg-white dark:bg-[#14151a] border ${errors.lastName ? "border-red-500 ring-1 ring-red-500" : "border-light-border dark:border-white/10"} placeholder:text-gray-400 focus:outline-none focus:border-button-primary focus:ring-1 focus:ring-button-primary text-light-text1 dark:text-white transition-all shadow-inner`}
                  />
                </div>
                {errors.lastName && (
                  <p className="text-xs text-red-500 font-semibold ml-1">
                    {errors.lastName}
                  </p>
                )}
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-light-text1 dark:text-gray-300 ml-1">
                Email Address
              </label>
              <div className="relative group/input">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within/input:text-button-primary transition-colors">
                  <Mail size={18} />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full pl-11 pr-4 py-3.5 rounded-xl bg-white dark:bg-[#14151a] border ${errors.email ? "border-red-500 ring-1 ring-red-500" : "border-light-border dark:border-white/10"} placeholder:text-gray-400 focus:outline-none focus:border-button-primary focus:ring-1 focus:ring-button-primary text-light-text1 dark:text-white transition-all shadow-inner`}
                />
              </div>
              {errors.email && (
                <p className="text-xs text-red-500 font-semibold ml-1">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Mobile */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-light-text1 dark:text-gray-300 ml-1">
                Mobile Number
              </label>
              <div className="relative group/input">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within/input:text-button-primary transition-colors">
                  <Phone size={18} />
                </div>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="(555) 000-0000"
                  value={formData.mobile}
                  onChange={handleChange}
                  className={`w-full pl-11 pr-4 py-3.5 rounded-xl bg-white dark:bg-[#14151a] border ${errors.mobile ? "border-red-500 ring-1 ring-red-500" : "border-light-border dark:border-white/10"} placeholder:text-gray-400 focus:outline-none focus:border-button-primary focus:ring-1 focus:ring-button-primary text-light-text1 dark:text-white transition-all shadow-inner`}
                />
              </div>
              {errors.mobile && (
                <p className="text-xs text-red-500 font-semibold ml-1">
                  {errors.mobile}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-light-text1 dark:text-gray-300 ml-1">
                Create Password
              </label>
              <div className="relative group/input">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within/input:text-button-primary transition-colors">
                  <Lock size={18} />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full pl-11 pr-12 py-3.5 rounded-xl bg-white dark:bg-[#14151a] border ${errors.password ? "border-red-500 ring-1 ring-red-500" : "border-light-border dark:border-white/10"} placeholder:text-gray-400 focus:outline-none focus:border-button-primary focus:ring-1 focus:ring-button-primary text-light-text1 dark:text-white transition-all shadow-inner`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-button-primary transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.password && (
                <p className="text-xs text-red-500 font-semibold ml-1">
                  {errors.password}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-light-text1 dark:text-gray-300 ml-1">
                Confirm Password
              </label>
              <div className="relative group/input">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within/input:text-button-primary transition-colors">
                  <Lock size={18} />
                </div>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`w-full pl-11 pr-12 py-3.5 rounded-xl bg-white dark:bg-[#14151a] border ${errors.confirmPassword ? "border-red-500 ring-1 ring-red-500" : "border-light-border dark:border-white/10"} placeholder:text-gray-400 focus:outline-none focus:border-button-primary focus:ring-1 focus:ring-button-primary text-light-text1 dark:text-white transition-all shadow-inner`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-button-primary transition-colors"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-xs text-red-500 font-semibold ml-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>
          </div>

          {/* Terms Checkbox */}
          <div className="flex flex-col px-1 pt-2">
            <label className="flex items-start gap-3 cursor-pointer group/cb">
              <div className="relative flex items-center justify-center mt-0.5 shrink-0">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  className="appearance-none w-5 h-5 rounded-[4px] border border-light-border dark:border-white/20 bg-white dark:bg-[#14151a] checked:bg-button-primary checked:border-button-primary transition-colors cursor-pointer"
                />
                <svg
                  className="absolute w-3.5 h-3.5 text-white opacity-0 pointer-events-none check-icon"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M3 8L6 11L11 3.5"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke="currentColor"
                  ></path>
                </svg>
              </div>
              <span className="text-sm font-medium text-light-text2 dark:text-gray-400 leading-snug">
                I agree to the{" "}
                <span className="text-button-primary font-bold hover:underline">
                  Terms & Conditions
                </span>{" "}
                and{" "}
                <span className="text-button-primary font-bold hover:underline">
                  Privacy Policy
                </span>
              </span>
            </label>
            {errors.agreeTerms && (
              <p className="text-xs text-red-500 font-semibold ml-8 mt-1">
                {errors.agreeTerms}
              </p>
            )}
          </div>

          {/* Create Account Button */}
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full py-4 mt-2 bg-gradient-to-r from-button-primary to-[#0f4c9c] text-white font-black rounded-xl hover:shadow-[0_0_20px_-5px_rgba(var(--button-primary),0.5)] transition-all hover:-translate-y-1 flex items-center justify-center gap-2 text-lg active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed group/submit"
          >
            {loading ? "Creating Account..." : "Create Account"}
            {!loading && (
              <ArrowRight
                size={18}
                className="group-hover/submit:translate-x-1 transition-transform"
              />
            )}
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4 my-2">
            <div className="flex-1 h-px bg-light-border dark:bg-white/10" />
            <span className="text-xs font-bold text-light-text2 dark:text-gray-500 uppercase tracking-wider">
              or register with
            </span>
            <div className="flex-1 h-px bg-light-border dark:bg-white/10" />
          </div>

          {/* Google Button */}
          <button className="w-full flex items-center justify-center gap-3 py-3.5 rounded-xl border border-light-border dark:border-white/10 bg-white dark:bg-[#14151a] hover:bg-light-bg dark:hover:bg-white/5 text-light-text1 dark:text-white font-bold transition-all duration-200 outline-none focus:ring-2 focus:ring-button-primary/50 shadow-sm active:scale-95">
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Google Sign-in
          </button>

          {/* Login Link */}
          <p className="text-center font-medium text-light-text2 dark:text-gray-400 mt-2">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/sign_in")}
              className="text-button-primary font-bold hover:text-button-primary-hover hover:underline cursor-pointer transition-colors"
            >
              Log in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
