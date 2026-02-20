import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3115 } from "./fragment3115";
import type { FragmentToken3116 } from "./fragment3116";

export const FRAGMENT_3117 = gql(`
  fragment Fragment3117 on Member36 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_36
    memberCount_36
    memberMetric_36
  }
`);

type FragmentResult3117 = ResultOf<typeof FRAGMENT_3117>;
type FragmentSelf3117 = NonNullable<FragmentResult3117>;

export type FragmentToken3117 =
  | FragmentSelf3117["__typename"]
  | FragmentSelf3117["typenameHint"] | FragmentToken3115 | FragmentToken3116;
