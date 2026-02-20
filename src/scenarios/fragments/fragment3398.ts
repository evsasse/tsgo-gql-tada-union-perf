import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3396 } from "./fragment3396";
import type { FragmentToken3397 } from "./fragment3397";

export const FRAGMENT_3398 = gql(`
  fragment Fragment3398 on Member37 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_37
    memberCount_37
    memberMetric_37
  }
`);

type FragmentResult3398 = ResultOf<typeof FRAGMENT_3398>;
type FragmentSelf3398 = NonNullable<FragmentResult3398>;

export type FragmentToken3398 =
  | FragmentSelf3398["__typename"]
  | FragmentSelf3398["typenameHint"] | FragmentToken3396 | FragmentToken3397;
