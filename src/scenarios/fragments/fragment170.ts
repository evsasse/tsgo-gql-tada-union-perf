import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken168 } from "./fragment168";
import type { FragmentToken169 } from "./fragment169";

export const FRAGMENT_170 = gql(`
  fragment Fragment170 on Member169 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_169
    memberCount_169
    memberMetric_169
  }
`);

type FragmentResult170 = ResultOf<typeof FRAGMENT_170>;
type FragmentSelf170 = NonNullable<FragmentResult170>;

export type FragmentToken170 =
  | FragmentSelf170["__typename"]
  | FragmentSelf170["typenameHint"] | FragmentToken168 | FragmentToken169;
