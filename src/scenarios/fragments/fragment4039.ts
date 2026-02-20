import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4037 } from "./fragment4037";
import type { FragmentToken4038 } from "./fragment4038";

export const FRAGMENT_4039 = gql(`
  fragment Fragment4039 on Member118 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_118
    memberCount_118
    memberMetric_118
  }
`);

type FragmentResult4039 = ResultOf<typeof FRAGMENT_4039>;
type FragmentSelf4039 = NonNullable<FragmentResult4039>;

export type FragmentToken4039 =
  | FragmentSelf4039["__typename"]
  | FragmentSelf4039["typenameHint"] | FragmentToken4037 | FragmentToken4038;
