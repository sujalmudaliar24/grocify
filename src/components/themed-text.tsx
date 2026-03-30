import React from 'react'
import { Text, type TextProps, type TextStyle } from 'react-native'

type ThemedTextType = 'title' | 'link'

interface ThemedTextProps extends TextProps {
  type?: ThemedTextType
}

const typeStyles: Record<ThemedTextType, TextStyle> = {
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
  link: {
    color: '#0a7ea4',
  },
}

export function ThemedText({ type, style, ...props }: ThemedTextProps) {
  return <Text style={[type ? typeStyles[type] : undefined, style]} {...props} />
}
