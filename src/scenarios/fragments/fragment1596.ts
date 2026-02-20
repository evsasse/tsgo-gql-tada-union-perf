import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1594 } from "./fragment1594";
import type { FragmentToken1595 } from "./fragment1595";

export const FRAGMENT_1596 = gql(`
  fragment Fragment1596 on Member195 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_195
    memberCount_195
    memberMetric_195
  }
`);

type FragmentResult1596 = ResultOf<typeof FRAGMENT_1596>;
type FragmentSelf1596 = NonNullable<FragmentResult1596>;

export type FragmentToken1596 =
  | FragmentSelf1596["__typename"]
  | FragmentSelf1596["typenameHint"] | FragmentToken1594 | FragmentToken1595;
