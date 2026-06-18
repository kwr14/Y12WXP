import axios from 'axios'

const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '',
  timeout: 15000,
})

export const api = {
  calculateDerivative: (fn, x) =>
    client.post('/api/math/derivative', { function: fn, x }),

  calculateIntegral: (fn, lower, upper) =>
    client.post('/api/math/integral', { function: fn, bounds: { lower, upper } }),

  explain: (payload) =>
    client.post('/api/ai/explain', payload),

  health: () =>
    client.get('/health'),
}

export default client
