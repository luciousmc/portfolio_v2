const { default: ProfileImage } = require('./ProfileImage');

function AboutSection() {
  return (
    <div className='flex flex-col lg:flex-row sm:px-5'>
      <div className='w-1/2 md:w-1/4 pt-10 mx-auto'>
        {/* Profile Image */}
        <ProfileImage />
      </div>
      <div className='space-y-4 text-justify pl-10 text-xl font-light'>
        {/* About content */}
        <p>
          Hello! My name is Marlon Clay. I first got introduced to programming
          when I was 12 years old. America Online and dial-up modems were the
          thing. My curious little mind had stumbled upon the words, "Build your
          own homepage", or something similar. I then spent the next few hours
          tinkering with HTML and was able to put together a website with a
          bright red background and a blue link to my email address. I felt very
          accomplised that day no matter how hard on the eyes it was to look at
          that page.
        </p>
        <p>
          Fast-forward many years and my interest in computer programming and
          development continued. I made a few fan websites dedicated to the
          legendary anime "Dragon Ball Z". In high school I made a site with a
          friend that featured the funniest content we could find around the
          internet. By this time, CSS had made its appearence so no more styling
          within the tags themselves.
        </p>
        <p>
          Coding was a hobby that I did for fun. I loved to learn and create
          with that knowledge. I never considered that it could be a career
          until this past year. I wanted to change my career in consumer
          electronics that I had been in for 8 years. A friend of mine suggested
          that I take programming up since it was something that I enjoyed
          doing. Shortly after, I enrolled in LearningFuze's Web Development
          program and dove head first. It was the most challenging and rewarding
          experience I've had. I learned various technologies and programming
          languages such as Javascript, jQuery, Node.js, PHP, MySQL, React and
          Postgres just to name a few. We were put in teams and completed a few
          3 day hackathons and a 3 week final project. Working in those teams
          taught me so much. I loved every minute of it. Going through the AGILE
          and SCRUM processes really gave our team direction and unity.
        </p>
        <p>
          I'm looking forward to further my depth of knowledge of programming
          and the vast possibilities that it offers. Creating new things and
          improving on others.
        </p>
      </div>
    </div>
  );
}

export default AboutSection;
