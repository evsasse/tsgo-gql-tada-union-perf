import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3389 } from "./fragment3389";
import type { FragmentToken3390 } from "./fragment3390";

export const FRAGMENT_3391 = gql(`
  fragment Fragment3391 on Member30 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_30
    memberCount_30
    memberMetric_30
  }
`);

type FragmentResult3391 = ResultOf<typeof FRAGMENT_3391>;
type FragmentSelf3391 = NonNullable<FragmentResult3391>;

export type FragmentToken3391 =
  | FragmentSelf3391["__typename"]
  | FragmentSelf3391["typenameHint"] | FragmentToken3389 | FragmentToken3390;
