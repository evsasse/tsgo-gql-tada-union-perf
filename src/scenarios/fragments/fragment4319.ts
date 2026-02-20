import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4317 } from "./fragment4317";
import type { FragmentToken4318 } from "./fragment4318";

export const FRAGMENT_4319 = gql(`
  fragment Fragment4319 on Member118 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_118
    memberCount_118
    memberMetric_118
  }
`);

type FragmentResult4319 = ResultOf<typeof FRAGMENT_4319>;
type FragmentSelf4319 = NonNullable<FragmentResult4319>;

export type FragmentToken4319 =
  | FragmentSelf4319["__typename"]
  | FragmentSelf4319["typenameHint"] | FragmentToken4317 | FragmentToken4318;
