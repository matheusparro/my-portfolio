import React from 'react';
import { styled } from 'styled-components';
import { Experience } from '../components/experience';

const ContainerHome = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const ContainerOption = styled.div`
  max-width: 450px;
  border-radius: 1rem 1rem 1rem;
`;
export function Home(): JSX.Element {
  return (
    <ContainerHome className="containerHome">
      <ContainerOption>
        <h2>Technologies (Years)</h2>
        <div style={{ padding: '1rem 1rem 2rem' }}>
          <div
            style={{
              display: 'grid',
              alignItems: 'baseline',
              gap: '30px',
            }}
          >
            {/*<div*/}
            {/*  style={{*/}
            {/*    backgroundColor: 'white',*/}
            {/*    width: '100%',*/}
            {/*    borderRadius: '30px 30px',*/}
            {/*  }}*/}
            {/*>*/}
            {/*  <div*/}
            {/*    style={{*/}
            {/*      width: '60%',*/}
            {/*      backgroundColor: '#d203c2',*/}
            {/*      borderRadius: '30px 30px',*/}
            {/*    }}*/}
            {/*  >*/}
            {/*    <img*/}
            {/*      style={{ width: '40px', height: '40px' }}*/}
            {/*      src="/java.png"*/}
            {/*      alt="javaIcon"*/}
            {/*    />*/}
            {/*  </div>*/}
            {/*</div>*/}
            <Experience image={'/java.png'} text={'2+'} size={'50%'} />
            <Experience image={'/js.png'} text={'3+'} size={'75%'} />
            <Experience image={'/logo192.png'} text={'1+'} size={'25%'} />
            <Experience image={'/ts.png'} text={'2+'} size={'50%'} />
          </div>
          <div></div>
        </div>
      </ContainerOption>
      <ContainerOption>
        <h2>Education</h2>
        <div style={{ padding: '1rem 1rem 2rem' }}>
          <div
            style={{
              display: 'grid',
              alignItems: 'baseline',
              gap: '30px',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-end',
              }}
            >
              <h6>2018 - 2022</h6>
              <h3>
                Software Engineering Bachelor - University of the State of Santa
                Catarina
              </h3>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                }}
              >
                <h6>2018 - 2022</h6>
              </div>

              <h3>Architectures for distributed systems - Puc Minas</h3>
            </div>
          </div>
        </div>
      </ContainerOption>
    </ContainerHome>
  );
}
