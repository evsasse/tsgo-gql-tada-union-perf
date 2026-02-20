import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3395 } from "./fragment3395";
import type { FragmentToken3396 } from "./fragment3396";

export const FRAGMENT_3397 = gql(`
  fragment Fragment3397 on Member36 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_36
    memberCount_36
    memberMetric_36
  }
`);

type FragmentResult3397 = ResultOf<typeof FRAGMENT_3397>;
type FragmentSelf3397 = NonNullable<FragmentResult3397>;

export type FragmentToken3397 =
  | FragmentSelf3397["__typename"]
  | FragmentSelf3397["typenameHint"] | FragmentToken3395 | FragmentToken3396;
