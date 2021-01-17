// eslint-disable-next-line no-use-before-define
import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

// Context
import { usePreviewContext } from '../../context/Preview'

// Styles
import { Container } from './styles'

const DropZone: React.FC = () => {
  const { files, setFiles } = usePreviewContext()

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file: any) => {
      setFiles((OldFiles: Array<Object>) => [ ...OldFiles, file ])
    })
  }, [])

  const {
    getRootProps, getInputProps, isDragAccept, isDragActive
  } = useDropzone({ onDrop })

  return (
    <>
      <Container {...getRootProps()}>
        <input {...getInputProps()} />
        {
          isDragActive ? <p>Drop the file here</p> : (
            <p>
              Drag drop some files
              here, or click to select files
            </p>
          )
        }
      </Container>
    </>
  )
}

export default DropZone
