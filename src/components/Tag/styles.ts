import styled from 'styled-components'
import { cores } from '../../styles'
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.laranja};
  color: ${cores.bege};
  padding: ${(props) => (props.size === 'big' ? '4px 6px' : '6px 4px')};
  font-size: ${(props) => (props.size === 'big' ? '14px' : '12px')};
  font-weight: bold;
  display: inline-block;
  margin-bottom: 8px;
  margin-left: 8px;
`
