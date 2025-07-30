import React from 'react';
import IdeaCard from './IdeaCard';
import '../../styles/components/IdeaList.css';

const IdeaList = ({ ideas, onView }) => {
  return (
    <div className="idea-list">
      {ideas.length === 0 ? (
        <p>No ideas submitted yet.</p>
      ) : (
        ideas.map((idea) => (
          <IdeaCard key={idea._id} idea={idea} onView={onView} />
        ))
      )}
    </div>
  );
};

export default IdeaList;
