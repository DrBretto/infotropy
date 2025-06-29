// app/+types/root.d.ts

import type {
  LinksFunction as RRLinksFunction,
  ErrorBoundaryProps as RRErrorBoundaryProps,
} from "react-router";

export namespace Route {
  export type LinksFunction = RRLinksFunction;
  export type ErrorBoundaryProps = RRErrorBoundaryProps;
}
