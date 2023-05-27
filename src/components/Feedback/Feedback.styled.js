import styled from 'styled-components';

export const FeedbackListButtons = styled.ul`
  display: flex;
  justify-content: space-evenly;

  margin-bottom: 30px;

  & button {
    padding: 7px 13px;

    border-radius: 7px;
    border: none;
    font-size: 20px;
    color: #fff;
    background-color: #263b44;
  }

  & button[name='good']:hover,
  & button[name='good']:focus {
    background-color: #038d00;
  }

  & button[name='neutral']:hover,
  & button[name='neutral']:focus {
    background-color: #7e7e7e;
  }

  & button[name='bad']:hover,
  & button[name='bad']:focus {
    background-color: #c92020;
  }
`;
