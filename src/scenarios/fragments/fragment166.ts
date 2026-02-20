import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken164 } from "./fragment164";
import type { FragmentToken165 } from "./fragment165";

export const FRAGMENT_166 = gql(`
  fragment Fragment166 on Member165 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_165
    memberCount_165
    memberMetric_165
  }
`);

type FragmentResult166 = ResultOf<typeof FRAGMENT_166>;
type FragmentSelf166 = NonNullable<FragmentResult166>;

export type FragmentToken166 =
  | FragmentSelf166["__typename"]
  | FragmentSelf166["typenameHint"] | FragmentToken164 | FragmentToken165;
