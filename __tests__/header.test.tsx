// Header.test.js

import React from 'react';
import { render, screen } from '../test-utils';
import Header from '@/app/components/Header';

beforeEach(() => {
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null
  });
  window.IntersectionObserver = mockIntersectionObserver;
  render(<Header />)
});



describe('Header Component testing', () => {
    describe('Desktop Header',()=>{
        it('renders navigation links', () => {
            const carrierLink = screen.getByText('Our Carriers');
            const expertiseLink = screen.getByText('Our Expertise');
            const contactLink = screen.getByText('Contact Us');

            expect(carrierLink).toBeInTheDocument();
            expect(expertiseLink).toBeInTheDocument();
            expect(contactLink).toBeInTheDocument();
        });

        it('renders the logo', () => {
            const logo = screen.getByTestId('logo');
            expect(logo).toBeInTheDocument();
        });
    })
});