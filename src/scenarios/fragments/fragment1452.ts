import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1450 } from "./fragment1450";
import type { FragmentToken1451 } from "./fragment1451";

export const FRAGMENT_1452 = gql(`
  fragment Fragment1452 on Member51 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_51
    memberCount_51
    memberMetric_51
  }
`);

type FragmentResult1452 = ResultOf<typeof FRAGMENT_1452>;
type FragmentSelf1452 = NonNullable<FragmentResult1452>;

export type FragmentToken1452 =
  | FragmentSelf1452["__typename"]
  | FragmentSelf1452["typenameHint"] | FragmentToken1450 | FragmentToken1451;
