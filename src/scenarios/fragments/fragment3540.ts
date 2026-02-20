import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3538 } from "./fragment3538";
import type { FragmentToken3539 } from "./fragment3539";

export const FRAGMENT_3540 = gql(`
  fragment Fragment3540 on Member179 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_179
    memberCount_179
    memberMetric_179
  }
`);

type FragmentResult3540 = ResultOf<typeof FRAGMENT_3540>;
type FragmentSelf3540 = NonNullable<FragmentResult3540>;

export type FragmentToken3540 =
  | FragmentSelf3540["__typename"]
  | FragmentSelf3540["typenameHint"] | FragmentToken3538 | FragmentToken3539;
