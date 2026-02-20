import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3180 } from "./fragment3180";
import type { FragmentToken3181 } from "./fragment3181";

export const FRAGMENT_3182 = gql(`
  fragment Fragment3182 on Member101 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_101
    memberCount_101
    memberMetric_101
  }
`);

type FragmentResult3182 = ResultOf<typeof FRAGMENT_3182>;
type FragmentSelf3182 = NonNullable<FragmentResult3182>;

export type FragmentToken3182 =
  | FragmentSelf3182["__typename"]
  | FragmentSelf3182["typenameHint"] | FragmentToken3180 | FragmentToken3181;
