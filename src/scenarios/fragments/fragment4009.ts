import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4007 } from "./fragment4007";
import type { FragmentToken4008 } from "./fragment4008";

export const FRAGMENT_4009 = gql(`
  fragment Fragment4009 on Member88 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_88
    memberCount_88
    memberMetric_88
  }
`);

type FragmentResult4009 = ResultOf<typeof FRAGMENT_4009>;
type FragmentSelf4009 = NonNullable<FragmentResult4009>;

export type FragmentToken4009 =
  | FragmentSelf4009["__typename"]
  | FragmentSelf4009["typenameHint"] | FragmentToken4007 | FragmentToken4008;
