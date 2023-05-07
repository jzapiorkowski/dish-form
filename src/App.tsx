import { Paper } from '@mui/material';
import { DishForm } from './modules/DishForm';
import { styled } from '@mui/material/styles';

const StyledFormContainer = styled(Paper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 35px;
  margin-top: 40px;
`;

const StyledPageContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <StyledPageContainer>
      <StyledFormContainer elevation={3}>
        <h2>Dish Form</h2>
        <DishForm />
      </StyledFormContainer>
    </StyledPageContainer>
  );
}

export default App;
