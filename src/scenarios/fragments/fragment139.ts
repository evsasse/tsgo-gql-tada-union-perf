import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken137 } from "./fragment137";
import type { FragmentToken138 } from "./fragment138";

export const FRAGMENT_139 = gql(`
  fragment Fragment139 on Member138 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_138
    memberCount_138
    memberMetric_138
  }
`);

type FragmentResult139 = ResultOf<typeof FRAGMENT_139>;
type FragmentSelf139 = NonNullable<FragmentResult139>;

export type FragmentToken139 =
  | FragmentSelf139["__typename"]
  | FragmentSelf139["typenameHint"] | FragmentToken137 | FragmentToken138;
