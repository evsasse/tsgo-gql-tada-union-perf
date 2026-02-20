import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3159 } from "./fragment3159";
import type { FragmentToken3160 } from "./fragment3160";

export const FRAGMENT_3161 = gql(`
  fragment Fragment3161 on Member80 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_80
    memberCount_80
    memberMetric_80
  }
`);

type FragmentResult3161 = ResultOf<typeof FRAGMENT_3161>;
type FragmentSelf3161 = NonNullable<FragmentResult3161>;

export type FragmentToken3161 =
  | FragmentSelf3161["__typename"]
  | FragmentSelf3161["typenameHint"] | FragmentToken3159 | FragmentToken3160;
