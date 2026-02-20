import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3412 } from "./fragment3412";
import type { FragmentToken3413 } from "./fragment3413";

export const FRAGMENT_3414 = gql(`
  fragment Fragment3414 on Member53 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_53
    memberCount_53
    memberMetric_53
  }
`);

type FragmentResult3414 = ResultOf<typeof FRAGMENT_3414>;
type FragmentSelf3414 = NonNullable<FragmentResult3414>;

export type FragmentToken3414 =
  | FragmentSelf3414["__typename"]
  | FragmentSelf3414["typenameHint"] | FragmentToken3412 | FragmentToken3413;
