import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3044 } from "./fragment3044";
import type { FragmentToken3045 } from "./fragment3045";

export const FRAGMENT_3046 = gql(`
  fragment Fragment3046 on Member245 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_245
    memberCount_245
    memberMetric_245
  }
`);

type FragmentResult3046 = ResultOf<typeof FRAGMENT_3046>;
type FragmentSelf3046 = NonNullable<FragmentResult3046>;

export type FragmentToken3046 =
  | FragmentSelf3046["__typename"]
  | FragmentSelf3046["typenameHint"] | FragmentToken3044 | FragmentToken3045;
