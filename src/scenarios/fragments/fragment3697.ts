import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3695 } from "./fragment3695";
import type { FragmentToken3696 } from "./fragment3696";

export const FRAGMENT_3697 = gql(`
  fragment Fragment3697 on Member56 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_56
    memberCount_56
    memberMetric_56
  }
`);

type FragmentResult3697 = ResultOf<typeof FRAGMENT_3697>;
type FragmentSelf3697 = NonNullable<FragmentResult3697>;

export type FragmentToken3697 =
  | FragmentSelf3697["__typename"]
  | FragmentSelf3697["typenameHint"] | FragmentToken3695 | FragmentToken3696;
