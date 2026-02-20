import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4310 } from "./fragment4310";
import type { FragmentToken4311 } from "./fragment4311";

export const FRAGMENT_4312 = gql(`
  fragment Fragment4312 on Member111 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_111
    memberCount_111
    memberMetric_111
  }
`);

type FragmentResult4312 = ResultOf<typeof FRAGMENT_4312>;
type FragmentSelf4312 = NonNullable<FragmentResult4312>;

export type FragmentToken4312 =
  | FragmentSelf4312["__typename"]
  | FragmentSelf4312["typenameHint"] | FragmentToken4310 | FragmentToken4311;
