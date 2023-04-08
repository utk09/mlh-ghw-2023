import React from "react";
import { dataForJobs } from "./dataForJobs";

const Card = () => {
  return (
    <div className="mx-auto mt-8 mb-20 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {dataForJobs.map(eachJob => (
          <div key={eachJob.key} className="relative flex space-x-3 rounded-lg border-2 border-slate-800 bg-white py-5 px-6">
            <div>
              <img src={eachJob.image} className="h-14 w-14 rounded-full border-2 object-contain px-1" alt="" />
            </div>
            <div className="flex-1">
              <p className="text-lg font-medium text-gray-900">{eachJob.jobTitle}</p>
              <p className="text-sm font-light text-gray-500">{eachJob.companyName}</p>
              <p className="mt-4 text-sm font-medium text-gray-600">{eachJob.location}</p>
            </div>
            <div>
              <a type="button" target="_blank" href={eachJob.jobLink} className="justify-end rounded-md bg-blue-700 px-4 py-2 text-sm text-blue-50 hover:bg-green-600">Job Link</a>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Card;