import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4060 } from "./fragment4060";
import type { FragmentToken4061 } from "./fragment4061";

export const FRAGMENT_4062 = gql(`
  fragment Fragment4062 on Member141 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_141
    memberCount_141
    memberMetric_141
  }
`);

type FragmentResult4062 = ResultOf<typeof FRAGMENT_4062>;
type FragmentSelf4062 = NonNullable<FragmentResult4062>;

export type FragmentToken4062 =
  | FragmentSelf4062["__typename"]
  | FragmentSelf4062["typenameHint"] | FragmentToken4060 | FragmentToken4061;
