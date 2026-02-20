import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1994 } from "./fragment1994";
import type { FragmentToken1995 } from "./fragment1995";

export const FRAGMENT_1996 = gql(`
  fragment Fragment1996 on Member35 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_35
    memberCount_35
    memberMetric_35
  }
`);

type FragmentResult1996 = ResultOf<typeof FRAGMENT_1996>;
type FragmentSelf1996 = NonNullable<FragmentResult1996>;

export type FragmentToken1996 =
  | FragmentSelf1996["__typename"]
  | FragmentSelf1996["typenameHint"] | FragmentToken1994 | FragmentToken1995;
