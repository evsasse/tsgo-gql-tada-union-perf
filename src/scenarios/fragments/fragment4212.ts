import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4210 } from "./fragment4210";
import type { FragmentToken4211 } from "./fragment4211";

export const FRAGMENT_4212 = gql(`
  fragment Fragment4212 on Member11 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_11
    memberCount_11
    memberMetric_11
  }
`);

type FragmentResult4212 = ResultOf<typeof FRAGMENT_4212>;
type FragmentSelf4212 = NonNullable<FragmentResult4212>;

export type FragmentToken4212 =
  | FragmentSelf4212["__typename"]
  | FragmentSelf4212["typenameHint"] | FragmentToken4210 | FragmentToken4211;
