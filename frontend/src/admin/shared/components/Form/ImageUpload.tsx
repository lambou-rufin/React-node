import { FC, useEffect } from 'react'

const ImageUpload: FC<any> = ({ src, ...props }) => {
  // thumbnail uplaod
  const uploadImage = (selector: any) => {
    const elem = document.querySelectorAll(selector)
    elem.forEach((item: any) => {
      item.addEventListener('change', (e: any) => {
        if (item.files && item.files[0]) {
          const img = document.getElementById(item.dataset.target) as any
          if (img) {
            img.onload = function () {
              URL.revokeObjectURL(img.src)
            }
            img.src = URL.createObjectURL(item.files[0])

            const allowedExtensions = ['jpg', 'JPEG', 'JPG', 'png']
            const fileExtension = e.target.value.split('.').pop()
            const lastDot = e.target.value.lastIndexOf('.')
            const ext = e.target.value.substring(lastDot + 1)
            const extTxt = (img.value = ext)
            if (!allowedExtensions.includes(fileExtension)) {
              alert(extTxt + ' file type not allowed, Please upload jpg, JPG, JPEG, or png file')
              img.src = '/images/avatar/avatar-placeholder.jpg'
            }
          }
        }
      })
    })
  }

  useEffect(() => {
    uploadImage('.upload-image')
  })

  return (
    <div className="image-upload-wrap d-flex flex-column align-items-center">
      <div className="media media-huge border">
        <img id="image-result" className="w-100 h-100" src={src} alt="avatar" />
      </div>
      <div className="pt-3">
        <input
          className="upload-image"
          data-target="image-result"
          id="change-avatar"
          type="file"
          max="1"
          hidden
        />
        <label htmlFor="change-avatar" className="btn btn-md btn-primary">
          Selectionner
        </label>
      </div>
    </div>
  )
}

export default ImageUpload
