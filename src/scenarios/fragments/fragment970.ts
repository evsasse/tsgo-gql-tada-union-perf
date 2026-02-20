import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken968 } from "./fragment968";
import type { FragmentToken969 } from "./fragment969";

export const FRAGMENT_970 = gql(`
  fragment Fragment970 on Member129 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_129
    memberCount_129
    memberMetric_129
  }
`);

type FragmentResult970 = ResultOf<typeof FRAGMENT_970>;
type FragmentSelf970 = NonNullable<FragmentResult970>;

export type FragmentToken970 =
  | FragmentSelf970["__typename"]
  | FragmentSelf970["typenameHint"] | FragmentToken968 | FragmentToken969;
