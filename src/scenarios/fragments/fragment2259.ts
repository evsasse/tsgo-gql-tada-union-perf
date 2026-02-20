import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2257 } from "./fragment2257";
import type { FragmentToken2258 } from "./fragment2258";

export const FRAGMENT_2259 = gql(`
  fragment Fragment2259 on Member18 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_18
    memberCount_18
    memberMetric_18
  }
`);

type FragmentResult2259 = ResultOf<typeof FRAGMENT_2259>;
type FragmentSelf2259 = NonNullable<FragmentResult2259>;

export type FragmentToken2259 =
  | FragmentSelf2259["__typename"]
  | FragmentSelf2259["typenameHint"] | FragmentToken2257 | FragmentToken2258;
