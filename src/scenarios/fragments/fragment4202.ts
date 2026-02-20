import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4200 } from "./fragment4200";
import type { FragmentToken4201 } from "./fragment4201";

export const FRAGMENT_4202 = gql(`
  fragment Fragment4202 on Member01 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_01
    memberCount_01
    memberMetric_01
  }
`);

type FragmentResult4202 = ResultOf<typeof FRAGMENT_4202>;
type FragmentSelf4202 = NonNullable<FragmentResult4202>;

export type FragmentToken4202 =
  | FragmentSelf4202["__typename"]
  | FragmentSelf4202["typenameHint"] | FragmentToken4200 | FragmentToken4201;
