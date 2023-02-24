import { Head, Page } from 'rakkasjs';
import React from 'react';
import { useFetch } from '../utils/useFetch';

function SlowComponent() {
  const {
    data: { health },
    refetch,
    isRefetching
  } = useFetch<{ health: string }>('/api/health');

  return (
    <div>
      <h1>{isRefetching ? '...' : health}</h1>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
}

const Index: Page = () => (
  <>
    <Head title="Suspense" />
    <React.Suspense fallback={<h1>...</h1>}>
      <SlowComponent />
    </React.Suspense>
  </>
);
export default Index;
