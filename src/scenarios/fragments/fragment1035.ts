import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1033 } from "./fragment1033";
import type { FragmentToken1034 } from "./fragment1034";

export const FRAGMENT_1035 = gql(`
  fragment Fragment1035 on Member194 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_194
    memberCount_194
    memberMetric_194
  }
`);

type FragmentResult1035 = ResultOf<typeof FRAGMENT_1035>;
type FragmentSelf1035 = NonNullable<FragmentResult1035>;

export type FragmentToken1035 =
  | FragmentSelf1035["__typename"]
  | FragmentSelf1035["typenameHint"] | FragmentToken1033 | FragmentToken1034;
