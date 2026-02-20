import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1012 } from "./fragment1012";
import type { FragmentToken1013 } from "./fragment1013";

export const FRAGMENT_1014 = gql(`
  fragment Fragment1014 on Member173 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_173
    memberCount_173
    memberMetric_173
  }
`);

type FragmentResult1014 = ResultOf<typeof FRAGMENT_1014>;
type FragmentSelf1014 = NonNullable<FragmentResult1014>;

export type FragmentToken1014 =
  | FragmentSelf1014["__typename"]
  | FragmentSelf1014["typenameHint"] | FragmentToken1012 | FragmentToken1013;
