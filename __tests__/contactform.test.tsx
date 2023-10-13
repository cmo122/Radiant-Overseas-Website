import React from 'react';
import { render, screen } from '../test-utils';
import GetInTouch from '@/app/components/GetInTouch';

beforeEach(() => {
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null
    });
    window.IntersectionObserver = mockIntersectionObserver;
    render(<GetInTouch/>);
  });


describe('Get In Touch Form', () => {

  it('displays all contact info', async() => {
    const infoTitle = await screen.findAllByRole('contactTitle');
    const infoDescription = await screen.findAllByRole('contactDescription');
    expect(infoTitle).toHaveLength(4);
    expect(infoDescription).toHaveLength(4);  
  });

  it('displays all icons', async() => {
    const icons = await screen.findAllByRole('contactIcon');
    expect(icons).toHaveLength(4); 
  });

  it('displays all inputs', async() => {
    const nameInput = screen.getByLabelText('Your name');
    const emailInput = screen.getByPlaceholderText('johndoe@gmail.com');
    const subjectInput = screen.getByPlaceholderText('Subject');
    const messageInput = screen.getByPlaceholderText('Please include all relevant information');
    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(subjectInput).toBeInTheDocument();
    expect(messageInput).toBeInTheDocument();
  });

  it('displays send button', async()=>{
    const sendButton= await screen.findByRole('sendMessage')
    expect(sendButton).toBeInTheDocument();
  })

});
