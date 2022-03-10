import getBnNumbers from '~/utils/getBnNumbers'

const toastFootNote = () => {
  let footnote = document.querySelectorAll('.footnote-ref')
  let noteList = document.querySelector('.footnotes')
  let bottomFootNote: any = document.querySelector('.foot-notes')
  footnote.forEach((element, index) => {
    element.removeAttribute('href')
    let innerNumber = Number(element.innerHTML)
    element.innerHTML = getBnNumbers(innerNumber)
    element.addEventListener('click', function () {
      let listArray: any = noteList?.children[1].children
      bottomFootNote.innerHTML = listArray[index].innerHTML
      bottomFootNote.style.opacity = '1'
      bottomFootNote.style.pointerEvents = 'auto'
    })
  })
}

export default toastFootNote
