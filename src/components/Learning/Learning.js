import React from 'react'
import TestCard from '../Test/TestCard';

function Learning() {
    const subjects = [
        {
          title: 'Algebra',
          questions: 25,
          totalMarks: 120,
          difficultyLevel: 'Advanced',
        },
        {
          title: 'Mechanics',
          questions: 18,
          totalMarks: 90,
          difficultyLevel: 'Intermediate',
        },
        {
          title: 'Organic Chemistry',
          questions: 22,
          totalMarks: 110,
          difficultyLevel: 'Beginner',
        },
        {
            title: 'Algebra',
            questions: 25,
            totalMarks: 120,
            difficultyLevel: 'Advanced',
          },
          {
            title: 'Mechanics',
            questions: 18,
            totalMarks: 90,
            difficultyLevel: 'Intermediate',
          },
          {
            title: 'Organic Chemistry',
            questions: 22,
            totalMarks: 110,
            difficultyLevel: 'Beginner',
          },   {
            title: 'Algebra',
            questions: 25,
            totalMarks: 120,
            difficultyLevel: 'Advanced',
          },
          {
            title: 'Mechanics',
            questions: 18,
            totalMarks: 90,
            difficultyLevel: 'Intermediate',
          },
          {
            title: 'Organic Chemistry',
            questions: 22,
            totalMarks: 110,
            difficultyLevel: 'Beginner',
          },
          {
            title: 'Algebra',
            questions: 25,
            totalMarks: 120,
            difficultyLevel: 'Advanced',
          },
          {
            title: 'Mechanics',
            questions: 18,
            totalMarks: 90,
            difficultyLevel: 'Intermediate',
          },
          {
            title: 'Organic Chemistry',
            questions: 22,
            totalMarks: 110,
            difficultyLevel: 'Beginner',
          },
      ];
      
    
    
  return (
    <div className="container mt-5">
    <div className="row">
      {subjects.map((subject, index) => (
        <div key={index} className="col-md-4">
          <TestCard {...subject} />
        </div>
      ))}
    </div>
  </div>
);
}

export default Learning