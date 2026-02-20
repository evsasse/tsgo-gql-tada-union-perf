import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4609 } from "./fragment4609";
import type { FragmentToken4610 } from "./fragment4610";

export const FRAGMENT_4611 = gql(`
  fragment Fragment4611 on Member130 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_130
    memberCount_130
    memberMetric_130
  }
`);

type FragmentResult4611 = ResultOf<typeof FRAGMENT_4611>;
type FragmentSelf4611 = NonNullable<FragmentResult4611>;

export type FragmentToken4611 =
  | FragmentSelf4611["__typename"]
  | FragmentSelf4611["typenameHint"] | FragmentToken4609 | FragmentToken4610;
