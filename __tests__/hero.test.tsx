import React from 'react';
import { render, screen } from '../test-utils';
import { Hero } from '@/app/components/Hero';

beforeEach(() => {
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null
    });
    window.IntersectionObserver = mockIntersectionObserver;
  });


describe('HeroSection', () => {
  beforeEach(() => {
    render(<Hero />);
  });

  it('displays the subtitle', () => {
    const subtitle = screen.getByText('The preferred freight forwarder for over 10 years');
    expect(subtitle).toBeInTheDocument();
  });

  it('displays a call-to-action button', () => {
    const ctaButton = screen.getByText('Contact Us');

    expect(ctaButton).toBeInTheDocument();
  });

  it('handles button click', () => {
    const ctaButton = screen.getByRole('contactButton', { name: 'Contact Us' });
    expect(ctaButton).toBeInTheDocument()
  });

});
