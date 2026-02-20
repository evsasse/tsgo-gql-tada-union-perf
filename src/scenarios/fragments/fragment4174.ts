import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4172 } from "./fragment4172";
import type { FragmentToken4173 } from "./fragment4173";

export const FRAGMENT_4174 = gql(`
  fragment Fragment4174 on Member253 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_253
    memberCount_253
    memberMetric_253
  }
`);

type FragmentResult4174 = ResultOf<typeof FRAGMENT_4174>;
type FragmentSelf4174 = NonNullable<FragmentResult4174>;

export type FragmentToken4174 =
  | FragmentSelf4174["__typename"]
  | FragmentSelf4174["typenameHint"] | FragmentToken4172 | FragmentToken4173;
