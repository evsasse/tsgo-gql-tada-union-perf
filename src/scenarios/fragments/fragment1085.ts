import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1083 } from "./fragment1083";
import type { FragmentToken1084 } from "./fragment1084";

export const FRAGMENT_1085 = gql(`
  fragment Fragment1085 on Member244 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_244
    memberCount_244
    memberMetric_244
  }
`);

type FragmentResult1085 = ResultOf<typeof FRAGMENT_1085>;
type FragmentSelf1085 = NonNullable<FragmentResult1085>;

export type FragmentToken1085 =
  | FragmentSelf1085["__typename"]
  | FragmentSelf1085["typenameHint"] | FragmentToken1083 | FragmentToken1084;
