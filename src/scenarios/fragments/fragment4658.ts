import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4656 } from "./fragment4656";
import type { FragmentToken4657 } from "./fragment4657";

export const FRAGMENT_4658 = gql(`
  fragment Fragment4658 on Member177 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_177
    memberCount_177
    memberMetric_177
  }
`);

type FragmentResult4658 = ResultOf<typeof FRAGMENT_4658>;
type FragmentSelf4658 = NonNullable<FragmentResult4658>;

export type FragmentToken4658 =
  | FragmentSelf4658["__typename"]
  | FragmentSelf4658["typenameHint"] | FragmentToken4656 | FragmentToken4657;
