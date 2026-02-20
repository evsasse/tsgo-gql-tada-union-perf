import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4301 } from "./fragment4301";
import type { FragmentToken4302 } from "./fragment4302";

export const FRAGMENT_4303 = gql(`
  fragment Fragment4303 on Member102 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_102
    memberCount_102
    memberMetric_102
  }
`);

type FragmentResult4303 = ResultOf<typeof FRAGMENT_4303>;
type FragmentSelf4303 = NonNullable<FragmentResult4303>;

export type FragmentToken4303 =
  | FragmentSelf4303["__typename"]
  | FragmentSelf4303["typenameHint"] | FragmentToken4301 | FragmentToken4302;
