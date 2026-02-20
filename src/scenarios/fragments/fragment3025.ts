import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3023 } from "./fragment3023";
import type { FragmentToken3024 } from "./fragment3024";

export const FRAGMENT_3025 = gql(`
  fragment Fragment3025 on Member224 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_224
    memberCount_224
    memberMetric_224
  }
`);

type FragmentResult3025 = ResultOf<typeof FRAGMENT_3025>;
type FragmentSelf3025 = NonNullable<FragmentResult3025>;

export type FragmentToken3025 =
  | FragmentSelf3025["__typename"]
  | FragmentSelf3025["typenameHint"] | FragmentToken3023 | FragmentToken3024;
