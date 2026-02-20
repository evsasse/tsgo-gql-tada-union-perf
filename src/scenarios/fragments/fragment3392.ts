import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3390 } from "./fragment3390";
import type { FragmentToken3391 } from "./fragment3391";

export const FRAGMENT_3392 = gql(`
  fragment Fragment3392 on Member31 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_31
    memberCount_31
    memberMetric_31
  }
`);

type FragmentResult3392 = ResultOf<typeof FRAGMENT_3392>;
type FragmentSelf3392 = NonNullable<FragmentResult3392>;

export type FragmentToken3392 =
  | FragmentSelf3392["__typename"]
  | FragmentSelf3392["typenameHint"] | FragmentToken3390 | FragmentToken3391;
