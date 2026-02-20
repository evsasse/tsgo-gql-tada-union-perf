import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3547 } from "./fragment3547";
import type { FragmentToken3548 } from "./fragment3548";

export const FRAGMENT_3549 = gql(`
  fragment Fragment3549 on Member188 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_188
    memberCount_188
    memberMetric_188
  }
`);

type FragmentResult3549 = ResultOf<typeof FRAGMENT_3549>;
type FragmentSelf3549 = NonNullable<FragmentResult3549>;

export type FragmentToken3549 =
  | FragmentSelf3549["__typename"]
  | FragmentSelf3549["typenameHint"] | FragmentToken3547 | FragmentToken3548;
