import type { ProductsResponse } from "~/types/product";

export const useProducts = () => {
  const config = useRuntimeConfig();

  const page = ref(1);

  const {
    data,
    pending: isLoading,
    error,
    refresh,
  } = useAsyncData(
    () => `products-${page.value}`,
    () =>
      $fetch<ProductsResponse>(`${config.public.apiBase}/products`, {
        params: { page: page.value },
      }),
    { watch: [page] },
  );

  const products = computed(() => data.value?.products ?? []);
  const currentPage = computed(() => data.value?.currentPage ?? 1);
  const totalPages = computed(() => data.value?.totalPages ?? 1);
  const hasMore = computed(() => currentPage.value < totalPages.value);

  const loadMore = () => {
    if (!hasMore.value || isLoading.value) return;
    page.value++;
  };

  return {
    products,
    currentPage,
    totalPages,
    isLoading,
    error,
    hasMore,
    loadMore,
    refresh,
  };
};
