import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4069 } from "./fragment4069";
import type { FragmentToken4070 } from "./fragment4070";

export const FRAGMENT_4071 = gql(`
  fragment Fragment4071 on Member150 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_150
    memberCount_150
    memberMetric_150
  }
`);

type FragmentResult4071 = ResultOf<typeof FRAGMENT_4071>;
type FragmentSelf4071 = NonNullable<FragmentResult4071>;

export type FragmentToken4071 =
  | FragmentSelf4071["__typename"]
  | FragmentSelf4071["typenameHint"] | FragmentToken4069 | FragmentToken4070;
