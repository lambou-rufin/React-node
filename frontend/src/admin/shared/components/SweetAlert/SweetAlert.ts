import Swal from 'sweetalert2/src/sweetalert2.js'

export const alertDefault = (message: string) => {
  Swal.fire({
    title: message,
  })
}

export const alertSuccess = (text: string, title: string = '') => {
  Swal.fire({
    icon: 'success',
    title: title,
    text: text,
  })
}

export const alertInfo = () => {
  Swal.fire({
    icon: 'info',
    title: 'Good job!',
    text: 'You clicked the button!',
  })
}

export const alertWarning = () => {
  Swal.fire({
    icon: 'warning',
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
  })
}

export const alertError = (text: string, title: string = '') => {
  Swal.fire({
    icon: 'error',
    title: title,
    text: text,
  })
}

export const alertQuestion = () => {
  Swal.fire({
    icon: 'question',
    text: 'The Internet?',
    title: 'That thing is still around?',
  })
}

export const alertPositioned = () => {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Your work has been saved',
    showConfirmButton: false,
    timer: 1500,
  })
}

export const alertConfirm = () => {
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
  }).then((result: any) => {
    if (result.value) {
      Swal.fire('Deleted', 'You successfully deleted this file', 'success')
    } else {
      Swal.fire('Cancelled', 'Your file is still intact', 'info')
    }
  })
}

export const alertAutoClose = () => {
  Swal.fire({
    title: 'Auto close alert!',
    html: 'I will close in <b></b> milliseconds.',
    timer: 2000,
    timerProgressBar: true,
  })
}
