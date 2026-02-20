import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1998 } from "./fragment1998";
import type { FragmentToken1999 } from "./fragment1999";

export const FRAGMENT_2000 = gql(`
  fragment Fragment2000 on Member39 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_39
    memberCount_39
    memberMetric_39
  }
`);

type FragmentResult2000 = ResultOf<typeof FRAGMENT_2000>;
type FragmentSelf2000 = NonNullable<FragmentResult2000>;

export type FragmentToken2000 =
  | FragmentSelf2000["__typename"]
  | FragmentSelf2000["typenameHint"] | FragmentToken1998 | FragmentToken1999;
