import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3507 } from "./fragment3507";
import type { FragmentToken3508 } from "./fragment3508";

export const FRAGMENT_3509 = gql(`
  fragment Fragment3509 on Member148 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_148
    memberCount_148
    memberMetric_148
  }
`);

type FragmentResult3509 = ResultOf<typeof FRAGMENT_3509>;
type FragmentSelf3509 = NonNullable<FragmentResult3509>;

export type FragmentToken3509 =
  | FragmentSelf3509["__typename"]
  | FragmentSelf3509["typenameHint"] | FragmentToken3507 | FragmentToken3508;
