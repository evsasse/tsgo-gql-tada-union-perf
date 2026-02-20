import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4067 } from "./fragment4067";
import type { FragmentToken4068 } from "./fragment4068";

export const FRAGMENT_4069 = gql(`
  fragment Fragment4069 on Member148 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_148
    memberCount_148
    memberMetric_148
  }
`);

type FragmentResult4069 = ResultOf<typeof FRAGMENT_4069>;
type FragmentSelf4069 = NonNullable<FragmentResult4069>;

export type FragmentToken4069 =
  | FragmentSelf4069["__typename"]
  | FragmentSelf4069["typenameHint"] | FragmentToken4067 | FragmentToken4068;
