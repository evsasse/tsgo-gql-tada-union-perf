import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1997 } from "./fragment1997";
import type { FragmentToken1998 } from "./fragment1998";

export const FRAGMENT_1999 = gql(`
  fragment Fragment1999 on Member38 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_38
    memberCount_38
    memberMetric_38
  }
`);

type FragmentResult1999 = ResultOf<typeof FRAGMENT_1999>;
type FragmentSelf1999 = NonNullable<FragmentResult1999>;

export type FragmentToken1999 =
  | FragmentSelf1999["__typename"]
  | FragmentSelf1999["typenameHint"] | FragmentToken1997 | FragmentToken1998;
