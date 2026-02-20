import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1032 } from "./fragment1032";
import type { FragmentToken1033 } from "./fragment1033";

export const FRAGMENT_1034 = gql(`
  fragment Fragment1034 on Member193 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_193
    memberCount_193
    memberMetric_193
  }
`);

type FragmentResult1034 = ResultOf<typeof FRAGMENT_1034>;
type FragmentSelf1034 = NonNullable<FragmentResult1034>;

export type FragmentToken1034 =
  | FragmentSelf1034["__typename"]
  | FragmentSelf1034["typenameHint"] | FragmentToken1032 | FragmentToken1033;
