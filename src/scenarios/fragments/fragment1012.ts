import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1010 } from "./fragment1010";
import type { FragmentToken1011 } from "./fragment1011";

export const FRAGMENT_1012 = gql(`
  fragment Fragment1012 on Member171 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_171
    memberCount_171
    memberMetric_171
  }
`);

type FragmentResult1012 = ResultOf<typeof FRAGMENT_1012>;
type FragmentSelf1012 = NonNullable<FragmentResult1012>;

export type FragmentToken1012 =
  | FragmentSelf1012["__typename"]
  | FragmentSelf1012["typenameHint"] | FragmentToken1010 | FragmentToken1011;
