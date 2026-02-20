import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3764 } from "./fragment3764";
import type { FragmentToken3765 } from "./fragment3765";

export const FRAGMENT_3766 = gql(`
  fragment Fragment3766 on Member125 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_125
    memberCount_125
    memberMetric_125
  }
`);

type FragmentResult3766 = ResultOf<typeof FRAGMENT_3766>;
type FragmentSelf3766 = NonNullable<FragmentResult3766>;

export type FragmentToken3766 =
  | FragmentSelf3766["__typename"]
  | FragmentSelf3766["typenameHint"] | FragmentToken3764 | FragmentToken3765;
