import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4209 } from "./fragment4209";
import type { FragmentToken4210 } from "./fragment4210";

export const FRAGMENT_4211 = gql(`
  fragment Fragment4211 on Member10 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_10
    memberCount_10
    memberMetric_10
  }
`);

type FragmentResult4211 = ResultOf<typeof FRAGMENT_4211>;
type FragmentSelf4211 = NonNullable<FragmentResult4211>;

export type FragmentToken4211 =
  | FragmentSelf4211["__typename"]
  | FragmentSelf4211["typenameHint"] | FragmentToken4209 | FragmentToken4210;
