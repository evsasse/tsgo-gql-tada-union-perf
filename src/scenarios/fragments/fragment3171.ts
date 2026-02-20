import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3169 } from "./fragment3169";
import type { FragmentToken3170 } from "./fragment3170";

export const FRAGMENT_3171 = gql(`
  fragment Fragment3171 on Member90 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_90
    memberCount_90
    memberMetric_90
  }
`);

type FragmentResult3171 = ResultOf<typeof FRAGMENT_3171>;
type FragmentSelf3171 = NonNullable<FragmentResult3171>;

export type FragmentToken3171 =
  | FragmentSelf3171["__typename"]
  | FragmentSelf3171["typenameHint"] | FragmentToken3169 | FragmentToken3170;
