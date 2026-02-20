import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4247 } from "./fragment4247";
import type { FragmentToken4248 } from "./fragment4248";

export const FRAGMENT_4249 = gql(`
  fragment Fragment4249 on Member48 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_48
    memberCount_48
    memberMetric_48
  }
`);

type FragmentResult4249 = ResultOf<typeof FRAGMENT_4249>;
type FragmentSelf4249 = NonNullable<FragmentResult4249>;

export type FragmentToken4249 =
  | FragmentSelf4249["__typename"]
  | FragmentSelf4249["typenameHint"] | FragmentToken4247 | FragmentToken4248;
