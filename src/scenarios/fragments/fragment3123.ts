import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3121 } from "./fragment3121";
import type { FragmentToken3122 } from "./fragment3122";

export const FRAGMENT_3123 = gql(`
  fragment Fragment3123 on Member42 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_42
    memberCount_42
    memberMetric_42
  }
`);

type FragmentResult3123 = ResultOf<typeof FRAGMENT_3123>;
type FragmentSelf3123 = NonNullable<FragmentResult3123>;

export type FragmentToken3123 =
  | FragmentSelf3123["__typename"]
  | FragmentSelf3123["typenameHint"] | FragmentToken3121 | FragmentToken3122;
