import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4517 } from "./fragment4517";
import type { FragmentToken4518 } from "./fragment4518";

export const FRAGMENT_4519 = gql(`
  fragment Fragment4519 on Member38 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_38
    memberCount_38
    memberMetric_38
  }
`);

type FragmentResult4519 = ResultOf<typeof FRAGMENT_4519>;
type FragmentSelf4519 = NonNullable<FragmentResult4519>;

export type FragmentToken4519 =
  | FragmentSelf4519["__typename"]
  | FragmentSelf4519["typenameHint"] | FragmentToken4517 | FragmentToken4518;
