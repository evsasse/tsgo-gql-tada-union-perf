import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1991 } from "./fragment1991";
import type { FragmentToken1992 } from "./fragment1992";

export const FRAGMENT_1993 = gql(`
  fragment Fragment1993 on Member32 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_32
    memberCount_32
    memberMetric_32
  }
`);

type FragmentResult1993 = ResultOf<typeof FRAGMENT_1993>;
type FragmentSelf1993 = NonNullable<FragmentResult1993>;

export type FragmentToken1993 =
  | FragmentSelf1993["__typename"]
  | FragmentSelf1993["typenameHint"] | FragmentToken1991 | FragmentToken1992;
