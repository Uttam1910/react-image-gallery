// src/context/SavedContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const SavedContext = createContext();

const STORAGE_KEY = 'lumora_saved_image_ids';

export const SavedProvider = ({ children }) => {
  const [savedIds, setSavedIds] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [1, 3, 5, 8];
    } catch (e) {
      return [1, 3, 5, 8];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(savedIds));
    } catch (e) {
      console.error('Failed to save to localStorage', e);
    }
  }, [savedIds]);

  const toggleSave = (id) => {
    const numericId = Number(id);
    setSavedIds(prev => {
      if (prev.includes(numericId)) {
        return prev.filter(item => item !== numericId);
      } else {
        return [...prev, numericId];
      }
    });
  };

  const isSaved = (id) => {
    return savedIds.includes(Number(id));
  };

  const clearAllSaved = () => {
    setSavedIds([]);
  };

  return (
    <SavedContext.Provider value={{ savedIds, toggleSave, isSaved, clearAllSaved }}>
      {children}
    </SavedContext.Provider>
  );
};

export const useSaved = () => {
  const context = useContext(SavedContext);
  if (!context) {
    throw new Error('useSaved must be used within a SavedProvider');
  }
  return context;
};
