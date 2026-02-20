import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4353 } from "./fragment4353";
import type { FragmentToken4354 } from "./fragment4354";

export const FRAGMENT_4355 = gql(`
  fragment Fragment4355 on Member154 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_154
    memberCount_154
    memberMetric_154
  }
`);

type FragmentResult4355 = ResultOf<typeof FRAGMENT_4355>;
type FragmentSelf4355 = NonNullable<FragmentResult4355>;

export type FragmentToken4355 =
  | FragmentSelf4355["__typename"]
  | FragmentSelf4355["typenameHint"] | FragmentToken4353 | FragmentToken4354;
