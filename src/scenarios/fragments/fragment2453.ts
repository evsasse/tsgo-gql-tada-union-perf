import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2451 } from "./fragment2451";
import type { FragmentToken2452 } from "./fragment2452";

export const FRAGMENT_2453 = gql(`
  fragment Fragment2453 on Member212 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_212
    memberCount_212
    memberMetric_212
  }
`);

type FragmentResult2453 = ResultOf<typeof FRAGMENT_2453>;
type FragmentSelf2453 = NonNullable<FragmentResult2453>;

export type FragmentToken2453 =
  | FragmentSelf2453["__typename"]
  | FragmentSelf2453["typenameHint"] | FragmentToken2451 | FragmentToken2452;
