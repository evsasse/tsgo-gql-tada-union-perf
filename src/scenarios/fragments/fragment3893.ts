import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3891 } from "./fragment3891";
import type { FragmentToken3892 } from "./fragment3892";

export const FRAGMENT_3893 = gql(`
  fragment Fragment3893 on Member252 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_252
    memberCount_252
    memberMetric_252
  }
`);

type FragmentResult3893 = ResultOf<typeof FRAGMENT_3893>;
type FragmentSelf3893 = NonNullable<FragmentResult3893>;

export type FragmentToken3893 =
  | FragmentSelf3893["__typename"]
  | FragmentSelf3893["typenameHint"] | FragmentToken3891 | FragmentToken3892;
