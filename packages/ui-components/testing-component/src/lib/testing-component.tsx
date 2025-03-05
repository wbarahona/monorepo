import styled from 'styled-components';

const StyledTestingComponent = styled.div`
  color: pink;
`;
export function TestingComponent() {
  return (
    <StyledTestingComponent>
      <h1>Welcome to TestingComponent!</h1>
    </StyledTestingComponent>
  );
}

export default TestingComponent;
