import {Suspense} from 'react';
import {Await} from '@remix-run/react';

export function AnnoucementBar() {
  return (
    <Suspense>
      <Await>
          <div className="annoucementBar">
                 <div>
                    <p className="jsx-2940426653 Paragraph">30% Off Last-Minute Gifts! Plus Free Fast Shipping Over $75. <a href="/collections/mens" className="jsx-4034818675 InlineLink">Shop Men</a> | <a href="/collections/womens" className="jsx-4034818675 InlineLink">Shop Women</a></p>
                </div>
          </div>
      </Await>
    </Suspense>
  );
}
