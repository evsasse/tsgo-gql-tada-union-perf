import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3755 } from "./fragment3755";
import type { FragmentToken3756 } from "./fragment3756";

export const FRAGMENT_3757 = gql(`
  fragment Fragment3757 on Member116 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_116
    memberCount_116
    memberMetric_116
  }
`);

type FragmentResult3757 = ResultOf<typeof FRAGMENT_3757>;
type FragmentSelf3757 = NonNullable<FragmentResult3757>;

export type FragmentToken3757 =
  | FragmentSelf3757["__typename"]
  | FragmentSelf3757["typenameHint"] | FragmentToken3755 | FragmentToken3756;
