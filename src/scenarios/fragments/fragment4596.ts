import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4594 } from "./fragment4594";
import type { FragmentToken4595 } from "./fragment4595";

export const FRAGMENT_4596 = gql(`
  fragment Fragment4596 on Member115 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_115
    memberCount_115
    memberMetric_115
  }
`);

type FragmentResult4596 = ResultOf<typeof FRAGMENT_4596>;
type FragmentSelf4596 = NonNullable<FragmentResult4596>;

export type FragmentToken4596 =
  | FragmentSelf4596["__typename"]
  | FragmentSelf4596["typenameHint"] | FragmentToken4594 | FragmentToken4595;
