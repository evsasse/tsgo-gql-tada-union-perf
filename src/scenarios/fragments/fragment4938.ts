import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4936 } from "./fragment4936";
import type { FragmentToken4937 } from "./fragment4937";

export const FRAGMENT_4938 = gql(`
  fragment Fragment4938 on Member177 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_177
    memberCount_177
    memberMetric_177
  }
`);

type FragmentResult4938 = ResultOf<typeof FRAGMENT_4938>;
type FragmentSelf4938 = NonNullable<FragmentResult4938>;

export type FragmentToken4938 =
  | FragmentSelf4938["__typename"]
  | FragmentSelf4938["typenameHint"] | FragmentToken4936 | FragmentToken4937;
