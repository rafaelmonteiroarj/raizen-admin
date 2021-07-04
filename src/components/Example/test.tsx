import { render, screen } from '@testing-library/react';
import Example from '.';

describe('Testing example component', () => {
  it('render component', () => {
    /** verifica texto do titulo do componente renderizado */
    const { getByText, getByRole } = render(<Example />);
    const title = getByText('Boilerplate React');
    expect(title).toBeInTheDocument();

    /** verifica texto da descrição do componente renderizado */
    const description = getByRole('heading', {
      name: /typescript, reactjs, nextjs e styled components/i
    });
    expect(description).toBeInTheDocument();

    screen.logTestingPlaygroundURL();
  });
});
