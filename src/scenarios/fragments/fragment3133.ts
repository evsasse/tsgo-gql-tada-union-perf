import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3131 } from "./fragment3131";
import type { FragmentToken3132 } from "./fragment3132";

export const FRAGMENT_3133 = gql(`
  fragment Fragment3133 on Member52 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_52
    memberCount_52
    memberMetric_52
  }
`);

type FragmentResult3133 = ResultOf<typeof FRAGMENT_3133>;
type FragmentSelf3133 = NonNullable<FragmentResult3133>;

export type FragmentToken3133 =
  | FragmentSelf3133["__typename"]
  | FragmentSelf3133["typenameHint"] | FragmentToken3131 | FragmentToken3132;
