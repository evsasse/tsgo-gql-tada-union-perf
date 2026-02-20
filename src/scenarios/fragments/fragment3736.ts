import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3734 } from "./fragment3734";
import type { FragmentToken3735 } from "./fragment3735";

export const FRAGMENT_3736 = gql(`
  fragment Fragment3736 on Member95 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_95
    memberCount_95
    memberMetric_95
  }
`);

type FragmentResult3736 = ResultOf<typeof FRAGMENT_3736>;
type FragmentSelf3736 = NonNullable<FragmentResult3736>;

export type FragmentToken3736 =
  | FragmentSelf3736["__typename"]
  | FragmentSelf3736["typenameHint"] | FragmentToken3734 | FragmentToken3735;
