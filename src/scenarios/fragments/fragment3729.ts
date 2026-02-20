import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3727 } from "./fragment3727";
import type { FragmentToken3728 } from "./fragment3728";

export const FRAGMENT_3729 = gql(`
  fragment Fragment3729 on Member88 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_88
    memberCount_88
    memberMetric_88
  }
`);

type FragmentResult3729 = ResultOf<typeof FRAGMENT_3729>;
type FragmentSelf3729 = NonNullable<FragmentResult3729>;

export type FragmentToken3729 =
  | FragmentSelf3729["__typename"]
  | FragmentSelf3729["typenameHint"] | FragmentToken3727 | FragmentToken3728;
