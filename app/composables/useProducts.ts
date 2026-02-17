import type { ProductsResponse } from '~/types/product'

export const useProducts = () => {
  const config = useRuntimeConfig()
  const products = ref<ProductsResponse['products']>([])
  const currentPage = ref(1)
  const totalPages = ref(1)
  const isLoading = ref(false)
  const error = ref<Error | null>(null)
  const hasMore = computed(() => currentPage.value < totalPages.value)

  const fetchProducts = async (page: number = 1) => {
    isLoading.value = true
    error.value = null

    try {
      const data = await $fetch<ProductsResponse>(`${config.public.apiBase}/products`, {
        params: { page },
      })

      if (page === 1) {
        products.value = data.products
      } else {
        products.value = [...products.value, ...data.products]
      }

      currentPage.value = data.currentPage
      totalPages.value = data.totalPages
    } catch (e) {
      error.value = e as Error
      throw e
    } finally {
      isLoading.value = false
    }
  }

  const loadMore = async () => {
    if (!hasMore.value || isLoading.value) return
    await fetchProducts(currentPage.value + 1)
  }

  const retry = async () => {
    await fetchProducts(currentPage.value + 1)
  }

  return {
    products,
    currentPage,
    totalPages,
    isLoading,
    error,
    hasMore,
    fetchProducts,
    loadMore,
    retry,
  }
}
