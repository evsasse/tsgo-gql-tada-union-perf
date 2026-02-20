import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4595 } from "./fragment4595";
import type { FragmentToken4596 } from "./fragment4596";

export const FRAGMENT_4597 = gql(`
  fragment Fragment4597 on Member116 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_116
    memberCount_116
    memberMetric_116
  }
`);

type FragmentResult4597 = ResultOf<typeof FRAGMENT_4597>;
type FragmentSelf4597 = NonNullable<FragmentResult4597>;

export type FragmentToken4597 =
  | FragmentSelf4597["__typename"]
  | FragmentSelf4597["typenameHint"] | FragmentToken4595 | FragmentToken4596;
