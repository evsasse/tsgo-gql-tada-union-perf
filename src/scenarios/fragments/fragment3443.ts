import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3441 } from "./fragment3441";
import type { FragmentToken3442 } from "./fragment3442";

export const FRAGMENT_3443 = gql(`
  fragment Fragment3443 on Member82 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_82
    memberCount_82
    memberMetric_82
  }
`);

type FragmentResult3443 = ResultOf<typeof FRAGMENT_3443>;
type FragmentSelf3443 = NonNullable<FragmentResult3443>;

export type FragmentToken3443 =
  | FragmentSelf3443["__typename"]
  | FragmentSelf3443["typenameHint"] | FragmentToken3441 | FragmentToken3442;
