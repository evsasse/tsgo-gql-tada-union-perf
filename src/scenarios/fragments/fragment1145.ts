import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1143 } from "./fragment1143";
import type { FragmentToken1144 } from "./fragment1144";

export const FRAGMENT_1145 = gql(`
  fragment Fragment1145 on Member24 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_24
    memberCount_24
    memberMetric_24
  }
`);

type FragmentResult1145 = ResultOf<typeof FRAGMENT_1145>;
type FragmentSelf1145 = NonNullable<FragmentResult1145>;

export type FragmentToken1145 =
  | FragmentSelf1145["__typename"]
  | FragmentSelf1145["typenameHint"] | FragmentToken1143 | FragmentToken1144;
