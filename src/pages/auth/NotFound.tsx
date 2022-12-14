import withSuspenseAndErrorBoundary from 'hocs/withSuspenseAndErrorBoundary';
import React from 'react';

function NotFound() {
  document.title = 'Grower | Not Found';

  return <div> Not found</div>;
}

export default withSuspenseAndErrorBoundary(NotFound, {
  w: '100%',
  h: '100vh',
});
