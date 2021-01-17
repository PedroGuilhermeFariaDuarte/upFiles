/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */
import React, {
  useEffect, useState, useCallback, useMemo,
  PropsWithChildren
} from 'react'
import socket from 'socket.io-client'

// Styles
import {
  Container, Content, Card, CardPreview, CardFooter, ButtonSend, ContainerSend
} from './styles'

// Components
import AboutFile from '../AboutFile'

// Context
import { usePreviewContext } from '../../context/Preview'

// Middlewares
import FormatBytes from '../../middleware/FormatBytes'

// Services
import Axios from '../../services/axios'

// @ts-ignore
// eslint-disable-next-line no-undef
const Preview: React.FC<PropsWithChildren<P>> = () => {
  const { files, setFiles } = usePreviewContext();
  const [ previews, setPreviews ] = useState<Array<any>>([])
  const [ totalSize, setTotalSize ] = useState<string>('')
  const [ totalSizeRaw, setTotalSizeRaw ] = useState<number>(0)
  const [ restTotalSize, setRestTotalSize ] = useState<string>('')
  const [ clientID, setClientID ] = useState<string>('')

  useEffect(() => {
    function handlerConnectSocket() {
      if (clientID === '') {
        // @ts-ignore
        const client = socket.connect('http://localhost:3399')

        // @ts-ignore
        client.on('connect', (msg) => {
          console.log(`Conectado ${client.id}`)
          setClientID(client?.id)
        })

        client.on('file-uploaded', (dataByte: any) => {
          const newSize = totalSizeRaw - dataByte
          const result = newSize < 0 ? 0 : newSize
          // console.log(dataByte, result, totalSizeRaw)
          setRestTotalSize(FormatBytes(result))
        })
      }
    }
    handlerConnectSocket()
  }, [ clientID ])

  useEffect(() => {
    function handlerLoadAllFiles() {
      if (files.length <= 0) return;

      files.forEach((file) => {
        hanlderReadFile(file)
      })
    }
    handlerLoadAllFiles()
  }, [ files ])

  useEffect(() => {
    function handlerShowTotalSizeOfFiles() {
      if (!previews.length) return

      const { size } = previews.reduce((prev, next) =>
        ({ size: prev.size + next.size }), { size: 0 })

      setTotalSizeRaw(size)
      setTotalSize(FormatBytes(size))
      setRestTotalSize(FormatBytes(size))
    }

    handlerShowTotalSizeOfFiles()
  }, [ previews ])

  function hanlderReadFile(file: any) {
    const reader = new FileReader()

    reader.onabort = () => console.log('file reading was aborted')
    reader.onerror = () => console.log('file reading has failed')
    reader.onload = () => Promise.resolve(
      setPreviews((OldPreviews) =>
        [ ...OldPreviews.filter((Oldfile) => Oldfile?.name !== file?.name), {
          fileID: `${file?.size}${new Date().getMilliseconds()}`,
          name: file?.name,
          size: file?.size,
          dataURL: reader.result,
          raw: file
        } ])
    ).then((_response) => reader.result)

    Promise.resolve(reader.readAsDataURL(file)).then((_response) => console.log('File read'))
  }

  function handlerSendFile(filedID: Number) {
    if (!previews.length) return

    const file = previews.find((preview) => preview?.fileID === filedID)

    if (!file) return

    const formData = new FormData()

    formData.append('teste', 'teste de filed')
    formData.append('files', file?.raw, file?.name)
  }

  async function handlerSendAllFile() {
    if (!previews.length || clientID === '') return

    previews.forEach(async (file) => {
      const formData = new FormData()
      formData.append('files', file?.raw, file?.name)

      setPreviews((OldPreviews) => [ ...OldPreviews.filter((preview) => preview?.id !== file?.id) ])
      handlerClearAllStates()

      await Axios.post(`?socket=${clientID}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
    })
  }

  function handlerClearAllStates() {
    setTotalSize('')
    setTotalSizeRaw(0)
    setRestTotalSize('')
  }

  return (
    <Container>
      <Content>
        {
          previews.length > 0 && previews.map((file: any) => (
            <Card key={file?.index} id={file?.fileID}>
              <CardPreview widthPercent={100 - 0} urlImage={file?.dataURL}>
                <div id="startUpload" />
                <div id="containerButtons">
                  <button type="button" onClick={() => handlerSendFile(file?.fileID)} />
                  <button type="button" />
                </div>
              </CardPreview>
              <CardFooter>
                <AboutFile name={file?.name} size={file.size} />
              </CardFooter>
            </Card>
          ))
        }
      </Content>
      <ContainerSend>
        <ButtonSend onClick={() => handlerSendAllFile()}>
          Enviar
        </ButtonSend>
        <p>
          enviando:
          {' '}
          {restTotalSize}
          {' '}
          de
          {' '}
          {totalSize || `${0} Bytes`}
        </p>
      </ContainerSend>
    </Container>
  )
}

export default Preview;
