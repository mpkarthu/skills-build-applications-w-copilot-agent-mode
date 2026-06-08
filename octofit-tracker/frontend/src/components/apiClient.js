export async function fetchResource(resource, apiBase) {
  const url = `${apiBase}/${resource}`
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`Failed to load ${resource}: ${response.status} ${response.statusText}`)
  }

  const json = await response.json()
  return normalizeResponse(json)
}

export function normalizeResponse(payload) {
  if (!payload) {
    return []
  }

  const data = payload.data ?? payload
  if (Array.isArray(data)) {
    return data
  }

  if (data?.items && Array.isArray(data.items)) {
    return data.items
  }

  if (typeof data === 'object') {
    return [data]
  }

  return []
}
