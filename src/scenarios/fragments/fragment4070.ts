import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4068 } from "./fragment4068";
import type { FragmentToken4069 } from "./fragment4069";

export const FRAGMENT_4070 = gql(`
  fragment Fragment4070 on Member149 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_149
    memberCount_149
    memberMetric_149
  }
`);

type FragmentResult4070 = ResultOf<typeof FRAGMENT_4070>;
type FragmentSelf4070 = NonNullable<FragmentResult4070>;

export type FragmentToken4070 =
  | FragmentSelf4070["__typename"]
  | FragmentSelf4070["typenameHint"] | FragmentToken4068 | FragmentToken4069;
