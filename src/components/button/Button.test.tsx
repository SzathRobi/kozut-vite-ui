import { render, screen } from '@testing-library/react';

import { Button } from './Button';

jest.mock('./buttonVariants');

describe('Button', () => {
  it('should render the title', () => {
    render(<Button>Lick me</Button>);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
