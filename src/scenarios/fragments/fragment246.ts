import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken244 } from "./fragment244";
import type { FragmentToken245 } from "./fragment245";

export const FRAGMENT_246 = gql(`
  fragment Fragment246 on Member245 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_245
    memberCount_245
    memberMetric_245
  }
`);

type FragmentResult246 = ResultOf<typeof FRAGMENT_246>;
type FragmentSelf246 = NonNullable<FragmentResult246>;

export type FragmentToken246 =
  | FragmentSelf246["__typename"]
  | FragmentSelf246["typenameHint"] | FragmentToken244 | FragmentToken245;
