import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1615 } from "./fragment1615";
import type { FragmentToken1616 } from "./fragment1616";

export const FRAGMENT_1617 = gql(`
  fragment Fragment1617 on Member216 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_216
    memberCount_216
    memberMetric_216
  }
`);

type FragmentResult1617 = ResultOf<typeof FRAGMENT_1617>;
type FragmentSelf1617 = NonNullable<FragmentResult1617>;

export type FragmentToken1617 =
  | FragmentSelf1617["__typename"]
  | FragmentSelf1617["typenameHint"] | FragmentToken1615 | FragmentToken1616;
