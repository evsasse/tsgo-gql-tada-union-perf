import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1232 } from "./fragment1232";
import type { FragmentToken1233 } from "./fragment1233";

export const FRAGMENT_1234 = gql(`
  fragment Fragment1234 on Member113 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_113
    memberCount_113
    memberMetric_113
  }
`);

type FragmentResult1234 = ResultOf<typeof FRAGMENT_1234>;
type FragmentSelf1234 = NonNullable<FragmentResult1234>;

export type FragmentToken1234 =
  | FragmentSelf1234["__typename"]
  | FragmentSelf1234["typenameHint"] | FragmentToken1232 | FragmentToken1233;
