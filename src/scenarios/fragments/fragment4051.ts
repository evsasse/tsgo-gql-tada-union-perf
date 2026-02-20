import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4049 } from "./fragment4049";
import type { FragmentToken4050 } from "./fragment4050";

export const FRAGMENT_4051 = gql(`
  fragment Fragment4051 on Member130 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_130
    memberCount_130
    memberMetric_130
  }
`);

type FragmentResult4051 = ResultOf<typeof FRAGMENT_4051>;
type FragmentSelf4051 = NonNullable<FragmentResult4051>;

export type FragmentToken4051 =
  | FragmentSelf4051["__typename"]
  | FragmentSelf4051["typenameHint"] | FragmentToken4049 | FragmentToken4050;
