import React from 'react';
import { render, screen } from '../test-utils';
import CarriersSection from '@/app/components/CarriersSection';

beforeEach(() => {
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null
    });
    window.IntersectionObserver = mockIntersectionObserver;
    
  });


describe('Carriers Section', () => {
  beforeEach(() => {
    render(<CarriersSection/>);
  });

  it('displays all carrier logos', () => {
    const carriersContainer = screen.getByRole('carriergrid');
    const logos = carriersContainer.querySelectorAll('img');
    expect(logos).toHaveLength(12); 
  });

  it('provides tracker links for all carriers', () => {
    const carriersContainer = screen.getByRole('carriergrid');
    const links = carriersContainer.querySelectorAll('a');
    expect(links).toHaveLength(12); 
  });


});
