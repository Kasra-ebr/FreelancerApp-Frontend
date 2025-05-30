import React from 'react';
import useMoveBack from '../../hooks/useMoveBack';
import { HiArrowRight } from 'react-icons/hi';

function ProjectHeader({ project }) {
  const moveBack = useMoveBack();

  return (
    <div className="flex items-center gap-x-4 mb-8">
      <button onClick={moveBack} className="p-2 hover:bg-gray-100 rounded">
        <HiArrowRight className="w-5 h-5 text-secondary-500" />
      </button>
      <h1 className="font-bold text-secondary-700 text-xl">
        List of My Request {project?.title}
      </h1>
    </div>
  );
}

export default ProjectHeader;
