// type with functions

type UserType = {
  firstName: string,
  register?(): boolean
}

const userType: UserType = {
  firstName: "Sampaio",
  register() { return true }
}

console.log(userType.register)

type Person1 = {
  name: string
  age: number
  address: string
}

type Business = {
  name: string
  taxId: number
}

type PersonAddress = {
  secondAddress: string
  city: string
  country: string
}

type BusinessAddress = {
  locale: 'street' | 'avenue' | 'square'
}

// aqui como o tipo <T> is generic, ele verifica se o address is tipo string, se for usa o
// PersonAddress como type, se navigator, usa o BusinessAddress
type FinalAddress<T> = T extends { address: string } ? PersonAddress : BusinessAddress

const personAddress: FinalAddress<Person1> = {
  secondAddress: 'Street 2',
  city: 'California',
  country: 'Canada'
}

const businessAddress: FinalAddress<Business> = {
  locale: 'avenue'
}

console.log(personAddress)
console.log(businessAddress)

type FileFormats = 'png' | 'jpg' | 'gif' | 'svg' | 'mp4' | 'mp3'
type FilterAudioFile<T> = T extends 'mp4' | 'mp3' ? T : never
type AudioFile = FilterAudioFile<FileFormats>

const filesAudio: AudioFile = 'mp4'

console.log(filesAudio)

// type mapped types 
type User3 = {
  name: string
  address: string
  phone: string
  age: number
}

// type UserOptional = {
//   name?: string
//   address?: string
//   phone?: string
//   age?: number
// }

type UserReadonly = {
  readonly name: string
  readonly address: string
  readonly phone: string
  readonly age: number
}

// Aqui, serve para DRY dos varios types com mesmos parametros mas opcionais,
// no caso ficando igual o 'UserOptional'
type UserMappedType = {
  [P in keyof User3]?: User3[P]
}

const userMapped: UserMappedType = {
  name: 'My Name',
  address: 'Street 1'
}

console.log(userMapped)

//intersections

const productId: number | string = 1
console.log(productId)

//type assertions

const productName: any = 'Bone'

// let itemId: string
// itemId = productName as string

let itemId = <string>productName