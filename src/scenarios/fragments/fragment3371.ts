import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3369 } from "./fragment3369";
import type { FragmentToken3370 } from "./fragment3370";

export const FRAGMENT_3371 = gql(`
  fragment Fragment3371 on Member10 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_10
    memberCount_10
    memberMetric_10
  }
`);

type FragmentResult3371 = ResultOf<typeof FRAGMENT_3371>;
type FragmentSelf3371 = NonNullable<FragmentResult3371>;

export type FragmentToken3371 =
  | FragmentSelf3371["__typename"]
  | FragmentSelf3371["typenameHint"] | FragmentToken3369 | FragmentToken3370;
