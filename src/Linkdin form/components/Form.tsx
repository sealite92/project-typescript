import { useState } from "react";
import { sampleJobExperiences } from "../mock-data/mockData";
import { Experience } from "../types/experience";
import { SubmitHandler } from "react-hook-form";
import ExperienceList from "./ExperienceList";
import AddExperienceForm from "./AddExperienceForm";


type FormFields = Experience;

export default function Form() {
  const [experienceList, setExperienceList] =
    useState<Experience[]>(sampleJobExperiences);
  const [showAddExperienceForm, setShowAddExperienceForm] = useState(false);

  const onSubmit: SubmitHandler<FormFields> = (newExperience) => {
    console.log(newExperience);
    setExperienceList((prev) => [newExperience, ...prev]);
    setShowAddExperienceForm(false);
  };

  const onCancel = () => {
    setShowAddExperienceForm(false);
  };

  return (
    <div className="lg:bg-gray-700/80 backdrop-blur-sm min-h-screen p-4 sm:bg-white">
      <div className="container mx-auto p-4 max-w-4xl border-1 border-gray-400 rounded-xl bg-white shadow-lg">
        <h1 className="text-3xl font-bold mb-6">My Linkedin Profile</h1>
        <div className="flex items-center justify-between p-4 bg-gray-200">
          <h1 className="text-2xl font-bold">Experience</h1>
          <button
            onClick={() => setShowAddExperienceForm(true)}
            className="cursor-pointer hover:bg-gray-100 p-2 rounded-2xl"
          >
            Add
          </button>
        </div>
        <ExperienceList experienceList={experienceList} />
        {showAddExperienceForm && (
          <div className="fixed inset-0 bg-black/60 flex items-baseline pt-10 justify-center w-full h-full">
            <div className="bg-white rounded shadow-lg container w-3xl">
              <AddExperienceForm onSubmit={onSubmit} cancel={onCancel} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
