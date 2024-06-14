import { render, screen } from '@testing-library/react';
import { Main } from '.';

describe('Main', () => {
  it('should render correctly', () => {
    render(<Main />);

    const main = screen.getByRole('heading', { name: /Main/i });
    expect(main).toBeInTheDocument();
  });

  it('should render a snapshot', () => {
    const { container } = render(<Main />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
