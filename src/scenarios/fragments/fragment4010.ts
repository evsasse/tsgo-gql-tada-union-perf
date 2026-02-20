import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4008 } from "./fragment4008";
import type { FragmentToken4009 } from "./fragment4009";

export const FRAGMENT_4010 = gql(`
  fragment Fragment4010 on Member89 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_89
    memberCount_89
    memberMetric_89
  }
`);

type FragmentResult4010 = ResultOf<typeof FRAGMENT_4010>;
type FragmentSelf4010 = NonNullable<FragmentResult4010>;

export type FragmentToken4010 =
  | FragmentSelf4010["__typename"]
  | FragmentSelf4010["typenameHint"] | FragmentToken4008 | FragmentToken4009;
