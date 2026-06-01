// import { Form, useOutletContext } from "react-router-dom";

// const AddJob = () => {
//   const { user } = useOutletContext();
//   console.log(user);

//   // const [showSuccess, setShowSuccess] = useState(false);

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   setShowSuccess(true);
//   // };

//   // Reusable classes leveraging your globals.css @theme variables and Tailwind v4
//   const activeClasses =
//     "w-full border-2 border-on-background rounded-none p-md text-body bg-surface-container-lowest transition-all focus:outline-none focus:border-primary focus:shadow-[2px_2px_0px_0px_var(--color-on-background)]";

//   return (
//     <>
//       <main className="p-lg md:p-xl grow flex justify-center bg-background min-h-screen">
//         <div className="w-full max-w-2xl">
//           <div className="mb-lg">
//             <h2 className="text-h1 uppercase leading-none">Create Listing</h2>
//             <p className="mt-md text-on-surface-variant text-body">
//               Complete the following fields to reach candidates across the
//               network.
//             </p>
//           </div>

//           <Form method="post" className="space-y-xl">
//             {/* Section: Core Details */}
//             <div className="border-4 border-on-background bg-surface-container-lowest p-lg space-y-lg">
//               <div className="flex items-center gap-sm pb-md border-b border-outline-variant">
//                 <span className="material-symbols-outlined text-primary">
//                   info
//                 </span>
//                 <span className="text-mono-label uppercase tracking-widest font-black">
//                   Primary Identification
//                 </span>
//               </div>
//               <div className="space-y-md">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
//                   <div>
//                     <label className="text-mono-label uppercase mb-xs block">
//                       Job Title <span className="text-error">*</span>
//                     </label>
//                     <input
//                       className={activeClasses}
//                       placeholder="e.g. Senior Systems Architect"
//                       required
//                       type="text"
//                     />
//                   </div>
//                   <div>
//                     <label className="text-mono-label uppercase mb-xs block">
//                       Job Location
//                     </label>
//                     <input
//                       className={activeClasses}
//                       placeholder="Cairo"
//                       type="text"
//                     />
//                   </div>
//                 </div>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
//                   <div>
//                     <label className="text-mono-label uppercase mb-xs block">
//                       Company Name
//                     </label>
//                     <input
//                       className={activeClasses}
//                       placeholder="Nexus Tech"
//                       type="text"
//                     />
//                   </div>
//                   <div>
//                     <label className="text-mono-label uppercase mb-xs block">
//                       JOB TYPE
//                     </label>
//                     <select className={activeClasses}>
//                       <option>Full-time</option>
//                       <option>Part-time</option>
//                       <option>Internship</option>
//                     </select>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Section: Logistics */}
//             <div className="space-y-lg">
//               <div className="flex items-center gap-sm pb-sm border-b-2 border-on-background">
//                 <span className="material-symbols-outlined text-primary">
//                   location_on
//                 </span>
//                 <span className="text-mono-label uppercase tracking-widest font-black">
//                   Logistics & Compensation
//                 </span>
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
//                 <div className="space-y-md">
//                   <div>
//                     <label className="text-mono-label uppercase mb-sm block">
//                       Work Mode
//                     </label>
//                     <select className={activeClasses}>
//                       <option>On-site</option>
//                       <option>Hybrid</option>
//                       <option>Remote</option>
//                     </select>
//                   </div>
//                   <div>
//                     <label className="text-mono-label uppercase mb-xs block">
//                       Job Status
//                     </label>
//                     <select className={activeClasses}>
//                       <option>Active</option>
//                       <option>Closed</option>
//                       <option>Urgent hiring</option>
//                       <option>Pending</option>
//                     </select>
//                   </div>
//                 </div>
//                 <div className="space-y-md">
//                   <div>
//                     <label className="text-mono-label uppercase mb-xs block">
//                       Annual Salary
//                     </label>
//                     <div className="relative">
//                       <span className="absolute left-md top-1/2 -translate-y-1/2 text-h3 font-black text-on-surface-variant">
//                         $
//                       </span>
//                       <input
//                         className={`${activeClasses} pl-xl font-bold`}
//                         placeholder="120,000"
//                         type="text"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <label className="text-mono-label uppercase mb-xs block">
//                       Currency
//                     </label>
//                     <select className={activeClasses}>
//                       <option>USD - United States Dollar</option>
//                       <option>EUR - Euro</option>
//                       <option>GBP - British Pound</option>
//                     </select>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Section: Description */}
//             <div className="space-y-md">
//               <div className="flex items-center gap-sm pb-sm border-b-2 border-on-background">
//                 <span className="material-symbols-outlined text-primary">
//                   description
//                 </span>
//                 <span className="text-mono-label uppercase tracking-widest font-black">
//                   Job Description
//                 </span>
//               </div>
//               <div className="border-2 border-on-background overflow-hidden">
//                 <div className="flex bg-surface-container-low border-b-2 border-on-background p-sm gap-sm">
//                   <button
//                     className="w-8 h-8 flex items-center justify-center hover:bg-surface-container-high border border-transparent active:border-on-background"
//                     type="button"
//                   >
//                     <span className="material-symbols-outlined text-[20px]">
//                       format_bold
//                     </span>
//                   </button>
//                   <button
//                     className="w-8 h-8 flex items-center justify-center hover:bg-surface-container-high border border-transparent active:border-on-background"
//                     type="button"
//                   >
//                     <span className="material-symbols-outlined text-[20px]">
//                       format_italic
//                     </span>
//                   </button>
//                   <button
//                     className="w-8 h-8 flex items-center justify-center hover:bg-surface-container-high border border-transparent active:border-on-background"
//                     type="button"
//                   >
//                     <span className="material-symbols-outlined text-[20px]">
//                       format_list_bulleted
//                     </span>
//                   </button>
//                   <div className="w-px bg-on-background h-6 my-auto opacity-20"></div>
//                   <button
//                     className="w-8 h-8 flex items-center justify-center hover:bg-surface-container-high border border-transparent active:border-on-background"
//                     type="button"
//                   >
//                     <span className="material-symbols-outlined text-[20px]">
//                       link
//                     </span>
//                   </button>
//                 </div>
//                 <textarea
//                   className="w-full p-md text-body min-h-[300px] focus:outline-none resize-none bg-surface-container-lowest"
//                   placeholder="Detail the role, responsibilities, and requirements..."
//                 ></textarea>
//               </div>
//             </div>

//             {/* Footer Actions */}
//             <div className="pt-lg mt-xl border-t-4 border-on-background space-y-lg">
//               <div className="flex items-start gap-md bg-surface-container-lowest p-md border-2 border-on-background">
//                 <span className="material-symbols-outlined text-primary-container bg-on-background p-xs">
//                   gavel
//                 </span>
//                 <p className="text-mono-data uppercase text-on-surface-variant leading-snug">
//                   Acceptance confirms adherence to Recruitment Governance.
//                   Verify accuracy before transmission.
//                 </p>
//               </div>
//               <div className="flex flex-col sm:flex-row gap-md">
//                 <button
//                   className="w-full sm:flex-2 py-lg text-h2 uppercase border-4 border-on-background bg-primary-container text-on-background brutalist-shadow active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all flex items-center justify-center"
//                   type="submit"
//                 >
//                   Post New Job
//                 </button>
//                 <button
//                   className="w-full sm:flex-1 py-lg text-h3 uppercase border-2 border-on-background bg-surface-container-lowest text-on-background brutalist-shadow active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center justify-center"
//                   type="button"
//                 >
//                   Save Draft
//                 </button>
//               </div>
//             </div>
//           </Form>
//         </div>
//       </main>

//       {/* Success Overlay */}
//       {/* {showSuccess && (
//         <div
//           className="fixed inset-0 z-50 bg-on-background/90 flex items-center justify-center p-md transition-opacity duration-300 opacity-100"
//           onClick={() => setShowSuccess(false)}
//         >
//           <div
//             className="bg-surface border-4 border-on-background p-xl max-w-md w-full shadow-[16px_16px_0px_0px_var(--color-primary-container)]"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="text-center space-y-md">
//               <div className="inline-flex h-20 w-20 bg-primary-container border-4 border-on-background items-center justify-center mb-md">
//                 <span
//                   className="material-symbols-outlined text-[48px] text-on-primary-container"
//                   style={{ fontVariationSettings: "'FILL' 1" }}
//                 >
//                   check_circle
//                 </span>
//               </div>
//               <h3 className="text-h2 uppercase">Listing Live</h3>
//               <p className="text-body text-on-surface-variant">
//                 Broadcasting to the network complete. Your listing is now
//                 available for applications.
//               </p>
//               <div className="pt-lg flex flex-col gap-sm">
//                 <button
//                   className="w-full py-md uppercase font-black border-4 border-on-background bg-primary-container text-on-primary-container brutalist-shadow active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
//                   onClick={() => setShowSuccess(false)}
//                 >
//                   View Live Post
//                 </button>
//                 <button
//                   className="w-full py-md uppercase font-bold border-2 border-on-background bg-surface-container-lowest text-on-background brutalist-shadow-sm active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
//                   onClick={() => setShowSuccess(false)}
//                 >
//                   Return to Dashboard
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )} */}
//     </>
//   );
// };

// export default AddJob;

import { Form, useOutletContext } from "react-router-dom";
const AddJob = () => {
  const { user } = useOutletContext();
  console.log(user);

  // Centralized input classes leveraging your globals.css theme variables
  const inputClasses =
    "w-full border-2 border-on-background bg-surface-container-lowest p-md text-body focus:outline-none focus:border-primary focus:shadow-[2px_2px_0px_0px_var(--color-on-background)] transition-all";
  const selectClasses = `${inputClasses} appearance-none pr-10`;

  return (
    <main className="p-lg md:p-xl grow flex justify-center bg-background min-h-screen">
      <div className="w-full max-w-2xl">
        <div className="mb-lg">
          <h2 className="text-h1 uppercase leading-none">Create Listing</h2>
          <p className="mt-md text-on-surface-variant text-body">
            Complete the following fields to reach candidates across the
            network.
          </p>
        </div>

        <Form method="post" className="space-y-xl">
          {/* Section: Core Details */}
          <div className="border-4 border-on-background bg-surface-container-lowest p-lg space-y-lg">
            <div className="flex items-center gap-sm pb-md border-b-2 border-outline-variant">
              <span className="material-symbols-outlined text-primary">
                info
              </span>
              <span className="text-mono-label uppercase tracking-widest font-black">
                Primary Identification
              </span>
            </div>

            <div className="space-y-md">
              <div>
                <label className="text-mono-label uppercase mb-xs block">
                  Position <span className="text-error">*</span>
                </label>
                <input
                  className={`${inputClasses} text-h3`}
                  placeholder="e.g. Senior Systems Architect"
                  required
                  type="text"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                <div>
                  <label className="text-mono-label uppercase mb-xs block">
                    Company Name
                  </label>
                  <input
                    className={inputClasses}
                    placeholder="Nexus Tech"
                    type="text"
                  />
                </div>

                <div>
                  <label className="text-mono-label uppercase mb-xs block">
                    Job Location
                  </label>
                  <input
                    className={inputClasses}
                    placeholder="e.g. New York, NY"
                    type="text"
                  />
                </div>

                <div>
                  <label className="text-mono-label uppercase mb-xs block">
                    Job Type
                  </label>
                  <div className="relative">
                    <select className={selectClasses}>
                      <option>Full-time</option>
                      <option>Part-time</option>
                      <option>Internship</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-md top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">
                      arrow_drop_down
                    </span>
                  </div>
                </div>

                <div>
                  <label className="text-mono-label uppercase mb-xs block">
                    Job Status
                  </label>
                  <div className="relative">
                    <select className={selectClasses}>
                      <option>Active</option>
                      <option>Closed</option>
                      <option>Urgent</option>
                      <option>Pending</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-md top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">
                      arrow_drop_down
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Note: Footer Actions section omitted as requested */}
        </Form>
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-md">
          <button
            type="submit"
            className="mt-10 w-full sm:flex-2 py-lg text-h2 uppercase bg-primary-container text-on-background dark:text-black border-4 border-on-background brutalist-shadow active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all flex items-center justify-center"
          >
            Post New Job
          </button>
        </div>
      </div>
    </main>
  );
};

export default AddJob;
