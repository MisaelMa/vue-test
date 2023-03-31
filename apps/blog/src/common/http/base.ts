export interface RequestBase extends RequestInit {
    params?: Record<string, any>
  }
export default class ApiClient {
  baseUrl: string
  headers: Record<string, unknown>
  requestInterceptors: any[]
  responseInterceptors: any[]
  constructor (baseUrl: string, headers = {}) {
    this.baseUrl = baseUrl
    this.headers = headers
    this.requestInterceptors = []
    this.responseInterceptors = []
  }

  setHeader (key: string, value: unknown) {
    this.headers[key] = value
    return this
  }

  setBasicAuth (username: string, password: string) {
    this.headers.Authorization = `Basic ${btoa(`${username}:${password}`)}`
    return this
  }

  setBearerAuth (token: string) {
    this.headers.Authorization = `Bearer ${token}`
    return this
  }

  // Agrega un interceptor que se ejecutará antes de enviar la solicitud
  useRequestInterceptor (interceptor: Response) {
    this.requestInterceptors.push(interceptor)
  }

  // Agrega un interceptor que se ejecutará después de recibir la respuesta
  useResponseInterceptor (interceptor: Response) {
    this.responseInterceptors.push(interceptor)
  }

  // Envía una solicitud usando fetch y aplica los interceptores antes de enviarla y después de recibirla
  private fetch<T> (url: RequestInfo | URL, options:RequestBase = {}): Promise<T> {
    const { params } = options
    // Aplica los interceptores de solicitud a la solicitud
    const quryParams = params ? '?' + new URLSearchParams(params).toString() : ''
    let request = {
      url: `${this.baseUrl}/${url}${quryParams}`,
      options: {
        ...options,
        headers: {
          ...this.headers,
          ...options.headers
        }
      }
    }
    for (const interceptor of this.requestInterceptors) {
      request = interceptor(request)
    }

    // Envía la solicitud usando fetch
    return fetch(request.url, request.options)
      .then((response) => {
        let result = { response }
        for (const interceptor of this.responseInterceptors) {
          result = interceptor(result)
        }
        if (response.ok) {
          return result.response.json()
        }
        return Promise.reject(response)

        // Aplica los interceptores de respuesta a la respuesta
      })
      .catch((response) => {
        return Promise.reject(response)
        console.log(response.status, response.statusText)
        // 3. get error messages, if any
        response.json().then((json: any) => {
          console.log(json)
        })
      })
  }

  get<T> (endpoint: string, options:RequestBase = {}): Promise<T> {
    return this.fetch<T>(endpoint, {
      ...options,
      method: 'GET'
    })
  }

  post (
    endpoint: string,
    body: Record<string, unknown>,
    options:RequestBase = {}
  ) {
    return this.fetch(endpoint, {
      ...options,
      body: JSON.stringify(body),
      method: 'POST'
    })
  }

  delete (endpoint: string, options:RequestBase = {}) {
    return this.fetch(endpoint, {
      ...options,
      method: 'DELETE'
    })
  }

  put (endpoint: string, options:RequestBase = {}) {
    return this.fetch(endpoint, {
      ...options,
      method: 'PUT'
    })
  }
}

export const httpClient = new ApiClient("https://jsonplaceholder.typicode.com");
