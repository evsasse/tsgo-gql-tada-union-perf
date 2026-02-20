import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3657 } from "./fragment3657";
import type { FragmentToken3658 } from "./fragment3658";

export const FRAGMENT_3659 = gql(`
  fragment Fragment3659 on Member18 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_18
    memberCount_18
    memberMetric_18
  }
`);

type FragmentResult3659 = ResultOf<typeof FRAGMENT_3659>;
type FragmentSelf3659 = NonNullable<FragmentResult3659>;

export type FragmentToken3659 =
  | FragmentSelf3659["__typename"]
  | FragmentSelf3659["typenameHint"] | FragmentToken3657 | FragmentToken3658;
