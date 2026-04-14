import { useState } from "react";
import { requestDemoData as data } from "../../data/request_demo_data/data";
import { CheckCircle2, CalendarDays, ArrowRight, ChevronDown } from "lucide-react";

function RequestDemo() {
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    company: "",
    industry: "",
    estimatedIds: "",
    preferredDate: "",
    additionalReqs: ""
  });
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Demo Request Submitted", formData);
    // Add success logic here
  };

  return (
    <div className="w-full bg-light-bg dark:bg-dark-bg font-dm flex flex-col pt-16 pb-24 text-light-text1 dark:text-dark-text1 overflow-x-hidden min-h-screen">
      
      {/* ─── Header ────────────────────────────── */}
      <div className="px-6 max-w-5xl mx-auto w-full text-center items-center flex flex-col mb-16">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-button-primary/30 bg-button-primary/10 text-button-primary text-xs font-semibold uppercase tracking-widest mb-6">
          {data.hero.badge}
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] font-black leading-tight tracking-tight">
          {data.hero.title}
        </h1>
      </div>

      {/* ─── Split Content ──────────────────────── */}
      <section className="px-6 max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-16 lg:gap-12">
        
        {/* LEFT: Context Information */}
        <div className="flex-1 flex flex-col gap-10 lg:pr-8">
           {/* What to expect */}
           <div>
              <h3 className="text-2xl font-bold mb-4">{data.whatToExpect.title}</h3>
              <p className="text-light-text2 dark:text-dark-text2 text-lg leading-relaxed">{data.whatToExpect.description}</p>
           </div>

           {/* Demo Covers */}
           <div className="p-8 rounded-[2rem] bg-light-card1 dark:bg-dark-card1 border border-light-border dark:border-dark-border shadow-sm">
              <h3 className="text-xl font-bold mb-6">{data.demoCovers.title}</h3>
              <ul className="space-y-4">
                 {data.demoCovers.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                       <CheckCircle2 size={20} className="text-emerald-500 shrink-0 mt-0.5" />
                       <span className="text-[0.95rem] font-medium text-light-text1 dark:text-dark-text1 leading-relaxed">{item}</span>
                    </li>
                 ))}
              </ul>
           </div>

           {/* After Submit */}
           <div>
              <h3 className="text-xl font-bold mb-4">{data.afterSubmit.title}</h3>
              <ul className="space-y-4 border-l-2 border-button-primary/20 pl-5 ml-1">
                 {data.afterSubmit.items.map((item, idx) => (
                    <li key={idx} className="text-light-text2 dark:text-dark-text2 text-[0.95rem] font-medium relative leading-relaxed">
                       <span className="absolute -left-[25px] top-2.5 w-2 h-2 rounded-full bg-button-primary" />
                       {item}
                    </li>
                 ))}
              </ul>
           </div>
        </div>

        {/* RIGHT: Demo Request Form */}
        <div className="flex-1 w-full lg:max-w-[550px] shrink-0">
           <div className="p-8 sm:p-10 rounded-[2rem] bg-light-card1/80 dark:bg-dark-card1/80 backdrop-blur-xl border border-light-border dark:border-dark-border shadow-2xl shadow-button-primary/5 relative overflow-hidden">
             
             {/* Decorative Background Blob */}
             <div className="absolute -top-24 -right-24 w-64 h-64 bg-button-primary/10 rounded-full blur-3xl pointer-events-none" />
             
             <h3 className="text-2xl font-black mb-8 flex items-center gap-3">
                <CalendarDays className="text-button-primary" size={28} />
                {data.form.title}
             </h3>

             <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10 w-full">
                
                {/* Full Name & Email */}
                <div className="flex flex-col sm:flex-row gap-6">
                   <div className="flex-1">
                     <label className="block text-xs font-bold uppercase tracking-wider text-light-text2 dark:text-dark-text2 mb-2 ml-1">Full Name</label>
                     <input type="text" name="fullName" required value={formData.fullName} onChange={handleChange} className="w-full px-4 py-3.5 rounded-xl bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border focus:border-button-primary focus:ring-1 focus:ring-button-primary outline-none transition-all placeholder:text-light-text2/50 text-[0.95rem] font-medium" placeholder="John Doe" />
                   </div>
                   <div className="flex-1">
                     <label className="block text-xs font-bold uppercase tracking-wider text-light-text2 dark:text-dark-text2 mb-2 ml-1">Work Email</label>
                     <input type="email" name="workEmail" required value={formData.workEmail} onChange={handleChange} className="w-full px-4 py-3.5 rounded-xl bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border focus:border-button-primary focus:ring-1 focus:ring-button-primary outline-none transition-all placeholder:text-light-text2/50 text-[0.95rem] font-medium" placeholder="john@company.com" />
                   </div>
                </div>

                {/* Company & Industry */}
                <div className="flex flex-col sm:flex-row gap-6">
                   <div className="flex-1">
                     <label className="block text-xs font-bold uppercase tracking-wider text-light-text2 dark:text-dark-text2 mb-2 ml-1">Company</label>
                     <input type="text" name="company" required value={formData.company} onChange={handleChange} className="w-full px-4 py-3.5 rounded-xl bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border focus:border-button-primary focus:ring-1 focus:ring-button-primary outline-none transition-all placeholder:text-light-text2/50 text-[0.95rem] font-medium" placeholder="Acme Corp" />
                   </div>
                   <div className="flex-1 relative z-20">
                     <label className="block text-xs font-bold uppercase tracking-wider text-light-text2 dark:text-dark-text2 mb-2 ml-1">Industry</label>
                     <div className="relative">
                       <button
                         type="button"
                         onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                         className={`w-full px-4 py-3.5 rounded-xl bg-light-bg dark:bg-dark-bg border transition-all text-left flex justify-between items-center text-[0.95rem] font-medium ${isDropdownOpen ? 'border-button-primary ring-1 ring-button-primary' : 'border-light-border dark:border-dark-border'} ${!formData.industry ? 'text-light-text2/50 dark:text-light-text2/40' : 'text-light-text1 dark:text-dark-text1'}`}
                       >
                         {formData.industry || "Select..."}
                         <ChevronDown size={16} className={`text-light-text2 dark:text-dark-text2 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180 text-button-primary' : ''}`} />
                       </button>
                       
                       {/* Custom Dropdown Menu */}
                       {isDropdownOpen && (
                         <div className="absolute top-[calc(100%+8px)] left-0 w-full py-2 rounded-xl bg-light-card1 dark:bg-dark-card1 border border-light-border dark:border-dark-border shadow-xl z-50">
                            {data.form.industries.map((ind, i) => (
                              <button
                                key={i}
                                type="button"
                                onClick={() => {
                                  setFormData({ ...formData, industry: ind });
                                  setIsDropdownOpen(false);
                                }}
                                className={`w-full text-left px-5 py-2.5 text-[0.95rem] font-medium transition-colors hover:bg-light-hover dark:hover:bg-dark-hover ${formData.industry === ind ? 'text-button-primary bg-button-primary/5' : 'text-light-text1 dark:text-dark-text1'}`}
                              >
                                {ind}
                              </button>
                            ))}
                         </div>
                       )}
                     </div>
                   </div>
                </div>

                {/* IDs per Month & Date */}
                <div className="flex flex-col sm:flex-row gap-6">
                   <div className="flex-1">
                     <label className="block text-xs font-bold uppercase tracking-wider text-light-text2 dark:text-dark-text2 mb-2 ml-1">Est. IDs/Month</label>
                     <input type="number" name="estimatedIds" required value={formData.estimatedIds} onChange={handleChange} className="w-full px-4 py-3.5 rounded-xl bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border focus:border-button-primary focus:ring-1 focus:ring-button-primary outline-none transition-all placeholder:text-light-text2/50 text-[0.95rem] font-medium" placeholder="e.g. 500" />
                   </div>
                   <div className="flex-1 group">
                     <label className="block text-xs font-bold uppercase tracking-wider text-light-text2 dark:text-dark-text2 mb-2 ml-1">Preferred Date</label>
                     <div className="relative flex items-center">
                       {/* Custom Icon Overlay */}
                       <div className="absolute left-4 z-10 text-button-primary/60 group-focus-within:text-button-primary pointer-events-none transition-colors">
                          <CalendarDays size={18} />
                       </div>
                       
                       <input 
                         type="date" 
                         name="preferredDate" 
                         required 
                         value={formData.preferredDate} 
                         onChange={handleChange} 
                         className={`w-full pl-11 pr-4 py-3.5 rounded-xl bg-light-bg dark:bg-dark-bg border hover:border-button-primary/40 focus:border-button-primary focus:ring-1 focus:ring-button-primary outline-none transition-all text-[0.95rem] font-medium shadow-sm relative z-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:cursor-pointer [color-scheme:light] dark:[color-scheme:dark] ${!formData.preferredDate ? 'text-light-text2/50 dark:text-light-text2/50 border-light-border dark:border-dark-border' : 'text-light-text1 dark:text-dark-text1 border-button-primary/30'}`} 
                       />
                     </div>
                   </div>
                </div>

                {/* Additional Reqs */}
                <div>
                   <label className="block text-xs font-bold uppercase tracking-wider text-light-text2 dark:text-dark-text2 mb-2 ml-1">Additional Requirements <span className="opacity-60">(Optional)</span></label>
                   <textarea name="additionalReqs" value={formData.additionalReqs} onChange={handleChange} rows={3} className="w-full px-4 py-3.5 rounded-xl bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border focus:border-button-primary focus:ring-1 focus:ring-button-primary outline-none transition-all placeholder:text-light-text2/50 resize-none text-[0.95rem] font-medium" placeholder="Tell us about specific integrations or custom features you need..."></textarea>
                </div>

                <button type="submit" className="w-full mt-4 py-4 rounded-xl bg-button-primary hover:bg-button-primary-hover text-white font-bold text-[1rem] shadow-lg shadow-button-primary/30 flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-0.5">
                   {data.form.submitLabel}
                   <ArrowRight size={18} />
                </button>
             </form>
           </div>
        </div>

      </section>
    </div>
  );
}

export default RequestDemo;
