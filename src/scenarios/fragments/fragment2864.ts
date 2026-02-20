import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2862 } from "./fragment2862";
import type { FragmentToken2863 } from "./fragment2863";

export const FRAGMENT_2864 = gql(`
  fragment Fragment2864 on Member63 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_63
    memberCount_63
    memberMetric_63
  }
`);

type FragmentResult2864 = ResultOf<typeof FRAGMENT_2864>;
type FragmentSelf2864 = NonNullable<FragmentResult2864>;

export type FragmentToken2864 =
  | FragmentSelf2864["__typename"]
  | FragmentSelf2864["typenameHint"] | FragmentToken2862 | FragmentToken2863;
