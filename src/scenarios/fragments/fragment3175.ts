import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3173 } from "./fragment3173";
import type { FragmentToken3174 } from "./fragment3174";

export const FRAGMENT_3175 = gql(`
  fragment Fragment3175 on Member94 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_94
    memberCount_94
    memberMetric_94
  }
`);

type FragmentResult3175 = ResultOf<typeof FRAGMENT_3175>;
type FragmentSelf3175 = NonNullable<FragmentResult3175>;

export type FragmentToken3175 =
  | FragmentSelf3175["__typename"]
  | FragmentSelf3175["typenameHint"] | FragmentToken3173 | FragmentToken3174;
