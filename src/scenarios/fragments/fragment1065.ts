import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1063 } from "./fragment1063";
import type { FragmentToken1064 } from "./fragment1064";

export const FRAGMENT_1065 = gql(`
  fragment Fragment1065 on Member224 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_224
    memberCount_224
    memberMetric_224
  }
`);

type FragmentResult1065 = ResultOf<typeof FRAGMENT_1065>;
type FragmentSelf1065 = NonNullable<FragmentResult1065>;

export type FragmentToken1065 =
  | FragmentSelf1065["__typename"]
  | FragmentSelf1065["typenameHint"] | FragmentToken1063 | FragmentToken1064;
