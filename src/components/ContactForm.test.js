import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import ContactForm from './ContactForm'
import { act } from 'react-dom/test-utils'

test('Renders Contact Form without errors', () => {
    render(<ContactForm />)
})

test('the user can fill out and submit the form', () => {
    render(<ContactForm />)
    

    const firstNameInput = screen.getByLabelText(/first name/i)
    const lastNameInput = screen.getByLabelText(/last name/i)
    const emailInput = screen.getByLabelText(/email/i)
    const messageInput = screen.getByLabelText(/message/i)
    
    fireEvent.change(firstNameInput, {target: {value: 'Ste', name: 'firstName'}})
    fireEvent.change(lastNameInput, {target: {value: 'Mount', name: 'lastName'}})
    fireEvent.change(emailInput, {target: {value: 'Stermount@email.com', name: 'email'}})
    fireEvent.change(messageInput, {target: {value: 'Good boy', name: 'message'}})


    const button = screen.getByRole('button')

    async () => {
        fireEvent.click(submit);
        const newUser = screen.getByText(/mount/i)
        expect(newUser).toBeTruthy()        
    }
})

test('the user can fill out and submit the form without a message', () => {
    render(<ContactForm />)
    

    const firstNameInput = screen.getByLabelText(/first name/i)
    const lastNameInput = screen.getByLabelText(/last name/i)
    const emailInput = screen.getByLabelText(/email/i)
    const messageInput = screen.getByLabelText(/message/i)
    console.log(messageInput)
    
    fireEvent.change(firstNameInput, {target: {value: 'Ste', name: 'firstName'}})
    fireEvent.change(lastNameInput, {target: {value: 'Mount', name: 'lastName'}})
    fireEvent.change(emailInput, {target: {value: 'Stermount@email.com', name: 'email'}})


    const button = screen.getByRole('button')

    async () => {
        fireEvent.click(submit);
        const newUser = screen.getByText(/mount/i)
        expect(newUser).toBeTruthy()   
        expect(messageInput).toBeTruthy()
    }
})

