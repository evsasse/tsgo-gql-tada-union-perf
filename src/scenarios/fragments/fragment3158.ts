import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3156 } from "./fragment3156";
import type { FragmentToken3157 } from "./fragment3157";

export const FRAGMENT_3158 = gql(`
  fragment Fragment3158 on Member77 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_77
    memberCount_77
    memberMetric_77
  }
`);

type FragmentResult3158 = ResultOf<typeof FRAGMENT_3158>;
type FragmentSelf3158 = NonNullable<FragmentResult3158>;

export type FragmentToken3158 =
  | FragmentSelf3158["__typename"]
  | FragmentSelf3158["typenameHint"] | FragmentToken3156 | FragmentToken3157;
