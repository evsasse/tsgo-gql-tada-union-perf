import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4009 } from "./fragment4009";
import type { FragmentToken4010 } from "./fragment4010";

export const FRAGMENT_4011 = gql(`
  fragment Fragment4011 on Member90 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_90
    memberCount_90
    memberMetric_90
  }
`);

type FragmentResult4011 = ResultOf<typeof FRAGMENT_4011>;
type FragmentSelf4011 = NonNullable<FragmentResult4011>;

export type FragmentToken4011 =
  | FragmentSelf4011["__typename"]
  | FragmentSelf4011["typenameHint"] | FragmentToken4009 | FragmentToken4010;
