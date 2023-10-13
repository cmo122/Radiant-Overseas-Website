import { render, screen } from '../test-utils'
import Index from '../pages/index'
import 'match-media-mock';

beforeEach(() => {
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null
  });
  window.IntersectionObserver = mockIntersectionObserver;
  render(<Index />)
});

describe('Check page sections are rendered', () => {
  it('Renders the header', () => {
    const header = screen.getByRole('header')
    expect(header).toBeInTheDocument()
  })

  it('Renders the hero section', () => {
    const hero = screen.getByRole('hero')
    expect(hero).toBeInTheDocument()
  })

  it('Renders the main features section', () => {
    const mainFeatures = screen.getByRole('mainFeatures')
    expect(mainFeatures).toBeInTheDocument()
  })

  it('Renders the carriers section', () => {
    const carriers = screen.getByRole('carriers')
    expect(carriers).toBeInTheDocument()
  })

  it('Renders the expertise section', () => {
    const expertise = screen.getByRole('expertise')
    expect(expertise).toBeInTheDocument()
  })

  it('Renders the contact form', () => {
    const contact = screen.getByRole('contact')
    expect(contact).toBeInTheDocument()
  })

  it('Renders the footer', () => {
    const footer = screen.getByRole('footer')
    expect(footer).toBeInTheDocument()
  })
})