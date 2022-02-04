import { ExternalLinkIcon } from '@heroicons/react/outline';
import { Github } from '@icons-pack/react-simple-icons';
import projects from '../details/projects';

function ProjectList() {
  return (
    <div className='flex gap-3 justify-center'>
      {projects.map(({ name, description, tech, live_link, repo_link }) => (
        <div className='bg-gray-700 shadow-md p-5 rounded-md w-72'>
          <div className='flex gap-3 items-center justify-end'>
            <Github className='w-7' />
            <ExternalLinkIcon className='w-6' />
          </div>
          <h2 className='text-2xl my-2'>{name}</h2>
          <p className='py-3 font-light text-xl'>{description}</p>
          <ul className='flex text-xs gap-3 flex-wrap mt-3'>
            {tech.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default ProjectList;
