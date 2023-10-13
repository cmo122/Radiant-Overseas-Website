import React from 'react';
import { render, screen, fireEvent, waitFor } from '../test-utils';
import Footer from '@/app/components/Footer';


beforeEach(() => {
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null
    });
    window.IntersectionObserver = mockIntersectionObserver;
    render(<Footer/>);
  });


describe('Footer', () => {

  it('changes url when clicking cargo tracking link', async () => {
    const link = screen.getByText('Cargo Tracking');
    fireEvent.click(link);
    await waitFor(()=>{
        expect(global.window.location.href).toContain('/#Cargo%20Tracking')
    })
  });

  it('changes url when clicking cargo insurance', async () => {
    const link = screen.getByText('Cargo Insurance');
    fireEvent.click(link);
    await waitFor(()=>{
        expect(global.window.location.href).toContain('/#Cargo%20Insurance')
    })
  });

  it('changes url when clicking customs clearance link', async () => {
    const link = screen.getByText('Customs Clearance');
    fireEvent.click(link);
    await waitFor(()=>{
        expect(global.window.location.href).toContain('/#Customs%20Clearance')
    })
  });

  it('changes url when clicking transport routing link', async () => {
    const link = screen.getByText('Transport Routing');
    fireEvent.click(link);
    await waitFor(()=>{
        expect(global.window.location.href).toContain('/#Transport%20Routing')
    })
  });

  it('changes url when clicking Consolidation and Deconsolidation link', async () => {
    const link = screen.getByText('Consolidation and Deconsolidation');
    fireEvent.click(link);
    await waitFor(()=>{
        expect(global.window.location.href).toContain('/#Consolidation%20and%20Deconsolidation')
    })
  });

  it('renders logo', () => {
    const logo = screen.getByAltText('ROE LINE logo');
    expect(logo).toBeInTheDocument()
  });

});
