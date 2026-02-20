import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3257 } from "./fragment3257";
import type { FragmentToken3258 } from "./fragment3258";

export const FRAGMENT_3259 = gql(`
  fragment Fragment3259 on Member178 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_178
    memberCount_178
    memberMetric_178
  }
`);

type FragmentResult3259 = ResultOf<typeof FRAGMENT_3259>;
type FragmentSelf3259 = NonNullable<FragmentResult3259>;

export type FragmentToken3259 =
  | FragmentSelf3259["__typename"]
  | FragmentSelf3259["typenameHint"] | FragmentToken3257 | FragmentToken3258;
