import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import { userSelectors } from 'features/auth';

import { useAppSelector } from '../utils';
import { isLiked } from '../../utils';
import { productsSelectors } from '../slices/products';
import { useGetProductsQuery } from '../api/productsApi';

export const useProducts = () => {
  const { pathname } = useLocation();

  const { searchText, page, perPage, sort } = useAppSelector(
    productsSelectors.getProductsState,
  );

  const userId = useAppSelector(userSelectors.getUser)?.id;

  const isFavoritesPage = pathname === '/favorites';
  const { isLoading, isError, error, data, isFetching } = useGetProductsQuery({
    searchText,
    sort,
    page,
    perPage: isFavoritesPage ? undefined : perPage,
  });

  const products = useMemo(() => {
    const baseProducts = data?.products || [];

    if (!isFavoritesPage) {
      return baseProducts;
    }

    return baseProducts.filter(product => isLiked(product.likes, userId));
  }, [data?.products, isFavoritesPage, userId]);

  const productsCount = data?.length || 0;

  return {
    products,
    isLoading,
    isError,
    isFetching,
    error,
    productsCount,
  };
};
