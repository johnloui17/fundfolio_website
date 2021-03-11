export const gumletLoader = ({ src, width, quality }) => {
    return `https://fundfolio.gumlet.io/fundfolio${src}?w=${width}&q=${quality || 75}`
}
  