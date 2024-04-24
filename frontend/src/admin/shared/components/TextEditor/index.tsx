import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const TextEditor = ({ value, onChange, className, id }) => {
  const [editorValue, setEditorValue] = useState(value || '')

  const handleChange = (value) => {
    setEditorValue(value)
    if (onChange) {
      onChange(value)
    }
  }
  const Texteditor = new ReactQuill({
    modules: {
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],
        [{ header: 1 }, { header: 2 }],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ script: 'sub' }, { script: 'super' }],
        [{ indent: '-1' }, { indent: '+1' }],
        [{ direction: 'rtl' }],
        [{ size: ['small', false, 'large', 'huge'] }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ color: [] }, { background: [] }],
        [{ font: [] }],
        [{ align: [] }],
        ['clean'],
        ['link', 'image', 'video'],
      ],
    },
    placeholder: 'Start typing here...',
    theme: 'snow',
    value: editorValue,
    onChange: handleChange,
    readOnly: false,
    bounds: document.body,
    formats: [
      'bold',
      'italic',
      'underline',
      'strike',
      'blockquote',
      'code-block',
      'header',
      'list',
      'indent',
      'link',
      'image',
      'video',
      'direction',
      'size',
      'color',
      'background',
      'font',
      'align',
    ],
    tabIndex: 100,
  })
  return (
    <ReactQuill
      id={id}
      formats={[
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'code-block',
        'header',
        'list',
        'indent',
        'link',
        'image',
        'video',
        'direction',
        'size',
        'color',
        'background',
        'font',
        'align',
      ]}
      value={editorValue}
      onChange={handleChange}
      className={className + 'text-editor'}
      tabIndex={1}
      modules={{
        toolbar: [
          ['bold', 'italic', 'underline'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          [{ color: [] }],
          [{ font: [] }],
          [{ align: [] }],
          ['clean'],
          ['link'],
        ],
      }}
    />
  )
}

export default TextEditor
