export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api'

export const api = {
  workspaces: {
    get: (id: string) => `${API_BASE_URL}/workspaces/${id}`,
    stats: (id: string) => `${API_BASE_URL}/workspaces/${id}/stats`,
  },
  tickets: {
    list: () => `${API_BASE_URL}/tickets`,
    get: (id: string) => `${API_BASE_URL}/tickets/${id}`,
    assign: (id: string) => `${API_BASE_URL}/tickets/${id}/assign`,
    updateStatus: (id: string) => `${API_BASE_URL}/tickets/${id}/status`,
  },
  analytics: {
    metrics: () => `${API_BASE_URL}/analytics/metrics`,
    agentPerformance: () => `${API_BASE_URL}/analytics/agent-performance`,
    categoryBreakdown: () => `${API_BASE_URL}/analytics/category-breakdown`,
    statusDistribution: () => `${API_BASE_URL}/analytics/status-distribution`,
  },
}

export interface ApiError {
  code: string
  message: string
}

export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: ApiError
}

export async function fetchApi<T>(
  url: string,
  options?: RequestInit
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
    })

    const data = await response.json()

    if (!response.ok) {
      return {
        success: false,
        error: data.error || { code: 'ERROR', message: 'An error occurred' },
      }
    }

    return {
      success: true,
      data: data.data,
    }
  } catch (error) {
    return {
      success: false,
      error: {
        code: 'FETCH_ERROR',
        message: error instanceof Error ? error.message : 'An error occurred',
      },
    }
  }
}
