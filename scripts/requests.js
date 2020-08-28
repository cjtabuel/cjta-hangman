const getPuzzle = async (wordCount) => {
  const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)

  if (response.status === 200) {
    const data = await response.json()
    return data.puzzle
  } else {
    throw new Error('Unable to fetch puzzle')
  }
}

const getCountry = async (countryCode) => {
  const response = await fetch('//restcountries.eu/rest/v2/all')
  
  if (response.status === 200) {
    const data = await response.json()
    return data.find((country) => country.alpha2Code === countryCode)
  } else {
    throw new Error('Unable to fetch country')
  }
}

const getLocation = async () => {
  const response = await fetch('//ipinfo.io/json?token=c91a219f7d8d75')
  
  if (response.status === 200) {
    return response.json()
  } else {
    throw new Error('Unable to fetch location')
  }
}

const getCurrentCountry = async () => {
  let location = await getLocation()
  let country = await getCountry(location.country)

  return country
}