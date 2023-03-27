import React from 'react';
// Course
const About = () => {
  return (
    <>
      <h1 className="text-6xl mb-4">Github Finder</h1>
      <p className="mb-4 text-2xl font-light">
        A React app to search GitHub profiles and see profile details. This
        project is part of the{' '}
        <a
          className="hover:underline"
          href="https://www.udemy.com/course/modern-react-front-to-back/"
        >
          React Front To Back
        </a>{' '}
        Udemy course by
        <strong>
          <a href="https://traversymedia.com"> Brad Traversy</a>
        </strong>
        .
      </p>

      <p className="text-lg text-gray-400">
        Course taker:
        <a className="text-white">
          <span className="mx-1"></span>bijan
        </a>
      </p>
    </>
  );
};

export default About;
