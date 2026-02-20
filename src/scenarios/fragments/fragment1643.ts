import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1641 } from "./fragment1641";
import type { FragmentToken1642 } from "./fragment1642";

export const FRAGMENT_1643 = gql(`
  fragment Fragment1643 on Member242 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_242
    memberCount_242
    memberMetric_242
  }
`);

type FragmentResult1643 = ResultOf<typeof FRAGMENT_1643>;
type FragmentSelf1643 = NonNullable<FragmentResult1643>;

export type FragmentToken1643 =
  | FragmentSelf1643["__typename"]
  | FragmentSelf1643["typenameHint"] | FragmentToken1641 | FragmentToken1642;
