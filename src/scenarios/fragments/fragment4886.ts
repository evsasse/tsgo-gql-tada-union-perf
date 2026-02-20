import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4884 } from "./fragment4884";
import type { FragmentToken4885 } from "./fragment4885";

export const FRAGMENT_4886 = gql(`
  fragment Fragment4886 on Member125 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_125
    memberCount_125
    memberMetric_125
  }
`);

type FragmentResult4886 = ResultOf<typeof FRAGMENT_4886>;
type FragmentSelf4886 = NonNullable<FragmentResult4886>;

export type FragmentToken4886 =
  | FragmentSelf4886["__typename"]
  | FragmentSelf4886["typenameHint"] | FragmentToken4884 | FragmentToken4885;
