import styled from 'styled-components';
import Container from '../../../../components/Container'
import image from '../../../../../images/background.svg'
import infographic from '../../../../../images/infographic.svg'
import { StyledButton } from '../../../../components/Button/style';
import Card from '../../../../components/Card'

export const SectionWrapper = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    background-color: #e3f2fd;
    min-height: 50vh;
    margin-bottom: 12rem;
`;

export const ContentContainer = styled(Container)`
  flex-direction: column;
  justify-content: center;
`;

export const FlexContainer = styled.div`
    display: flex;
    width: 100%;
    z-index: 1;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
    padding: 1rem;
`;

export const FlexItem = styled.div`
  
`;

export const Title = styled.h3`
    margin: 0;
    font-size: 4rem;
    margin-top: 2rem;
    text-align: center;
    color: #424242;
`;

export const SubTitle = styled.h4`
    font-size: 1.2rem;
    font-weight: 400;
    text-align: center;
`;

export const Number = styled.h5`
  margin: 0;
  padding: 0;
  color: rgba(163, 247, 191, .6);
  font-size: 16rem;
`;

export const Text = styled.p`
  margin-top: 2rem;
  font-size: 1rem;
  text-align: left;
`;

export const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 812px;
  height: auto;
`;

export const CardTitle = styled.h4`
  margin: 0;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
`;

export const RequestDemoButton = styled(StyledButton)`
    background: linear-gradient(16deg, rgba(255,122,122,1) 0%, rgba(255,79,79,1) 100%);
    padding: 1rem 1rem 1rem 1rem;
    border-radius: 12px;
    color: white;
    width: 182px;
    height: 56px;
`;

export const RequestDemoInput = styled.input`
    padding: 0 2rem;
    border-radius: 0px;
    width: 312px;
    box-shadow: none;
    border: none;
    height: 56px;
`;