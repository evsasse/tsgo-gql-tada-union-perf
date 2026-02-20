import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3646 } from "./fragment3646";
import type { FragmentToken3647 } from "./fragment3647";

export const FRAGMENT_3648 = gql(`
  fragment Fragment3648 on Member07 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_07
    memberCount_07
    memberMetric_07
  }
`);

type FragmentResult3648 = ResultOf<typeof FRAGMENT_3648>;
type FragmentSelf3648 = NonNullable<FragmentResult3648>;

export type FragmentToken3648 =
  | FragmentSelf3648["__typename"]
  | FragmentSelf3648["typenameHint"] | FragmentToken3646 | FragmentToken3647;
