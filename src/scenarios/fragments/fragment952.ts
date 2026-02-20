import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken950 } from "./fragment950";
import type { FragmentToken951 } from "./fragment951";

export const FRAGMENT_952 = gql(`
  fragment Fragment952 on Member111 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_111
    memberCount_111
    memberMetric_111
  }
`);

type FragmentResult952 = ResultOf<typeof FRAGMENT_952>;
type FragmentSelf952 = NonNullable<FragmentResult952>;

export type FragmentToken952 =
  | FragmentSelf952["__typename"]
  | FragmentSelf952["typenameHint"] | FragmentToken950 | FragmentToken951;
