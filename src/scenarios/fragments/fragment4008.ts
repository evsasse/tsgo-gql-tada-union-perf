import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4006 } from "./fragment4006";
import type { FragmentToken4007 } from "./fragment4007";

export const FRAGMENT_4008 = gql(`
  fragment Fragment4008 on Member87 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_87
    memberCount_87
    memberMetric_87
  }
`);

type FragmentResult4008 = ResultOf<typeof FRAGMENT_4008>;
type FragmentSelf4008 = NonNullable<FragmentResult4008>;

export type FragmentToken4008 =
  | FragmentSelf4008["__typename"]
  | FragmentSelf4008["typenameHint"] | FragmentToken4006 | FragmentToken4007;
