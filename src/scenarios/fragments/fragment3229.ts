import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3227 } from "./fragment3227";
import type { FragmentToken3228 } from "./fragment3228";

export const FRAGMENT_3229 = gql(`
  fragment Fragment3229 on Member148 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_148
    memberCount_148
    memberMetric_148
  }
`);

type FragmentResult3229 = ResultOf<typeof FRAGMENT_3229>;
type FragmentSelf3229 = NonNullable<FragmentResult3229>;

export type FragmentToken3229 =
  | FragmentSelf3229["__typename"]
  | FragmentSelf3229["typenameHint"] | FragmentToken3227 | FragmentToken3228;
