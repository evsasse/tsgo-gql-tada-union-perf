import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4868 } from "./fragment4868";
import type { FragmentToken4869 } from "./fragment4869";

export const FRAGMENT_4870 = gql(`
  fragment Fragment4870 on Member109 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_109
    memberCount_109
    memberMetric_109
  }
`);

type FragmentResult4870 = ResultOf<typeof FRAGMENT_4870>;
type FragmentSelf4870 = NonNullable<FragmentResult4870>;

export type FragmentToken4870 =
  | FragmentSelf4870["__typename"]
  | FragmentSelf4870["typenameHint"] | FragmentToken4868 | FragmentToken4869;
