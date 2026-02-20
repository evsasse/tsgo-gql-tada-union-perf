import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4610 } from "./fragment4610";
import type { FragmentToken4611 } from "./fragment4611";

export const FRAGMENT_4612 = gql(`
  fragment Fragment4612 on Member131 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_131
    memberCount_131
    memberMetric_131
  }
`);

type FragmentResult4612 = ResultOf<typeof FRAGMENT_4612>;
type FragmentSelf4612 = NonNullable<FragmentResult4612>;

export type FragmentToken4612 =
  | FragmentSelf4612["__typename"]
  | FragmentSelf4612["typenameHint"] | FragmentToken4610 | FragmentToken4611;
