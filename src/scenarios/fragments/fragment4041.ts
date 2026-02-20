import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4039 } from "./fragment4039";
import type { FragmentToken4040 } from "./fragment4040";

export const FRAGMENT_4041 = gql(`
  fragment Fragment4041 on Member120 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_120
    memberCount_120
    memberMetric_120
  }
`);

type FragmentResult4041 = ResultOf<typeof FRAGMENT_4041>;
type FragmentSelf4041 = NonNullable<FragmentResult4041>;

export type FragmentToken4041 =
  | FragmentSelf4041["__typename"]
  | FragmentSelf4041["typenameHint"] | FragmentToken4039 | FragmentToken4040;
