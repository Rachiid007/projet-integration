import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

const apiClientForm = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'multipart/form-data'
  }
})

interface Flashcard {
  word: string
  translation: string
}
interface FlashcardImage {
  id: string
  image: any
}
export default {
  getFlashcards() {
    return apiClient.get('/cards')
  },
  getFlashcard(id: string) {
    return apiClient.get('/cards/' + id)
  },
  postFlashcard(flashcard: Flashcard) {
    // for (var key of formData.entries()) {
    //   console.log(key[0] + ', ' + key[1])
    // }

    return apiClient.post('/cards', flashcard)
  },
  // putFlashcard(flashcard: Flashcard) {
  //   return apiClient.put('/cards/' + flashcard.id, flashcard)
  // },
  deleteFlashcard(id: string) {
    return apiClient.delete('/cards/' + id)
  },
  uploadImage(flashcardimage: FlashcardImage) {
    let formData = new FormData()
    formData.append('id', flashcardimage.id)
    formData.append('file', flashcardimage.image)
    return apiClientForm.post('/cards/image', formData)
  }
}
