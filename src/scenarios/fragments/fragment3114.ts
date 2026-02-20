import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3112 } from "./fragment3112";
import type { FragmentToken3113 } from "./fragment3113";

export const FRAGMENT_3114 = gql(`
  fragment Fragment3114 on Member33 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_33
    memberCount_33
    memberMetric_33
  }
`);

type FragmentResult3114 = ResultOf<typeof FRAGMENT_3114>;
type FragmentSelf3114 = NonNullable<FragmentResult3114>;

export type FragmentToken3114 =
  | FragmentSelf3114["__typename"]
  | FragmentSelf3114["typenameHint"] | FragmentToken3112 | FragmentToken3113;
