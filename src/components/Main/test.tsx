import { render, screen } from '@testing-library/react';
import { Main } from '.';

describe('Main', () => {
  it('should render correctly', () => {
    render(<Main />);

    const main = screen.getByRole('heading', { name: /template next/i });
    const img = screen.getByRole('img', { name: /desenvolvedor/i });

    expect(main).toBeInTheDocument();
    expect(img).toBeInTheDocument();
  });

  it('should render a snapshot', () => {
    const { container } = render(<Main />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
