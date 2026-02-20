import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4569 } from "./fragment4569";
import type { FragmentToken4570 } from "./fragment4570";

export const FRAGMENT_4571 = gql(`
  fragment Fragment4571 on Member90 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_90
    memberCount_90
    memberMetric_90
  }
`);

type FragmentResult4571 = ResultOf<typeof FRAGMENT_4571>;
type FragmentSelf4571 = NonNullable<FragmentResult4571>;

export type FragmentToken4571 =
  | FragmentSelf4571["__typename"]
  | FragmentSelf4571["typenameHint"] | FragmentToken4569 | FragmentToken4570;
