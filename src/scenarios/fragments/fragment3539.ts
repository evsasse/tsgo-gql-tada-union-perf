import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3537 } from "./fragment3537";
import type { FragmentToken3538 } from "./fragment3538";

export const FRAGMENT_3539 = gql(`
  fragment Fragment3539 on Member178 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_178
    memberCount_178
    memberMetric_178
  }
`);

type FragmentResult3539 = ResultOf<typeof FRAGMENT_3539>;
type FragmentSelf3539 = NonNullable<FragmentResult3539>;

export type FragmentToken3539 =
  | FragmentSelf3539["__typename"]
  | FragmentSelf3539["typenameHint"] | FragmentToken3537 | FragmentToken3538;
