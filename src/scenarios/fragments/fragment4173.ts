import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4171 } from "./fragment4171";
import type { FragmentToken4172 } from "./fragment4172";

export const FRAGMENT_4173 = gql(`
  fragment Fragment4173 on Member252 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_252
    memberCount_252
    memberMetric_252
  }
`);

type FragmentResult4173 = ResultOf<typeof FRAGMENT_4173>;
type FragmentSelf4173 = NonNullable<FragmentResult4173>;

export type FragmentToken4173 =
  | FragmentSelf4173["__typename"]
  | FragmentSelf4173["typenameHint"] | FragmentToken4171 | FragmentToken4172;
