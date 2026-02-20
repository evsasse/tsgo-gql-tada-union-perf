import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1992 } from "./fragment1992";
import type { FragmentToken1993 } from "./fragment1993";

export const FRAGMENT_1994 = gql(`
  fragment Fragment1994 on Member33 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_33
    memberCount_33
    memberMetric_33
  }
`);

type FragmentResult1994 = ResultOf<typeof FRAGMENT_1994>;
type FragmentSelf1994 = NonNullable<FragmentResult1994>;

export type FragmentToken1994 =
  | FragmentSelf1994["__typename"]
  | FragmentSelf1994["typenameHint"] | FragmentToken1992 | FragmentToken1993;
