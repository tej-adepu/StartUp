import React, { createContext, useState, useContext } from "react";

const IdeaContext = createContext();

export const IdeaProvider = ({ children }) => {
  const [ideas, setIdeas] = useState([]);
  const [currentIdea, setCurrentIdea] = useState(null);

  // Example methods, replace/fill out as needed
  const addIdea = (idea) => setIdeas(prev => [...prev, idea]);
  const updateIdea = (updated) =>
    setIdeas(prev => prev.map(idea => idea._id === updated._id ? updated : idea));
  const removeIdea = (id) => setIdeas(prev => prev.filter(idea => idea._id !== id));

  return (
    <IdeaContext.Provider
      value={{
        ideas,
        currentIdea,
        setCurrentIdea,
        addIdea,
        updateIdea,
        removeIdea,
      }}
    >
      {children}
    </IdeaContext.Provider>
  );
};

export const useIdea = () => useContext(IdeaContext);
