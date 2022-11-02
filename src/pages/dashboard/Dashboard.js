import { useCollection } from '../../hooks/useCollection'
import { useState } from 'react'
import { useAuthContext } from '../../hooks/useAuthContext'

// components
import ProjectList from '../../components/ProjectList'
import ProjectFilter from './ProjectFilter'

// styles
import './Dashboard.css';

const Dashboard = () => {
  const { documents, error } = useCollection('projects')
  const [currentFilter, setCurrentFilter] = useState('all')
  const { user } = useAuthContext()

  const changeFilter = (newFilter) => {
    setCurrentFilter(newFilter);
  }

  const projects = documents ? documents.filter((doc) => {
    switch (currentFilter) {
      case 'all':
        return true;
      case 'mine':
        let assignedToMe = false;
        doc.assignedUsersList.forEach((u) => {
          if (u.id === user.uid) {
            assignedToMe = true;
          }
        })
        return assignedToMe;
      default:
        return currentFilter === doc.category;
    }
  }) : null;

  return (
    <div>
      <h2 className="page-title">Dashboard</h2>
      {error && <p className="error">{error}</p>}
      {documents && <ProjectFilter currentFilter={currentFilter} changeFilter={changeFilter}/>}
      {projects && <ProjectList projects={projects} />}
    </div>
  );
}

export default Dashboard