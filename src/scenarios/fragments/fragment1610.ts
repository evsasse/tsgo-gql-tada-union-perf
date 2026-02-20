import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1608 } from "./fragment1608";
import type { FragmentToken1609 } from "./fragment1609";

export const FRAGMENT_1610 = gql(`
  fragment Fragment1610 on Member209 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_209
    memberCount_209
    memberMetric_209
  }
`);

type FragmentResult1610 = ResultOf<typeof FRAGMENT_1610>;
type FragmentSelf1610 = NonNullable<FragmentResult1610>;

export type FragmentToken1610 =
  | FragmentSelf1610["__typename"]
  | FragmentSelf1610["typenameHint"] | FragmentToken1608 | FragmentToken1609;
