import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Lottie from "lottie-react"
import signUpAnimation from "../../assets/anime/sign_up.json"
import logoApp from "../../assets/logo/logo_app.webp"
import { Mail, Lock, Eye, EyeOff, ArrowLeft, ArrowRight } from "lucide-react"

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
              <ArrowLeft size={16} className="group-hover/btn:-translate-x-1 transition-transform" />
              Back to website
            </button>
          </div>

          {/* Center Animation */}
          <div className="flex-1 flex flex-col items-center justify-center relative z-10">
            <div className="relative w-full max-w-lg">
               <div className="absolute inset-0 bg-button-primary/10 rounded-full blur-[80px]" />
               <Lottie animationData={signUpAnimation} loop={true} className="w-full relative z-10 drop-shadow-2xl hover:scale-105 transition-transform duration-700" />
            </div>
          </div>

          {/* Bottom Slogan */}
          <div className="relative z-10 pl-2">
            <h2 className="text-3xl lg:text-4xl font-black leading-tight tracking-tight mb-3">
              Unlock Your <br/> <span className="text-button-primary">Design Potential</span>
            </h2>
            <p className="text-light-text2 dark:text-gray-400 font-medium text-lg leading-relaxed max-w-md">
              Securely access Zaptian ID Designer and start building professional credentials instantly.
            </p>
          </div>

        </div>
      </div>

      {/* ---- RIGHT PANEL (Auth Portal) ---- */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4">
        <div className="w-full max-w-[420px] flex flex-col gap-6 animate-slideUp">

          {/* Heading */}
          <div className="text-center md:text-left mb-2">
             {/* Mobile Logo Fallback */}
             <div className="flex justify-center md:hidden mb-8">
                <img src={logoApp} alt="Zaptian Logo" className="w-auto h-24 object-contain" />
             </div>
            <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-3">
              Welcome Back
            </h1>
            <p className="text-light-text2 dark:text-gray-400 font-medium">
              Enter your credentials to access your account.
            </p>
          </div>

          {/* Form Fields */}
          <div className="flex flex-col gap-5">
             {/* Email */}
             <div className="flex flex-col gap-2">
               <label className="text-sm font-bold text-light-text1 dark:text-gray-300 ml-1">Email Address</label>
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
                   className={`w-full pl-11 pr-4 py-3.5 rounded-xl bg-white dark:bg-[#14151a] border ${errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-light-border dark:border-white/10'} placeholder:text-gray-400 focus:outline-none focus:border-button-primary focus:ring-1 focus:ring-button-primary text-light-text1 dark:text-white transition-all shadow-inner`}
                 />
               </div>
               {errors.email && <p className="text-xs text-red-500 font-semibold ml-1">{errors.email}</p>}
             </div>

             {/* Password */}
             <div className="flex flex-col gap-2">
               <label className="text-sm font-bold text-light-text1 dark:text-gray-300 ml-1">Password</label>
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
                   className={`w-full pl-11 pr-12 py-3.5 rounded-xl bg-white dark:bg-[#14151a] border ${errors.password ? 'border-red-500 ring-1 ring-red-500' : 'border-light-border dark:border-white/10'} placeholder:text-gray-400 focus:outline-none focus:border-button-primary focus:ring-1 focus:ring-button-primary text-light-text1 dark:text-white transition-all shadow-inner`}
                 />
                 <button 
                   type="button" 
                   onClick={() => setShowPassword(!showPassword)}
                   className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-button-primary transition-colors"
                 >
                   {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                 </button>
               </div>
               {errors.password && <p className="text-xs text-red-500 font-semibold ml-1">{errors.password}</p>}
             </div>
          </div>

          {/* Forgot Password */}
          <div className="flex justify-between items-center px-1">
            <label className="flex items-center gap-2 cursor-pointer group/cb">
               <div className="relative flex items-center justify-center">
                  <input type="checkbox" className="appearance-none w-4 h-4 rounded border border-light-border dark:border-white/20 bg-white dark:bg-[#14151a] checked:bg-button-primary checked:border-button-primary transition-colors cursor-pointer" />
                  <svg className="absolute w-3 h-3 text-white opacity-0 pointer-events-none check-icon" viewBox="0 0 14 14" fill="none"><path d="M3 8L6 11L11 3.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"></path></svg>
               </div>
               <span className="text-sm font-medium text-light-text2 dark:text-gray-400 group-hover/cb:text-light-text1 dark:group-hover/cb:text-white transition-colors">Remember me</span>
            </label>

            <span className="text-sm font-bold text-button-primary hover:text-button-primary-hover hover:underline cursor-pointer transition-colors">
              Forgot password?
            </span>
          </div>

          {/* Sign In Button */}
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full py-4 mt-2 bg-gradient-to-r from-button-primary to-[#0f4c9c] text-white font-black rounded-xl hover:shadow-[0_0_20px_-5px_rgba(var(--button-primary),0.5)] transition-all hover:-translate-y-1 flex items-center justify-center gap-2 text-lg active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed group/submit"
           >
            {loading ? "Authenticating..." : "Sign in"}
            {!loading && <ArrowRight size={18} className="group-hover/submit:translate-x-1 transition-transform" />}
           </button>

          {/* Divider */}
          <div className="flex items-center gap-4 my-2">
            <div className="flex-1 h-px bg-light-border dark:bg-white/10" />
            <span className="text-xs font-bold text-light-text2 dark:text-gray-500 uppercase tracking-wider">or continue with</span>
            <div className="flex-1 h-px bg-light-border dark:bg-white/10" />
          </div>

          {/* Google Button */}
          <button className="w-full flex items-center justify-center gap-3 py-3.5 rounded-xl border border-light-border dark:border-white/10 bg-white dark:bg-[#14151a] hover:bg-light-bg dark:hover:bg-white/5 text-light-text1 dark:text-white font-bold transition-all duration-200 outline-none focus:ring-2 focus:ring-button-primary/50 shadow-sm active:scale-95">
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Google Sign-in
          </button>

          {/* Sign Up Link */}
          <p className="text-center font-medium text-light-text2 dark:text-gray-400 mt-2">
            Don't have an account?{" "}
            <span onClick={() => navigate("/sign_up")}
              className="text-button-primary font-bold hover:text-button-primary-hover hover:underline cursor-pointer transition-colors"
            >
              Get started
            </span>
          </p>

        </div>
      </div>

    </div>
  )
}

export default SignIn
