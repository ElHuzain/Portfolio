import { styled } from 'styled-components';
import Text from '../../General/Text.styled';
import Button from '../../General/Button.styled';

const StyledProject = styled.div`
  width: 312px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const ImageContainer = styled.div`
  width: 192px;
  height: 143px;
  border-radius: 20px;
  padding: 19px;
  background-color: ${({ theme }) => theme.colors.element};
  margin: 0 auto;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
    border-radius: 10px;
    margin: auto;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }
  }
`

const Divider = styled.div`
  height: 19px;
  width: 76px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.element};
  margin: 0 auto;
`

const Content = styled.div`
  
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.element};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius};

  div:first-of-type{
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  div:last-of-type{
    display: flex;
    gap: 0.5rem;
    button {
      height: fit-content;
      width: fit-content;
      img {
        width: 20px;
      }
    }
  }
`

const Project = ({ title, subtitle, technologies, image, repository, live }) => {
  return (
    <StyledProject>

      <ImageContainer>
        <img src={image} />
      </ImageContainer>

      <Divider></Divider>

      <Content>
        <div>
          <Text color='primary'>{title}</Text>
          <Text fs='small'>{subtitle}</Text>
        </div>
        <div>
          <a target="_blank" rel="noreferrer" href={repository}><Button img="./images/buttons/github.rep.svg" text="Repository" /></a>
          <a target="_blank" rel="noreferrer" href={live}><Button img="./images/buttons/preview.svg" text="Live Preview" /></a>
        </div>
      </Content>

    </StyledProject>
  )
}

export default Project
