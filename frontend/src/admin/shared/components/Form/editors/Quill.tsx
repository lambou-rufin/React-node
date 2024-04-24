import { useQuill } from 'react-quilljs'
import '../../../../assets/scss/libs/editors/quill.scss'
import { FC, useEffect } from 'react'

// quill default component
export const Quill: FC<any> = ({ placeholderValue, setValueQuill, defaultValue, ...props }) => {
  const placeholder = `${!placeholderValue ? 'Hello World!' : placeholderValue}`

  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      [{ color: [] }, { background: [] }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ script: 'sub' }, { script: 'super' }],
      [{ size: ['small', false, 'large', 'huge'] }],
    ],
  }
  const { quill, quillRef, Quill } = useQuill({ modules, placeholder })

  useEffect(() => {
    if (quill) {
      quill.on('text-change', () => {
        setValueQuill(quill.root.innerHTML)
      })
    }
  }, [quill])

  useEffect(() => {
    if (quill && defaultValue) {
      quill.root.innerHTML = defaultValue
    }
  }, [defaultValue, quill])

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div ref={quillRef} />
    </div>
  )
}

// quill minimal component
export const QuillMinimal: FC<any> = ({ placeholderValue, ...props }) => {
  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', { list: 'bullet' }],
      [{ header: 1 }, { header: 2 }, { header: [3, 4, 5, 6, false] }],

      [{ align: [] }],

      ['clean'],
    ],
  }

  const placeholder = `${!placeholderValue ? 'Write some awesome text...' : placeholderValue}`

  const formats = ['bold', 'italic', 'underline', 'strike']

  const { quillRef } = useQuill({ modules, formats, placeholder })

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div ref={quillRef} />
    </div>
  )
}

export default Quill
