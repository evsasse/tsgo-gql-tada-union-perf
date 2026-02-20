import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3127 } from "./fragment3127";
import type { FragmentToken3128 } from "./fragment3128";

export const FRAGMENT_3129 = gql(`
  fragment Fragment3129 on Member48 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_48
    memberCount_48
    memberMetric_48
  }
`);

type FragmentResult3129 = ResultOf<typeof FRAGMENT_3129>;
type FragmentSelf3129 = NonNullable<FragmentResult3129>;

export type FragmentToken3129 =
  | FragmentSelf3129["__typename"]
  | FragmentSelf3129["typenameHint"] | FragmentToken3127 | FragmentToken3128;
