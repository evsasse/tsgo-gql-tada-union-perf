import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4211 } from "./fragment4211";
import type { FragmentToken4212 } from "./fragment4212";

export const FRAGMENT_4213 = gql(`
  fragment Fragment4213 on Member12 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_12
    memberCount_12
    memberMetric_12
  }
`);

type FragmentResult4213 = ResultOf<typeof FRAGMENT_4213>;
type FragmentSelf4213 = NonNullable<FragmentResult4213>;

export type FragmentToken4213 =
  | FragmentSelf4213["__typename"]
  | FragmentSelf4213["typenameHint"] | FragmentToken4211 | FragmentToken4212;
