import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1009 } from "./fragment1009";
import type { FragmentToken1010 } from "./fragment1010";

export const FRAGMENT_1011 = gql(`
  fragment Fragment1011 on Member170 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_170
    memberCount_170
    memberMetric_170
  }
`);

type FragmentResult1011 = ResultOf<typeof FRAGMENT_1011>;
type FragmentSelf1011 = NonNullable<FragmentResult1011>;

export type FragmentToken1011 =
  | FragmentSelf1011["__typename"]
  | FragmentSelf1011["typenameHint"] | FragmentToken1009 | FragmentToken1010;
