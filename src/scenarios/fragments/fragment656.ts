import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken654 } from "./fragment654";
import type { FragmentToken655 } from "./fragment655";

export const FRAGMENT_656 = gql(`
  fragment Fragment656 on Member95 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_95
    memberCount_95
    memberMetric_95
  }
`);

type FragmentResult656 = ResultOf<typeof FRAGMENT_656>;
type FragmentSelf656 = NonNullable<FragmentResult656>;

export type FragmentToken656 =
  | FragmentSelf656["__typename"]
  | FragmentSelf656["typenameHint"] | FragmentToken654 | FragmentToken655;
