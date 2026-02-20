import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1113 } from "./fragment1113";
import type { FragmentToken1114 } from "./fragment1114";

export const FRAGMENT_1115 = gql(`
  fragment Fragment1115 on Member274 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_274
    memberCount_274
    memberMetric_274
  }
`);

type FragmentResult1115 = ResultOf<typeof FRAGMENT_1115>;
type FragmentSelf1115 = NonNullable<FragmentResult1115>;

export type FragmentToken1115 =
  | FragmentSelf1115["__typename"]
  | FragmentSelf1115["typenameHint"] | FragmentToken1113 | FragmentToken1114;
