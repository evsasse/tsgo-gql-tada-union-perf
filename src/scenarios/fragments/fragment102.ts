import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken100 } from "./fragment100";
import type { FragmentToken101 } from "./fragment101";

export const FRAGMENT_102 = gql(`
  fragment Fragment102 on Member101 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_101
    memberCount_101
    memberMetric_101
  }
`);

type FragmentResult102 = ResultOf<typeof FRAGMENT_102>;
type FragmentSelf102 = NonNullable<FragmentResult102>;

export type FragmentToken102 =
  | FragmentSelf102["__typename"]
  | FragmentSelf102["typenameHint"] | FragmentToken100 | FragmentToken101;
