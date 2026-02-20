import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4883 } from "./fragment4883";
import type { FragmentToken4884 } from "./fragment4884";

export const FRAGMENT_4885 = gql(`
  fragment Fragment4885 on Member124 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_124
    memberCount_124
    memberMetric_124
  }
`);

type FragmentResult4885 = ResultOf<typeof FRAGMENT_4885>;
type FragmentSelf4885 = NonNullable<FragmentResult4885>;

export type FragmentToken4885 =
  | FragmentSelf4885["__typename"]
  | FragmentSelf4885["typenameHint"] | FragmentToken4883 | FragmentToken4884;
