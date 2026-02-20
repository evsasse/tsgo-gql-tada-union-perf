import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1995 } from "./fragment1995";
import type { FragmentToken1996 } from "./fragment1996";

export const FRAGMENT_1997 = gql(`
  fragment Fragment1997 on Member36 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_36
    memberCount_36
    memberMetric_36
  }
`);

type FragmentResult1997 = ResultOf<typeof FRAGMENT_1997>;
type FragmentSelf1997 = NonNullable<FragmentResult1997>;

export type FragmentToken1997 =
  | FragmentSelf1997["__typename"]
  | FragmentSelf1997["typenameHint"] | FragmentToken1995 | FragmentToken1996;
