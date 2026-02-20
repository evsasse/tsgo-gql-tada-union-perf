import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4782 } from "./fragment4782";
import type { FragmentToken4783 } from "./fragment4783";

export const FRAGMENT_4784 = gql(`
  fragment Fragment4784 on Member23 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_23
    memberCount_23
    memberMetric_23
  }
`);

type FragmentResult4784 = ResultOf<typeof FRAGMENT_4784>;
type FragmentSelf4784 = NonNullable<FragmentResult4784>;

export type FragmentToken4784 =
  | FragmentSelf4784["__typename"]
  | FragmentSelf4784["typenameHint"] | FragmentToken4782 | FragmentToken4783;
