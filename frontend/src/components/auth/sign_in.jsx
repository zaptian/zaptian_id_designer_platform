import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Lottie from "lottie-react"
import signUpAnimation from "../../assets/anime/sign_up.json"
import logoLight from "../../assets/logo/logo_light.png"
import logoDark from "../../assets/logo/logo_dark.png"

function SignIn() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const newErrors = {}

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email"
    }

    if (!formData.password) {
      newErrors.password = "Password is required"
    }

    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    setErrors((prev) => ({ ...prev, [name]: "" }))
  }

  const handleSubmit = async () => {
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setLoading(true)
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email: formData.email,
        password: formData.password,
      })

      if (response.status === 200) {
        console.log("Login successful:", response.data)
        // TODO: navigate to dashboard
        navigate("/")
      }

    } catch (error) {
      if (error.response) {
        const { status, data } = error.response
        if (status === 401 || status === 404) {
          setErrors((prev) => ({ ...prev, email: "Invalid credentials" }))
        } else {
          console.error("Server error:", data.message)
        }
      } else {
        console.error("Network error:", error.message)
      }
    } finally {
      setLoading(false)
    }
  }

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-xl text-sm font-dm bg-input-light-background dark:bg-input-dark-background border ${
      errors[field] ? "border-button-danger" : "border-input-light-border dark:border-input-dark-border"
    } text-input-light-text dark:text-input-dark-text placeholder:text-input-light-placeholder dark:placeholder:text-input-dark-placeholder focus:outline-none focus:border-input-light-border-focus dark:focus:border-input-dark-border-focus transition-all`

  const EyeOpen = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
    </svg>
  )

  const EyeOff = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
      <line x1="1" y1="1" x2="23" y2="23"/>
    </svg>
  )

  return (
    <div className="min-h-screen flex items-center bg-light-bg dark:bg-dark-bg p-6 gap-6">

      {/* ---- LEFT PANEL ---- */}
      <div className="hidden md:flex w-1/2 h-full">
        {/* Floating Card */}
        <div className="w-full flex flex-col bg-light-card1 dark:bg-dark-card1 border border-light-border dark:border-dark-border rounded-3xl p-8 min-h-[calc(100vh-3rem)] shadow-sm">

          {/* Top Row */}
          <div className="flex items-center justify-between">
            {/* Logo */}
            <img src={logoLight} alt="Zaptian Logo" className="h-8 object-contain block dark:hidden" />
            <img src={logoDark} alt="Zaptian Logo" className="h-8 object-contain hidden dark:block" />

            {/* Back to website */}
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 text-sm font-dm font-medium text-light-text2 dark:text-dark-text2 border border-light-border dark:border-dark-border rounded-full px-4 py-2 hover:bg-light-hover dark:hover:bg-dark-hover transition-all duration-200"
            >
              Back to website →
            </button>
          </div>

          {/* Center Animation */}
          <div className="flex-1 flex items-center justify-center">
            <Lottie animationData={signUpAnimation} loop={true} className="w-4/5 max-w-md" />
          </div>

          {/* Bottom Slogan */}
          <div className="text-center">
            <p className="text-lg font-black font-dm text-light-text1 dark:text-dark-text1 leading-snug">
              Welcome back to —{" "}
              <span className="text-button-primary">Zaptian ID Designer</span>
            </p>
          </div>

        </div>
      </div>

      {/* ---- RIGHT PANEL ---- */}
      <div className="w-full md:w-1/2 flex items-center justify-center overflow-y-auto">
        <div className="w-full max-w-md flex flex-col gap-5 py-6">

          {/* Heading */}
          <h1 className="text-3xl font-black font-dm text-light-text1 dark:text-dark-text1">
            Sign in to your account
          </h1>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <input type="email" name="email" placeholder="Email"
              value={formData.email} onChange={handleChange} className={inputClass("email")} />
            {errors.email && <p className="text-xs text-button-danger font-dm">{errors.email}</p>}
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1">
            <div className="relative">
              <input type={showPassword ? "text" : "password"} name="password"
                placeholder="Password" value={formData.password}
                onChange={handleChange} className={`${inputClass("password")} pr-12`} />
              <button type="button" onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-input-light-placeholder dark:text-input-dark-placeholder hover:text-light-text1 dark:hover:text-dark-text1 transition-colors">
                {showPassword ? <EyeOff /> : <EyeOpen />}
              </button>
            </div>
            {errors.password && <p className="text-xs text-button-danger font-dm">{errors.password}</p>}
          </div>

          {/* Forgot Password Link */}
          <div className="flex justify-end mt-[-10px]">
            <span className="text-sm font-dm text-button-primary hover:underline cursor-pointer">
              Forgot password?
            </span>
          </div>

          {/* Sign In Button */}
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full py-3 rounded-xl bg-button-primary hover:bg-button-primary-hover active:bg-button-primary-active text-button-primary-text font-dm font-semibold text-sm transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
           >
            {loading ? "Signing in..." : "Sign in"}
           </button>

          {/* Or sign in with */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-light-border dark:bg-dark-border" />
            <span className="text-xs font-dm text-light-text2 dark:text-dark-text2 whitespace-nowrap">or sign in with</span>
            <div className="flex-1 h-px bg-light-border dark:bg-dark-border" />
          </div>

          {/* Google Button */}
          <button className="w-full flex items-center justify-center gap-3 py-3 rounded-xl border border-light-border dark:border-dark-border bg-light-card1 dark:bg-dark-card1 hover:bg-light-hover dark:hover:bg-dark-hover text-light-text1 dark:text-dark-text1 font-dm font-medium text-sm transition-all duration-200">
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </button>

          {/* Don't have an account */}
          <p className="text-center text-sm font-dm text-light-text2 dark:text-dark-text2 mt-2">
            Don't have an account?{" "}
            <span onClick={() => navigate("/sign_up")}
              className="text-button-primary font-semibold hover:underline cursor-pointer">
              Sign up
            </span>
          </p>

        </div>
      </div>

    </div>
  )
}

export default SignIn
