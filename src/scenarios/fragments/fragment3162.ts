import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3160 } from "./fragment3160";
import type { FragmentToken3161 } from "./fragment3161";

export const FRAGMENT_3162 = gql(`
  fragment Fragment3162 on Member81 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_81
    memberCount_81
    memberMetric_81
  }
`);

type FragmentResult3162 = ResultOf<typeof FRAGMENT_3162>;
type FragmentSelf3162 = NonNullable<FragmentResult3162>;

export type FragmentToken3162 =
  | FragmentSelf3162["__typename"]
  | FragmentSelf3162["typenameHint"] | FragmentToken3160 | FragmentToken3161;
