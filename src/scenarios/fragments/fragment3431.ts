import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3429 } from "./fragment3429";
import type { FragmentToken3430 } from "./fragment3430";

export const FRAGMENT_3431 = gql(`
  fragment Fragment3431 on Member70 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_70
    memberCount_70
    memberMetric_70
  }
`);

type FragmentResult3431 = ResultOf<typeof FRAGMENT_3431>;
type FragmentSelf3431 = NonNullable<FragmentResult3431>;

export type FragmentToken3431 =
  | FragmentSelf3431["__typename"]
  | FragmentSelf3431["typenameHint"] | FragmentToken3429 | FragmentToken3430;
