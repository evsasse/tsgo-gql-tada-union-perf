import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3116 } from "./fragment3116";
import type { FragmentToken3117 } from "./fragment3117";

export const FRAGMENT_3118 = gql(`
  fragment Fragment3118 on Member37 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_37
    memberCount_37
    memberMetric_37
  }
`);

type FragmentResult3118 = ResultOf<typeof FRAGMENT_3118>;
type FragmentSelf3118 = NonNullable<FragmentResult3118>;

export type FragmentToken3118 =
  | FragmentSelf3118["__typename"]
  | FragmentSelf3118["typenameHint"] | FragmentToken3116 | FragmentToken3117;
