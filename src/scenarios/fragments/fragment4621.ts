import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4619 } from "./fragment4619";
import type { FragmentToken4620 } from "./fragment4620";

export const FRAGMENT_4621 = gql(`
  fragment Fragment4621 on Member140 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_140
    memberCount_140
    memberMetric_140
  }
`);

type FragmentResult4621 = ResultOf<typeof FRAGMENT_4621>;
type FragmentSelf4621 = NonNullable<FragmentResult4621>;

export type FragmentToken4621 =
  | FragmentSelf4621["__typename"]
  | FragmentSelf4621["typenameHint"] | FragmentToken4619 | FragmentToken4620;
