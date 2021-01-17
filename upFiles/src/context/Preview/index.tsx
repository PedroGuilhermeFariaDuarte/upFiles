import React, {
  useContext, useState, createContext, PropsWithChildren
} from 'react'

// Interfaces
import { TypePropsContext } from './interface'

const PreviewContext = createContext<TypePropsContext>({ files: [], setFiles: Function })
PreviewContext.displayName = 'Preview Context'

// @ts-ignore
// eslint-disable-next-line no-undef
const WrapPreviewContext: React.FC<PropsWithChildren<P>> = ({ children }) => {
  const [ files, setFiles ] = useState<Array<Object>>([])

  return (
    <PreviewContext.Provider
      value={{
        files,
        setFiles
      }}
    >
      { children}
    </PreviewContext.Provider >
  )
}

export const usePreviewContext = () => {
  const context = useContext(PreviewContext)

  return context;
}

export default WrapPreviewContext
