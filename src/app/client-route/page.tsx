'use client';

import { serverSideFunction } from '@/utils/server-utils';

export default function ServerRoutePage() {
  console.log('client route rendered');
  const result = serverSideFunction();
  return (
    <>
      <h1>ClientRoutePage</h1>
      <p>{result}</p>
    </>
  );
}
