import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4389 } from "./fragment4389";
import type { FragmentToken4390 } from "./fragment4390";

export const FRAGMENT_4391 = gql(`
  fragment Fragment4391 on Member190 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_190
    memberCount_190
    memberMetric_190
  }
`);

type FragmentResult4391 = ResultOf<typeof FRAGMENT_4391>;
type FragmentSelf4391 = NonNullable<FragmentResult4391>;

export type FragmentToken4391 =
  | FragmentSelf4391["__typename"]
  | FragmentSelf4391["typenameHint"] | FragmentToken4389 | FragmentToken4390;
