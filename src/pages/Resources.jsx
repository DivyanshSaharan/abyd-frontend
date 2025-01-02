import React from 'react'
import './Resource.css';
function Resources() {
  return (
    <div className="resources section" id="resources">
  <h2 className="section__title">Resources</h2>
  <span className="section__subtitle">Educational Bits</span>
  <div className="resources__container container grid">
    <article className="resource__item">
      <h3 className="resource__title">Guide 1</h3>
      <p>Learn how to use our platform effectively.</p>
      <a href="#" className="resource__link">Read More</a>
    </article>
    <article className="resource__item">
      <h3 className="resource__title">Guide 2</h3>
      <p>Step-by-step tutorials for beginners.</p>
      <a href="#" className="resource__link">Read More</a>
    </article>
    <article className="resource__item">
      <h3 className="resource__title">Guide 3</h3>
      <p>Advanced tips and tricks for power users.</p>
      <a href="#" className="resource__link">Read More</a>
    </article>
  </div>
</div>

  )
}

export default Resources