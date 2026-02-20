import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1620 } from "./fragment1620";
import type { FragmentToken1621 } from "./fragment1621";

export const FRAGMENT_1622 = gql(`
  fragment Fragment1622 on Member221 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_221
    memberCount_221
    memberMetric_221
  }
`);

type FragmentResult1622 = ResultOf<typeof FRAGMENT_1622>;
type FragmentSelf1622 = NonNullable<FragmentResult1622>;

export type FragmentToken1622 =
  | FragmentSelf1622["__typename"]
  | FragmentSelf1622["typenameHint"] | FragmentToken1620 | FragmentToken1621;
