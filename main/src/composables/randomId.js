export default function randomId() {
  // create a random number between 1 and 10000
  const randomNumber = Math.floor(Math.random() * 10000) + 1

  // return the random number as a string
  return randomNumber.toString()
}
