import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4170 } from "./fragment4170";
import type { FragmentToken4171 } from "./fragment4171";

export const FRAGMENT_4172 = gql(`
  fragment Fragment4172 on Member251 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_251
    memberCount_251
    memberMetric_251
  }
`);

type FragmentResult4172 = ResultOf<typeof FRAGMENT_4172>;
type FragmentSelf4172 = NonNullable<FragmentResult4172>;

export type FragmentToken4172 =
  | FragmentSelf4172["__typename"]
  | FragmentSelf4172["typenameHint"] | FragmentToken4170 | FragmentToken4171;
