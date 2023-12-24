import { Suspense } from 'react';

export default function withSuspense<P>(
  Component: React.ComponentType & any,
  Fallback: React.ComponentType & any,
) {
  return function WithSuspense(props: P) {
    return (
      <Suspense fallback={<Fallback />}>
        <Component {...props} />
      </Suspense>
    );
  };
}
