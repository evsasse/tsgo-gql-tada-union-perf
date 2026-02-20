import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4311 } from "./fragment4311";
import type { FragmentToken4312 } from "./fragment4312";

export const FRAGMENT_4313 = gql(`
  fragment Fragment4313 on Member112 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_112
    memberCount_112
    memberMetric_112
  }
`);

type FragmentResult4313 = ResultOf<typeof FRAGMENT_4313>;
type FragmentSelf4313 = NonNullable<FragmentResult4313>;

export type FragmentToken4313 =
  | FragmentSelf4313["__typename"]
  | FragmentSelf4313["typenameHint"] | FragmentToken4311 | FragmentToken4312;
