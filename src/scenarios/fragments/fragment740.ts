import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken738 } from "./fragment738";
import type { FragmentToken739 } from "./fragment739";

export const FRAGMENT_740 = gql(`
  fragment Fragment740 on Member179 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_179
    memberCount_179
    memberMetric_179
  }
`);

type FragmentResult740 = ResultOf<typeof FRAGMENT_740>;
type FragmentSelf740 = NonNullable<FragmentResult740>;

export type FragmentToken740 =
  | FragmentSelf740["__typename"]
  | FragmentSelf740["typenameHint"] | FragmentToken738 | FragmentToken739;
