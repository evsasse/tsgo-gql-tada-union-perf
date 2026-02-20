import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3053 } from "./fragment3053";
import type { FragmentToken3054 } from "./fragment3054";

export const FRAGMENT_3055 = gql(`
  fragment Fragment3055 on Member254 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_254
    memberCount_254
    memberMetric_254
  }
`);

type FragmentResult3055 = ResultOf<typeof FRAGMENT_3055>;
type FragmentSelf3055 = NonNullable<FragmentResult3055>;

export type FragmentToken3055 =
  | FragmentSelf3055["__typename"]
  | FragmentSelf3055["typenameHint"] | FragmentToken3053 | FragmentToken3054;
