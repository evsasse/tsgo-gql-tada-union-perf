import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4870 } from "./fragment4870";
import type { FragmentToken4871 } from "./fragment4871";

export const FRAGMENT_4872 = gql(`
  fragment Fragment4872 on Member111 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_111
    memberCount_111
    memberMetric_111
  }
`);

type FragmentResult4872 = ResultOf<typeof FRAGMENT_4872>;
type FragmentSelf4872 = NonNullable<FragmentResult4872>;

export type FragmentToken4872 =
  | FragmentSelf4872["__typename"]
  | FragmentSelf4872["typenameHint"] | FragmentToken4870 | FragmentToken4871;
