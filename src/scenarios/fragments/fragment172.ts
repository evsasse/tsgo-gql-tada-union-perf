import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken170 } from "./fragment170";
import type { FragmentToken171 } from "./fragment171";

export const FRAGMENT_172 = gql(`
  fragment Fragment172 on Member171 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_171
    memberCount_171
    memberMetric_171
  }
`);

type FragmentResult172 = ResultOf<typeof FRAGMENT_172>;
type FragmentSelf172 = NonNullable<FragmentResult172>;

export type FragmentToken172 =
  | FragmentSelf172["__typename"]
  | FragmentSelf172["typenameHint"] | FragmentToken170 | FragmentToken171;
