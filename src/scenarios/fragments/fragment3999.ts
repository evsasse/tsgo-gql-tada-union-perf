import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3997 } from "./fragment3997";
import type { FragmentToken3998 } from "./fragment3998";

export const FRAGMENT_3999 = gql(`
  fragment Fragment3999 on Member78 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_78
    memberCount_78
    memberMetric_78
  }
`);

type FragmentResult3999 = ResultOf<typeof FRAGMENT_3999>;
type FragmentSelf3999 = NonNullable<FragmentResult3999>;

export type FragmentToken3999 =
  | FragmentSelf3999["__typename"]
  | FragmentSelf3999["typenameHint"] | FragmentToken3997 | FragmentToken3998;
