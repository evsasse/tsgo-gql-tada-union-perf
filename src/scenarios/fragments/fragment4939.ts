import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4937 } from "./fragment4937";
import type { FragmentToken4938 } from "./fragment4938";

export const FRAGMENT_4939 = gql(`
  fragment Fragment4939 on Member178 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_178
    memberCount_178
    memberMetric_178
  }
`);

type FragmentResult4939 = ResultOf<typeof FRAGMENT_4939>;
type FragmentSelf4939 = NonNullable<FragmentResult4939>;

export type FragmentToken4939 =
  | FragmentSelf4939["__typename"]
  | FragmentSelf4939["typenameHint"] | FragmentToken4937 | FragmentToken4938;
