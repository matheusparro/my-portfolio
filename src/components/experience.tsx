import React from 'react';
import { styled } from 'styled-components';

interface ExperienceProps {
  image: string;
  text: string;
  size: string;
}
export function Experience(props: ExperienceProps): JSX.Element {
  return (
    <div
      style={{
        backgroundColor: '#cf98c926',
        width: '100%',
        borderRadius: '30px 30px',
        height: '40px',
      }}
    >
      <div
        style={{
          width: props.size,
          backgroundColor: '#811c76',
          borderRadius: '30px 30px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <img
          style={{ width: '25px', height: '25px', marginLeft: '15px' }}
          src={props.image}
          alt="javaIcon"
        />
        <h3 style={{ padding: '10px' }}>{props.text}</h3>
      </div>
    </div>
  );
}
