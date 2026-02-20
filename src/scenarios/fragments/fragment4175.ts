import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4173 } from "./fragment4173";
import type { FragmentToken4174 } from "./fragment4174";

export const FRAGMENT_4175 = gql(`
  fragment Fragment4175 on Member254 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_254
    memberCount_254
    memberMetric_254
  }
`);

type FragmentResult4175 = ResultOf<typeof FRAGMENT_4175>;
type FragmentSelf4175 = NonNullable<FragmentResult4175>;

export type FragmentToken4175 =
  | FragmentSelf4175["__typename"]
  | FragmentSelf4175["typenameHint"] | FragmentToken4173 | FragmentToken4174;
