import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3482 } from "./fragment3482";
import type { FragmentToken3483 } from "./fragment3483";

export const FRAGMENT_3484 = gql(`
  fragment Fragment3484 on Member123 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_123
    memberCount_123
    memberMetric_123
  }
`);

type FragmentResult3484 = ResultOf<typeof FRAGMENT_3484>;
type FragmentSelf3484 = NonNullable<FragmentResult3484>;

export type FragmentToken3484 =
  | FragmentSelf3484["__typename"]
  | FragmentSelf3484["typenameHint"] | FragmentToken3482 | FragmentToken3483;
