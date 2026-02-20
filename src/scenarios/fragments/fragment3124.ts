import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3122 } from "./fragment3122";
import type { FragmentToken3123 } from "./fragment3123";

export const FRAGMENT_3124 = gql(`
  fragment Fragment3124 on Member43 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_43
    memberCount_43
    memberMetric_43
  }
`);

type FragmentResult3124 = ResultOf<typeof FRAGMENT_3124>;
type FragmentSelf3124 = NonNullable<FragmentResult3124>;

export type FragmentToken3124 =
  | FragmentSelf3124["__typename"]
  | FragmentSelf3124["typenameHint"] | FragmentToken3122 | FragmentToken3123;
