import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3117 } from "./fragment3117";
import type { FragmentToken3118 } from "./fragment3118";

export const FRAGMENT_3119 = gql(`
  fragment Fragment3119 on Member38 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_38
    memberCount_38
    memberMetric_38
  }
`);

type FragmentResult3119 = ResultOf<typeof FRAGMENT_3119>;
type FragmentSelf3119 = NonNullable<FragmentResult3119>;

export type FragmentToken3119 =
  | FragmentSelf3119["__typename"]
  | FragmentSelf3119["typenameHint"] | FragmentToken3117 | FragmentToken3118;
