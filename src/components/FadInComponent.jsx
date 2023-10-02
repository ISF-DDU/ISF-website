import React from 'react';
import { useInView } from 'react-intersection-observer';

export default function FadeInComponent(props) {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className={`fade-in-section ${inView ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${props.delay}ms` }}
    >
      {props.children}
    </div>
  );
}