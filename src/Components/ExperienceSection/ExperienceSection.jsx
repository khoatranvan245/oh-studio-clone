import styles from './ExperienceSection.module.css'
const pastJobs = [
  {
    time: '2017 - Present',
    company: 'OH.STUDIO',
    name: 'Freelance Designer',
    position: 'Director',
  },
  {
    time: '2021 - Present',
    company: 'Friendly Studio',
    name: 'Lead Product Designer',
    position: 'Freelance',
  },
  {
    time: '2022',
    company: 'R/GA',
    name: 'Senior Visual Designer',
    position: 'Freelance',
  },
  {
    time: '2021',
    company: 'R/GA',
    name: 'Senior Visual Desinger',
    position: 'Freelance',
  },
  {
    time: '2021',
    company: 'AKQA',
    name: 'Senior Designer',
    position: 'Freelance',
  },
  {
    time: '2020',
    company: 'AKQA',
    name: 'Senior Designer',
    position: 'Freelance',
  },
  {
    time: '2019',
    company: 'UI Centric',
    name: 'Senior Product Designer',
    position: 'Freelance',
  },
  {
    time: '2017',
    company: 'Agency TK',
    name: 'Senior Digital Designer',
    position: 'Permanent',
  },
  {
    time: '2012',
    company: 'Agency TK',
    name: 'Digital Designer',
    position: 'Permanent',
  },
  {
    time: '2009',
    company: 'Next Level',
    name: 'Digital Designer',
    position: 'Permanent',
  },
  {
    time: '2008',
    company: 'Next Level',
    name: 'Junior Digital Designer',
    position: 'Permanent',
  },
]

const ExperienceSection = () => {
  return (
    <section>
      <p className="token">Experience</p>
      <p className="sectionDescription">Where I've worked</p>
      <ul className={styles.pastJobsList}>
        {pastJobs.map((job, id) => {
          return (
            <li key={id}>
              <p>{job.time}</p>
              <p>{job.company}</p>
              <p>{job.name}</p>
              <p className="token">{job.position}</p>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default ExperienceSection
