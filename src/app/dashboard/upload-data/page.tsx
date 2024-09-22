'use client';
import React, { useEffect, useState } from "react";
import { classNames } from "../../utils/functions";
import styles from './upload.module.css';

export default function UploadDataPage() {
  const [projectType, setProjectType] = useState('');
  const [companies, setCompanies] = useState('');
  const [experts, setExperts] = useState<string[]>([]);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleProjectTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setProjectType(e.target.value);
  };

  useEffect(() => {
    const isValid = projectType !== '' && (projectType !== 'Company Research' || companies !== '') && experts.length > 0;
    setIsFormValid(isValid);
  }, [projectType, companies, experts]);
  const handleExpertChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;
    if (id === 'All') {
      if (checked) {
        setExperts(['All', 'Competitor', 'Customer', 'Industry Consultant', 'Former Executive', 'Partner']);
      } else {
        setExperts([]);
      }
    } else {
      setExperts((prev) => {
        if (checked) {
          return [...prev, id];
        } else {
          return prev.filter((expert) => expert !== id);
        }
      });
    }
  };
  const handleUploadData = () => {
    console.log('uploading data..')
  }
  return (
    <>
      <h1 className={classNames('text-white text-2xl font-bold text-center mt-5')}>
        AURA
      </h1>
      <h3 className={classNames('text-white text-xl font-bold text-center mt-2')}>
        Augmented Universal Research Assistant
      </h3>
      <div className={classNames('flex justify-center mt-5')}>
        <div className={classNames('bg-white w-4/5 md:w-3/5 p-5 flex flex-col items-center shadow')}>
          <div className={classNames('flex flex-row w-full justify-between')}>
            <div className="text-xl">New Data</div>
            <a href="/dashboard/home">
              <img src="/close.svg" alt="Close" className={classNames('w-6 h-6')} />
            </a>
          </div>
          {/* project name */}
          <div className={classNames('flex flex-col justify-start w-full mt-5')}>
            <label>Project name <span className="text-red-700">*</span></label>
            <input 
              type='text' 
              className={classNames('gray-color border-gray input-padding input-radius')} 
              placeholder="E.g. Microsoft Research"
            />
          </div>
          {/* project type */}
          <div className={classNames('flex flex-col justify-start w-full mt-5')}>
            <label>Project type <span className="text-red-700">*</span></label>
            <select 
              className={classNames('gray-color border-gray input-padding input-radius')}
              value={projectType}
              onChange={handleProjectTypeChange}
            >
              <option value="">Select Project Type</option>
              <option value="Company Research">Company Research</option>
              <option value="Management Research">Management Research</option>
              <option value="Industry Research">Industry Research</option>
            </select>
          </div>
           {/* companies */}
           {projectType === 'Company Research' && (
            <div className={classNames('flex flex-col justify-start w-full mt-5')}>
              <label>Companies <span className="text-red-700">*</span></label>
              <input 
                type='text' 
                className={classNames('gray-color border-gray input-padding input-radius')} 
                placeholder="E.g. Microsoft Research"
                value={companies}
                onChange={(e) => setCompanies(e.target.value)}
              />
            </div>
          )}

          {/* project description */}
          <div className={classNames('flex flex-col justify-start w-full mt-5')}>
            <label>Project Description</label>
            <input 
              type='text' 
              className={classNames('gray-color border-gray input-padding input-radius')} 
              placeholder="Please define the purpose for this project."
            />
          </div>
          {/* project Scope */}
          <div className={classNames('flex flex-col justify-start w-full mt-5')}>
            <label>Project Scope</label>
            <textarea 
              
              className={classNames('gray-color border-gray input-padding input-radius')} 
              placeholder="Tell us the range for the numbers of experts you want us to include for this research and the type of experts in order for us to start expert screening stage."
            />
          </div>
          {/* expert */}
          <div className={classNames('flex flex-col justify-start w-full mt-5')}>
            <label>Expert <span className="text-red-700">*</span></label>
            <div className={classNames('grid grid-cols-2 gap-4 mt-2')}>
              {['All', 'Competitor', 'Customer', 'Industry Consultant', 'Former Executive', 'Partner'].map((value) => (
                <div key={value} className={classNames('flex items-center')}>
                  <input 
                    type="checkbox" 
                    id={value} 
                    name="expert"
                    checked={experts.includes(value)}
                    onChange={handleExpertChange}
                  />
                  <label htmlFor={value} className="ml-2">{value}</label>
                </div>
              ))}
            </div>
          </div>
          {/* expert */}
          <div className={classNames('flex flex-row justify-eventy w-full mt-5')}>
            <button className={styles.btnCancel}>Cancel</button>
            <button 
              className={styles.btnUpload} 
              onClick={handleUploadData} 
              disabled={!isFormValid}>
                Upload
              </button>
          </div>
        </div>
      </div>
    </>
  );
}