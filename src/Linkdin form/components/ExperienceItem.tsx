import React from 'react'
import { Experience } from '../types/experience';
type ExperienceItemProps = {
    jobExperience: Experience;
}

export default function ExperienceItem({jobExperience}: ExperienceItemProps)  {
  return (
    <div className="p-4" key={jobExperience.title}>
            <h2 className="text-xl font-semibold">{jobExperience.title}</h2>
            <p>{jobExperience.companyName}</p>
            <p className="text-gray-500">
               {jobExperience.startDate}
              {jobExperience.isCurrentlyWorkingHere
                ? " - Present"
                : ` - ${jobExperience.endDate}`}
            </p>
           <div className='flex gap-2'>
             <p>{jobExperience.location}</p><span className='text-gray-400'> <span className="text-gray-400">•</span>{jobExperience.locationType}</span>
            </div>
            <p>{jobExperience.description}</p>
          </div>
  )
}
