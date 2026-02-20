import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4035 } from "./fragment4035";
import type { FragmentToken4036 } from "./fragment4036";

export const FRAGMENT_4037 = gql(`
  fragment Fragment4037 on Member116 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_116
    memberCount_116
    memberMetric_116
  }
`);

type FragmentResult4037 = ResultOf<typeof FRAGMENT_4037>;
type FragmentSelf4037 = NonNullable<FragmentResult4037>;

export type FragmentToken4037 =
  | FragmentSelf4037["__typename"]
  | FragmentSelf4037["typenameHint"] | FragmentToken4035 | FragmentToken4036;
