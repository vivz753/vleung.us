import React from 'react'
import tw, { css } from 'twin.macro'

export const H1= tw.h1`sm:text-5xl text-3xl mb-4 font-regular`

export const RegularText = css`${tw`my-1 text-sm leading-relaxed font-regular`};`
export const RegularParagraph = css`${RegularText} ${tw`my-6 items-center text-center justify-center`}`
export const Quote=css`${tw`text-xl my-4 font-regular`}`

export const Text = props => (
  <p css={props.style}>
    {props.text}
  </p>
)
