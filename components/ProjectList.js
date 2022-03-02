import { ExternalLinkIcon } from '@heroicons/react/outline';
import { Github } from '@icons-pack/react-simple-icons';
import projects from '../details/projects';
import { useRouter } from 'next/router';

function ProjectList() {
  const router = useRouter();
  return (
    <div className='flex flex-wrap md:flex-nowrap gap-3 justify-center'>
      {projects.map(({ name, description, tech, live_link, repo_link }) => (
        <div
          key={name}
          onClick={() => router.push(live_link)}
          className='bg-gray-700 shadow-md p-5 cursor-pointer rounded-md w-72 group hover:-translate-y-2 transition duration-200'
        >
          <div className='flex gap-3 items-center justify-end'>
            <a href={repo_link} className='navLink'>
              <Github className='w-6' />
            </a>

            <a href={live_link} className='navLink'>
              <ExternalLinkIcon className='w-6' />
            </a>
          </div>
          <h2 className='text-2xl my-2 group-hover:text-neon'>{name}</h2>
          <p className='py-3 font-light text-xl'>{description}</p>
          <ul className='flex text-xs gap-3 flex-wrap mt-3'>
            {tech.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default ProjectList;
