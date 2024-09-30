"use client";
import React, { useEffect, useState } from "react";
import { classNames } from "../../utils/functions";
import styles from "./upload.module.css";
import { Rings } from "react-loader-spinner";

export default function UploadDataPage() {
  const [projectName, setProjectName] = useState("");
  const [projectType, setProjectType] = useState("");
  const [companies, setCompanies] = useState("");
  const [experts, setExperts] = useState<string[]>([]);
  const [isFormValid, setIsFormValid] = useState(false);
  const [validationFields, setValidationFields] = useState({
    projectName: false,
    projectType: false,
    companies: false,
    experts: false,
  });

  const [isSending, setIsSending] = useState(false);

  const handleProjectTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setProjectType(e.target.value);
  };

  useEffect(() => {
    const isValid =
      projectType !== "" &&
      (projectType !== "Company Research" || companies !== "") &&
      experts.length > 0;
    setIsFormValid(isValid);
  }, [projectType, companies, experts]);
  const handleExpertChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;
    if (id === "All") {
      if (checked) {
        setExperts([
          "All",
          "Competitor",
          "Customer",
          "Industry Consultant",
          "Former Executive",
          "Partner",
        ]);
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
    setIsSending(true);
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };
  const renderForm = () => (
    <form className={classNames("flex justify-center mt-5")}>
      <div
        className={classNames(
          "bg-white w-4/5 md:w-3/5 p-5 flex flex-col items-center shadow"
        )}
      >
        <div className={classNames("flex flex-row w-full justify-between")}>
          <div className="text-xl">New Data</div>
          <a href="/dashboard/home">
            <img
              src="/close.svg"
              alt="Close"
              className={classNames("w-6 h-6")}
            />
          </a>
        </div>
        {/* project name */}
        <div className={classNames("flex flex-col justify-start w-full mt-5 ")}>
          <label>
            Project name <span className="text-red-700">*</span>
          </label>
          <input
            type="text"
            className={classNames(
              `input-padding input-radius ${
                validationFields.projectName
                  ? "border-gray"
                  : "border-error gray-color"
              }`
            )}
            placeholder="E.g. Microsoft Research"
            onChange={(e) => setProjectName(e.target.value)}
            value={projectName}
            onBlur={() => {
              if (projectName === "") {
                setValidationFields({
                  ...validationFields,
                  projectName: false,
                });
              } else {
                setValidationFields({ ...validationFields, projectName: true });
              }
            }}
          />
        </div>
        {/* project type */}
        <div className={classNames("flex flex-col justify-start w-full mt-5")}>
          <label>
            Project type <span className="text-red-700">*</span>
          </label>
          <select
            className={classNames(
              ` input-padding input-radius ${
                validationFields.projectType
                  ? "border-gray "
                  : "border-error gray-color"
              }`
            )}
            value={projectType}
            onChange={handleProjectTypeChange}
            onBlur={() => {
              if (projectType === "") {
                setValidationFields({
                  ...validationFields,
                  projectType: false,
                });
              } else {
                setValidationFields({ ...validationFields, projectType: true });
              }
            }}
          >
            <option value="">Select Project Type</option>
            <option value="Company Research">Company Research</option>
            <option value="Management Research">Management Research</option>
            <option value="Industry Research">Industry Research</option>
          </select>
        </div>
        {/* companies */}
        {projectType === "Company Research" && (
          <div
            className={classNames("flex flex-col justify-start w-full mt-5")}
          >
            <label>
              Companies <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              className={classNames(
                `input-padding input-radius ${
                  validationFields.companies
                    ? "border-gray"
                    : "border-error gray-color"
                }`
              )}
              placeholder="E.g. Microsoft Research"
              value={companies}
              onChange={(e) => setCompanies(e.target.value)}
              onBlur={() => {
                if (companies === "") {
                  setValidationFields({
                    ...validationFields,
                    companies: false,
                  });
                } else {
                  setValidationFields({ ...validationFields, companies: true });
                }
              }}
            />
          </div>
        )}

        {/* project description */}
        <div className={classNames("flex flex-col justify-start w-full mt-5")}>
          <label>Project Description</label>
          <input
            type="text"
            className={classNames(
              "gray-color border-gray input-padding input-radius"
            )}
            placeholder="Please define the purpose for this project."
          />
        </div>
        {/* project Scope */}
        <div className={classNames("flex flex-col justify-start w-full mt-5")}>
          <label>Project Scope</label>
          <textarea
            className={classNames(
              "gray-color border-gray input-padding input-radius"
            )}
            placeholder="Tell us the range for the numbers of experts you want us to include for this research and the type of experts in order for us to start expert screening stage."
          />
        </div>
        {/* expert */}
        <div className={classNames("flex flex-col justify-start w-full mt-5")}>
          <label>
            Expert <span className="text-red-700">*</span>
          </label>
          <div className={classNames("grid grid-cols-2 gap-4 mt-2")}>
            {[
              "All",
              "Competitor",
              "Customer",
              "Industry Consultant",
              "Former Executive",
              "Partner",
            ].map((value) => (
              <div key={value} className={classNames("flex items-center")}>
                <input
                  type="checkbox"
                  id={value}
                  className={classNames(
                    experts.length === 0 ? "checkbox-error" : ""
                  )}
                  name="expert"
                  checked={experts.includes(value)}
                  onChange={handleExpertChange}
                />
                <label htmlFor={value} className="ml-2">
                  {value}
                </label>
              </div>
            ))}
          </div>
        </div>
        {/* expert */}
        <div className={classNames("flex flex-row justify-eventy w-full mt-5")}>
          <button className={styles.btnCancel}>Cancel</button>
          <button
            className={classNames(
              `btnUpload ${isFormValid ? "btn-enabled-bg" : ""}`
            )}
            onClick={handleUploadData}
            disabled={!isFormValid}
          >
            Upload
          </button>
        </div>
      </div>
    </form>
  );

  const renderSending = () => (
    <div className={classNames("flex justify-center mt-5")}>
      <div
        className={classNames(
          "bg-white w-4/5 md:w-3/5 p-5 flex flex-col items-center shadow"
        )}
      >
        <Rings
          visible={true}
          height="80"
          width="80"
          color="#6869ac"
          ariaLabel="rings-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    </div>
  );

  return (
    <>
      <h1
        className={classNames("text-white text-2xl font-bold text-center mt-5")}
      >
        AURA
      </h1>
      <h3
        className={classNames("text-white text-xl font-bold text-center mt-2")}
      >
        Augmented Universal Research Assistant
      </h3>
      {!isSending && renderForm()}
      {isSending && renderSending()}
    </>
  );
}
