import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4217 } from "./fragment4217";
import type { FragmentToken4218 } from "./fragment4218";

export const FRAGMENT_4219 = gql(`
  fragment Fragment4219 on Member18 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_18
    memberCount_18
    memberMetric_18
  }
`);

type FragmentResult4219 = ResultOf<typeof FRAGMENT_4219>;
type FragmentSelf4219 = NonNullable<FragmentResult4219>;

export type FragmentToken4219 =
  | FragmentSelf4219["__typename"]
  | FragmentSelf4219["typenameHint"] | FragmentToken4217 | FragmentToken4218;
