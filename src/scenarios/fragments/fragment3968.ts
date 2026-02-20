import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3966 } from "./fragment3966";
import type { FragmentToken3967 } from "./fragment3967";

export const FRAGMENT_3968 = gql(`
  fragment Fragment3968 on Member47 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_47
    memberCount_47
    memberMetric_47
  }
`);

type FragmentResult3968 = ResultOf<typeof FRAGMENT_3968>;
type FragmentSelf3968 = NonNullable<FragmentResult3968>;

export type FragmentToken3968 =
  | FragmentSelf3968["__typename"]
  | FragmentSelf3968["typenameHint"] | FragmentToken3966 | FragmentToken3967;
