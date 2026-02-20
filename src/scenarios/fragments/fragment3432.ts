import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3430 } from "./fragment3430";
import type { FragmentToken3431 } from "./fragment3431";

export const FRAGMENT_3432 = gql(`
  fragment Fragment3432 on Member71 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_71
    memberCount_71
    memberMetric_71
  }
`);

type FragmentResult3432 = ResultOf<typeof FRAGMENT_3432>;
type FragmentSelf3432 = NonNullable<FragmentResult3432>;

export type FragmentToken3432 =
  | FragmentSelf3432["__typename"]
  | FragmentSelf3432["typenameHint"] | FragmentToken3430 | FragmentToken3431;
