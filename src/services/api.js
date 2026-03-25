const CONTENT_URL = '/data/content.json'

function simulateDelay() {
  const ms = 1000 + Math.random() * 500
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function fetchContent() {
  const response = await fetch(CONTENT_URL)
  if (!response.ok) {
    throw new Error('Failed to load content.json')
  }
  return response.json()
}

export async function fetchHeroContent() {
  await simulateDelay()
  const data = await fetchContent()
  return {
    navigation: data.navigation,
    hero: data.hero
  }
}

export async function fetchFeaturesContent() {
  await simulateDelay()
  const data = await fetchContent()
  return {
    featuresSection: data.featuresSection
  }
}

