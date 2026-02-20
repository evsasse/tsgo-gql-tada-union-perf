import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4048 } from "./fragment4048";
import type { FragmentToken4049 } from "./fragment4049";

export const FRAGMENT_4050 = gql(`
  fragment Fragment4050 on Member129 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_129
    memberCount_129
    memberMetric_129
  }
`);

type FragmentResult4050 = ResultOf<typeof FRAGMENT_4050>;
type FragmentSelf4050 = NonNullable<FragmentResult4050>;

export type FragmentToken4050 =
  | FragmentSelf4050["__typename"]
  | FragmentSelf4050["typenameHint"] | FragmentToken4048 | FragmentToken4049;
