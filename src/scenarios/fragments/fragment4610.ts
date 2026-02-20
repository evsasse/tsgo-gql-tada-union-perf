import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4608 } from "./fragment4608";
import type { FragmentToken4609 } from "./fragment4609";

export const FRAGMENT_4610 = gql(`
  fragment Fragment4610 on Member129 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_129
    memberCount_129
    memberMetric_129
  }
`);

type FragmentResult4610 = ResultOf<typeof FRAGMENT_4610>;
type FragmentSelf4610 = NonNullable<FragmentResult4610>;

export type FragmentToken4610 =
  | FragmentSelf4610["__typename"]
  | FragmentSelf4610["typenameHint"] | FragmentToken4608 | FragmentToken4609;
