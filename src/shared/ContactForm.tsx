import styled from '@emotion/styled'
import { FormEvent, useState, useRef } from 'react'

import { Button } from './Button'
import { Icon } from './Icon'
import { Input, Textarea, Label } from './Input'
import { HStack } from './Stack'
import { Paragraph, Heading } from './Text'

export const ContactForm = () => {
  const formElementRef = useRef<HTMLFormElement>(null)

  const [status, setStatus] = useState({
    loading: false,
    error: false,
    errorMessage: '',
    success: false
  })

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setStatus({
      ...status,
      loading: true
    })

    const formData = new FormData(event.target as HTMLFormElement)

    formData.append('access_key', 'cd396e1b-515b-4f88-880c-9ecbab5334f3')

    const object = Object.fromEntries(formData)
    const json = JSON.stringify(object)

    const result = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: json
    })

    const response = await result.json()

    if (response.success) {
      setStatus({
        ...status,
        loading: false,
        success: true
      })
      if (formElementRef.current != null) {
        formElementRef.current.reset()
      }
    } else {
      setStatus({
        ...status,
        loading: false,
        error: true,
        errorMessage: response.message
      })
      console.warn(`Form Error: ${status.errorMessage}`)
    }
  }

  return (
    <Form ref={formElementRef} onSubmit={handleSubmit} method="POST">
      {status.success ? (
        <HStack gap="1" justify="center">
          <Icon icon="verified" style={{ color: 'var(--color-green)' }} />
          <Heading color="green" size="1" align="center">
            Your message was sent. Thank you!
          </Heading>
        </HStack>
      ) : null}
      {status.error ? (
        <HStack gap="1" justify="center">
          <Icon icon="error" style={{ color: 'var(--color-warning)' }} />
          <Heading color="warning" size="1" align="center">
            There was a problem sending your message.
            <br />
            Please try again.
          </Heading>
        </HStack>
      ) : null}
      <Label>
        <Paragraph size="1">Full name</Paragraph>
        <Input
          type="text"
          name="name"
          required
          placeholder="Jane Smith"
          emphasys="fill"
        />
      </Label>
      <Label>
        <Paragraph size="1">
          Company <small>(optional)</small>
        </Paragraph>
        <Input
          type="text"
          name="company"
          placeholder="ABC inc"
          emphasys="fill"
        />
      </Label>

      <Label>
        <Paragraph size="1">Email</Paragraph>
        <Input
          type="email"
          name="email"
          required
          placeholder="jane.smith@abc.inc"
          emphasys="fill"
        />
      </Label>
      <Label>
        <Paragraph size="1">Message</Paragraph>
        <Textarea
          name="message"
          required
          placeholder="Your message"
          emphasys="fill"
        />
      </Label>

      <Button type="submit" disabled={status.loading}>
        {status.loading ? 'Sending...' : 'Send'}
      </Button>
    </Form>
  )
}

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`
