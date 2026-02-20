import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken734 } from "./fragment734";
import type { FragmentToken735 } from "./fragment735";

export const FRAGMENT_736 = gql(`
  fragment Fragment736 on Member175 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_175
    memberCount_175
    memberMetric_175
  }
`);

type FragmentResult736 = ResultOf<typeof FRAGMENT_736>;
type FragmentSelf736 = NonNullable<FragmentResult736>;

export type FragmentToken736 =
  | FragmentSelf736["__typename"]
  | FragmentSelf736["typenameHint"] | FragmentToken734 | FragmentToken735;
