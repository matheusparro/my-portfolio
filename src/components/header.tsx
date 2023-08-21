import React from 'react';
import { styled } from 'styled-components';
// import { BsLinkedin, BsGithub } from 'react-icons/bs';

const TagHeader = styled.header`
  padding-top: 3rem;
  > div {
    max-width: 1120px;
    margin: 0 auto;

    padding: 1rem;
    display: grid;
    grid-template-columns: 80% 20%;
    justify-content: space-between;
  }
`;

const Logo = styled.a`
  color: var(--logo-color);
  font-weight: 400;
  font-size: 16pt;
  line-height: 150%;
  font-family: 'Popins';
`;

const LogoBack = styled.a`
  color: var(--logo-color);
  font-weight: 400;
  font-size: 10pt;
  line-height: 150%;
  font-family: 'Popins';
`;
const LogoIcon = styled.a`
  font-size: 20px;
  font-family: 'Popins';
`;

export function Header(): JSX.Element {
  return (
    <TagHeader>
      <div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '40% 60%',
            justifyContent: 'space-between',
            gap: '20px',
          }}
        >
          <img
            style={{
              width: '80%',
              height: '85%',
              borderRadius: '50%',
              border: '2px solid #d203c2',
            }}
            src="/logo.jpg"
          ></img>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              textAlign: 'center',
              alignItems: 'flex-start',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: '5px',
              }}
            >
              <h1>Hi,</h1>
              <h1 style={{ color: '#d203c2' }}> i´m Matheus Parro! 👋</h1>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: '5px',
              }}
            >
              <h2>Software </h2>
              <h2>Engineer! 👋</h2>
            </div>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            alignItems: 'flex-end',
            width: '100%',
          }}
        >
          <div
            style={{
              display: 'grid',
              gap: '10px',
            }}
          >
            <span
              style={{
                display: 'flex',
                gap: '5px',
                alignItems: 'center',
              }}
            >
              <img
                style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                }}
                src="/brazil.png"
              ></img>
              Native Speaker
            </span>
            <span
              style={{
                display: 'flex',
                gap: '5px',
                alignItems: 'center',
              }}
            >
              <img
                style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                }}
                src="/usa.png"
              ></img>
              Intermediate-advanced
            </span>
          </div>
        </div>
      </div>
    </TagHeader>
  );
}
