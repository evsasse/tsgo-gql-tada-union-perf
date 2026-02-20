import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1487 } from "./fragment1487";
import type { FragmentToken1488 } from "./fragment1488";

export const FRAGMENT_1489 = gql(`
  fragment Fragment1489 on Member88 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_88
    memberCount_88
    memberMetric_88
  }
`);

type FragmentResult1489 = ResultOf<typeof FRAGMENT_1489>;
type FragmentSelf1489 = NonNullable<FragmentResult1489>;

export type FragmentToken1489 =
  | FragmentSelf1489["__typename"]
  | FragmentSelf1489["typenameHint"] | FragmentToken1487 | FragmentToken1488;
