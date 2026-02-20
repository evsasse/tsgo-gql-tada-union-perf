import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4957 } from "./fragment4957";
import type { FragmentToken4958 } from "./fragment4958";

export const FRAGMENT_4959 = gql(`
  fragment Fragment4959 on Member198 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_198
    memberCount_198
    memberMetric_198
  }
`);

type FragmentResult4959 = ResultOf<typeof FRAGMENT_4959>;
type FragmentSelf4959 = NonNullable<FragmentResult4959>;

export type FragmentToken4959 =
  | FragmentSelf4959["__typename"]
  | FragmentSelf4959["typenameHint"] | FragmentToken4957 | FragmentToken4958;
