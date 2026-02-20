import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4829 } from "./fragment4829";
import type { FragmentToken4830 } from "./fragment4830";

export const FRAGMENT_4831 = gql(`
  fragment Fragment4831 on Member70 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_70
    memberCount_70
    memberMetric_70
  }
`);

type FragmentResult4831 = ResultOf<typeof FRAGMENT_4831>;
type FragmentSelf4831 = NonNullable<FragmentResult4831>;

export type FragmentToken4831 =
  | FragmentSelf4831["__typename"]
  | FragmentSelf4831["typenameHint"] | FragmentToken4829 | FragmentToken4830;
