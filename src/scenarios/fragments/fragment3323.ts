import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3321 } from "./fragment3321";
import type { FragmentToken3322 } from "./fragment3322";

export const FRAGMENT_3323 = gql(`
  fragment Fragment3323 on Member242 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_242
    memberCount_242
    memberMetric_242
  }
`);

type FragmentResult3323 = ResultOf<typeof FRAGMENT_3323>;
type FragmentSelf3323 = NonNullable<FragmentResult3323>;

export type FragmentToken3323 =
  | FragmentSelf3323["__typename"]
  | FragmentSelf3323["typenameHint"] | FragmentToken3321 | FragmentToken3322;
