import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4201 } from "./fragment4201";
import type { FragmentToken4202 } from "./fragment4202";

export const FRAGMENT_4203 = gql(`
  fragment Fragment4203 on Member02 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_02
    memberCount_02
    memberMetric_02
  }
`);

type FragmentResult4203 = ResultOf<typeof FRAGMENT_4203>;
type FragmentSelf4203 = NonNullable<FragmentResult4203>;

export type FragmentToken4203 =
  | FragmentSelf4203["__typename"]
  | FragmentSelf4203["typenameHint"] | FragmentToken4201 | FragmentToken4202;
