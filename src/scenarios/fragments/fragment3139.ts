import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3137 } from "./fragment3137";
import type { FragmentToken3138 } from "./fragment3138";

export const FRAGMENT_3139 = gql(`
  fragment Fragment3139 on Member58 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_58
    memberCount_58
    memberMetric_58
  }
`);

type FragmentResult3139 = ResultOf<typeof FRAGMENT_3139>;
type FragmentSelf3139 = NonNullable<FragmentResult3139>;

export type FragmentToken3139 =
  | FragmentSelf3139["__typename"]
  | FragmentSelf3139["typenameHint"] | FragmentToken3137 | FragmentToken3138;
