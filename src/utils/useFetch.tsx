import { useServerSideQuery } from 'rakkasjs';
const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

export function useFetch<T>(url: string) {
  const API_URL = BASE_URL + url;
  const { data, refetch, isRefetching } = useServerSideQuery<T>(() =>
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => new Promise((done) => setTimeout(() => done(data), 300)))
  );
  return { data, refetch, isRefetching };
}
