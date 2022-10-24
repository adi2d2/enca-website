import styled from '@emotion/styled'
import { Button } from './Button'
import { Input, Textarea, Label } from './Input'
import { Paragraph } from './Text'

export const ContactForm = () => {
  return (
    <Form action="https://api.web3forms.com/submit" method="POST">
      <input
        type="hidden"
        name="access_key"
        value="cd396e1b-515b-4f88-880c-9ecbab5334f3"
      />
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

      <input
        type="hidden"
        name="redirect"
        value="https://web3forms.com/success"
      />

      <Button type="submit">Send</Button>
    </Form>
  )
}

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`
