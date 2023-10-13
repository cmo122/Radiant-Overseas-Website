import React from 'react';
import { render, screen } from '../test-utils';
import DetailedCardsSection from '@/app/components/DetailedCardsSection';

beforeEach(() => {
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null
    });
    window.IntersectionObserver = mockIntersectionObserver;
    render(<DetailedCardsSection/>);
  });


describe('Detailed Cards Section', () => {

  it('displays all major cards', async() => {
    const cards = await screen.findAllByRole('detailedCard');
    expect(cards).toHaveLength(5); 
  });

  it('displays all icons', async() => {
    const icons = await screen.findAllByRole('cardsIcon');
    expect(icons).toHaveLength(20); 
  });

});
