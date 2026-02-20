import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1448 } from "./fragment1448";
import type { FragmentToken1449 } from "./fragment1449";

export const FRAGMENT_1450 = gql(`
  fragment Fragment1450 on Member49 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_49
    memberCount_49
    memberMetric_49
  }
`);

type FragmentResult1450 = ResultOf<typeof FRAGMENT_1450>;
type FragmentSelf1450 = NonNullable<FragmentResult1450>;

export type FragmentToken1450 =
  | FragmentSelf1450["__typename"]
  | FragmentSelf1450["typenameHint"] | FragmentToken1448 | FragmentToken1449;
