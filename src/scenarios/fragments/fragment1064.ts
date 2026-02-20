import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1062 } from "./fragment1062";
import type { FragmentToken1063 } from "./fragment1063";

export const FRAGMENT_1064 = gql(`
  fragment Fragment1064 on Member223 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_223
    memberCount_223
    memberMetric_223
  }
`);

type FragmentResult1064 = ResultOf<typeof FRAGMENT_1064>;
type FragmentSelf1064 = NonNullable<FragmentResult1064>;

export type FragmentToken1064 =
  | FragmentSelf1064["__typename"]
  | FragmentSelf1064["typenameHint"] | FragmentToken1062 | FragmentToken1063;
