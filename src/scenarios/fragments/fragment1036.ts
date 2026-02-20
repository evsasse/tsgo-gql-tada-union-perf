import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1034 } from "./fragment1034";
import type { FragmentToken1035 } from "./fragment1035";

export const FRAGMENT_1036 = gql(`
  fragment Fragment1036 on Member195 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_195
    memberCount_195
    memberMetric_195
  }
`);

type FragmentResult1036 = ResultOf<typeof FRAGMENT_1036>;
type FragmentSelf1036 = NonNullable<FragmentResult1036>;

export type FragmentToken1036 =
  | FragmentSelf1036["__typename"]
  | FragmentSelf1036["typenameHint"] | FragmentToken1034 | FragmentToken1035;
