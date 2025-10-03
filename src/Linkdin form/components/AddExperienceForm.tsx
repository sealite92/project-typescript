
import {SubmitHandler, useForm} from "react-hook-form"
import {z} from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import { experienceSchema } from "../types/experience"


type AddExperienceFormProps = {
    onSubmit: SubmitHandler<FormFields>;
    cancel: () => void;
}

type FormFields = z.infer<typeof experienceSchema>


export default function AddExperienceForm({onSubmit, cancel}: AddExperienceFormProps) {


    const {register, handleSubmit, setError, reset, watch, formState:{errors, isSubmitting}} = useForm<FormFields>({
        resolver: zodResolver(experienceSchema),
        defaultValues: {
            isCurrentlyWorkingHere: false
        }
    }) 

    
const handleFormSubmit: SubmitHandler<FormFields> = (data) => {
  onSubmit(data);
  reset(); 
};

    const isCurrentlyWorkingHere = watch("isCurrentlyWorkingHere");

   

  return (
    
      <div className="bg-white rounded-lg shadow-lg  max-w-3xl h-[90vh] overflow-y-auto p-6 side-bar-hidden">
 <div className="flex justify-between border-b border-gray-500 bg-white p-6 pt-0"><label className="text-2xl font-bold text-center">Add Experience</label>  <button className="font-semibold cursor-pointer" onClick={cancel}>close</button></div> 
        <form className='flex flex-col gap-4 content-center justify-center p-6 bg-white' onSubmit={handleSubmit(handleFormSubmit)}>
    <p>* Indicates required fields</p>
    <label htmlFor="">Title*</label>  
    <input className="p-2 border-2 border-gray-500 rounded-md " 
    {...register("title",)} type="text" placeholder='title'/>
    {errors.title && <div className="text-red-500">{errors.title.message}</div>}
   
    <label htmlFor="">Employment Type</label>
    <select
      className="p-2 border-2 border-gray-500 rounded-md "
      {...register("employmentType")}
      defaultValue=""
    >
      <option value="" disabled>
        Select employment type
      </option>
      <option value="Full-time">Full-time</option>
      <option value="Part-time">Part-time</option>
      <option value="Self-employed">Contract</option>
      <option value="Internship">Internship</option>
      <option value="Apperenticeship">Apperenticeship</option>
      <option value="Seasonal">Seasonal</option>
    </select>
 

<label htmlFor="">Company or Organisation*</label>
<input type="text" className="p-2 border-2 border-gray-500 rounded-md" placeholder="Ex Microsoft"
{...register("companyName")}/>
 {errors.companyName && <div className="text-red-500">{errors.companyName.message}</div>}

<label htmlFor=""> <input type="checkbox" {...register("isCurrentlyWorkingHere")}/> I am currently working in this role</label>


    <label>Start Date*</label>
        <input type="month" className="p-2 border-2 border-gray-500 rounded-md"
         {...register("startDate")} />
        {errors.startDate && <p className="text-red-500">{errors.startDate.message}</p>}
      
        <label>End Date*</label>
        <input type="month" className={`p-2 border-2  ${isCurrentlyWorkingHere? "bg-gray-300" : "bg-white"} border-gray-500 rounded-md`}
         {...register("endDate")}  disabled={isCurrentlyWorkingHere} />
        {errors.endDate && <p className="text-red-500">{errors.endDate.message}</p>} 

    <label htmlFor="">Location*</label>
    <input type="text" className="p-2 border-2 border-gray-500 rounded-md" placeholder="Ex Lagos, Nigeria"
    {...register("location")}/>
     {errors.location && <div className="text-red-500">{errors.location.message}</div>} 
    <label htmlFor="">Location Type</label>
    <select className="p-2 border-2 border-gray-500 rounded-md "
    {...register("locationType")} defaultValue="">  
        <option value="" disabled>Select location type</option>
        <option value="On-site">On-site</option>
        <option value="Remote">Remote</option>
        <option value="Hybrid">Hybrid</option>
    </select>

    <label htmlFor="">Description</label>
    <textarea className="p-2 border-2 border-gray-500 rounded-md " rows={4} placeholder="Describe your role"
    {...register("description")}/>
    {errors.description && <div className="text-red-500">{errors.description.message}</div>}

   <div className="bg-white flex justify-between  barder-1 border-gray-500 z-50 bottom-0 p-4 w-full"><div></div><button  className='text-center rounded-md  w-20  bg-blue-400 hover:bg-blue-500 text-white font-semibold' type="submit">Save</button></div>
   </form>
      </div>
  )
}
