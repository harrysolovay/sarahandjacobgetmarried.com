export default (data) => (
  Object.keys(data)
    .map(key => {
      return `${ encodeURIComponent(key) }=${ encodeURIComponent(data[key]) }`
    })
    .join('&')
)