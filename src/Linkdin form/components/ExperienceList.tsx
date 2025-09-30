import React from 'react'
import { Experience } from '../types/experience';
import ExperienceItem from './ExperienceItem';

type ExperienceListProps = {
  experienceList: Experience[];
}

export default function ExperienceList({experienceList}: ExperienceListProps) {
  return (
    <ul>
        {experienceList.length === 0 && (
          <div className="flex items-center justify-center h-64">
            <p className="text-gray-500">No experience added yet.</p>
          </div>
        )}
        {experienceList.map((jobExperience) => (
          <ExperienceItem key={jobExperience.companyName} jobExperience={jobExperience} />
        ))}
    </ul>
  )
}
