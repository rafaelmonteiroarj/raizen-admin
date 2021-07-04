import * as S from './styles';

const Example = ({
  title = 'Boilerplate React',
  description = 'TypeScript, ReactJS, NextJS e Styled Components',
  backgroundColor = '#06092b',
  color = '#fff'
}: Props) => (
  <S.Wrapper backgroundColor={backgroundColor} color={color}>
    <S.Logo src="/img/logo.svg" alt="Boilerplate React Avançado." />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration src="/img/icon-yu.png" alt="Raizen tecnology." />
  </S.Wrapper>
);

interface Props {
  title?: string;
  description?: string;
  color?: string;
  backgroundColor?: string;
}

export default Example;
