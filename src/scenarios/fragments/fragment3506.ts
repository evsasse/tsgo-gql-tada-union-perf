import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3504 } from "./fragment3504";
import type { FragmentToken3505 } from "./fragment3505";

export const FRAGMENT_3506 = gql(`
  fragment Fragment3506 on Member145 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_145
    memberCount_145
    memberMetric_145
  }
`);

type FragmentResult3506 = ResultOf<typeof FRAGMENT_3506>;
type FragmentSelf3506 = NonNullable<FragmentResult3506>;

export type FragmentToken3506 =
  | FragmentSelf3506["__typename"]
  | FragmentSelf3506["typenameHint"] | FragmentToken3504 | FragmentToken3505;
