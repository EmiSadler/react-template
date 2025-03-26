import { render, screen } from '@testing-library/react';
import Gig from '../src/components/Gig.jsx';

test('renders Gig component'), () => {
  render(<Gig />);
  expect(screen.getByRole('heading')).toHaveTextContent('The Decemberists');
  expect(screen.getByRole('img')).toHaveAttribute('alt', 'The King is Dead album cover');
  expect(screen.getByText('An eclectic evening listening to The Decemberists with drinks.')).toBeInTheDocument();
  expect(screen.getByText('31 May 2025')).toBeInTheDocument();
  expect(screen.getByText('Somewhere cozy with a fire')).toBeInTheDocument();

};  

