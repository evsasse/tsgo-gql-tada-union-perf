import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1996 } from "./fragment1996";
import type { FragmentToken1997 } from "./fragment1997";

export const FRAGMENT_1998 = gql(`
  fragment Fragment1998 on Member37 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_37
    memberCount_37
    memberMetric_37
  }
`);

type FragmentResult1998 = ResultOf<typeof FRAGMENT_1998>;
type FragmentSelf1998 = NonNullable<FragmentResult1998>;

export type FragmentToken1998 =
  | FragmentSelf1998["__typename"]
  | FragmentSelf1998["typenameHint"] | FragmentToken1996 | FragmentToken1997;
