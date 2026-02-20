import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3853 } from "./fragment3853";
import type { FragmentToken3854 } from "./fragment3854";

export const FRAGMENT_3855 = gql(`
  fragment Fragment3855 on Member214 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_214
    memberCount_214
    memberMetric_214
  }
`);

type FragmentResult3855 = ResultOf<typeof FRAGMENT_3855>;
type FragmentSelf3855 = NonNullable<FragmentResult3855>;

export type FragmentToken3855 =
  | FragmentSelf3855["__typename"]
  | FragmentSelf3855["typenameHint"] | FragmentToken3853 | FragmentToken3854;
