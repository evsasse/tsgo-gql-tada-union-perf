import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4915 } from "./fragment4915";
import type { FragmentToken4916 } from "./fragment4916";

export const FRAGMENT_4917 = gql(`
  fragment Fragment4917 on Member156 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_156
    memberCount_156
    memberMetric_156
  }
`);

type FragmentResult4917 = ResultOf<typeof FRAGMENT_4917>;
type FragmentSelf4917 = NonNullable<FragmentResult4917>;

export type FragmentToken4917 =
  | FragmentSelf4917["__typename"]
  | FragmentSelf4917["typenameHint"] | FragmentToken4915 | FragmentToken4916;
