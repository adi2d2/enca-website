import { Paragraph } from './Text'

export const TextDemo = () => {
  return (
    <>
      <Paragraph>Default</Paragraph>
      <Paragraph align="left">Left</Paragraph>
      <Paragraph align="center">Center</Paragraph>
      <Paragraph align="right">Right</Paragraph>
      <hr />
      <Paragraph>Default</Paragraph>
      <Paragraph weight="normal">Normal</Paragraph>
      <Paragraph weight="bold">Bold</Paragraph>
      <hr />
      <Paragraph>Default</Paragraph>
      <Paragraph transform="normal">Normal</Paragraph>
      <Paragraph transform="uppercase">Uppercase</Paragraph>
      <hr />
      <Paragraph>Default</Paragraph>
      <Paragraph color="light">light</Paragraph>
      <Paragraph color="blue">blue</Paragraph>
      <Paragraph color="green">green</Paragraph>
      <Paragraph color="mid1">mid1</Paragraph>
      <Paragraph color="mid2">mid2</Paragraph>
      <hr />
      <Paragraph>Default</Paragraph>
      <Paragraph size="1">Font size 1</Paragraph>
      <Paragraph size="2">Font size 2</Paragraph>
      <Paragraph size="3">Font size 3</Paragraph>
      <Paragraph size="4">Font size 4</Paragraph>
      <Paragraph size="5">Font size 5</Paragraph>
      <Paragraph size="6">Font size 6</Paragraph>
      <Paragraph size="7">Font size 7</Paragraph>
      <Paragraph size="8">Font size 8</Paragraph>
      <Paragraph size="9">Font size 9</Paragraph>
    </>
  )
}
