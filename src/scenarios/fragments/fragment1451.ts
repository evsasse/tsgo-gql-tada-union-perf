import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1449 } from "./fragment1449";
import type { FragmentToken1450 } from "./fragment1450";

export const FRAGMENT_1451 = gql(`
  fragment Fragment1451 on Member50 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_50
    memberCount_50
    memberMetric_50
  }
`);

type FragmentResult1451 = ResultOf<typeof FRAGMENT_1451>;
type FragmentSelf1451 = NonNullable<FragmentResult1451>;

export type FragmentToken1451 =
  | FragmentSelf1451["__typename"]
  | FragmentSelf1451["typenameHint"] | FragmentToken1449 | FragmentToken1450;
