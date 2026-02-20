import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4046 } from "./fragment4046";
import type { FragmentToken4047 } from "./fragment4047";

export const FRAGMENT_4048 = gql(`
  fragment Fragment4048 on Member127 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_127
    memberCount_127
    memberMetric_127
  }
`);

type FragmentResult4048 = ResultOf<typeof FRAGMENT_4048>;
type FragmentSelf4048 = NonNullable<FragmentResult4048>;

export type FragmentToken4048 =
  | FragmentSelf4048["__typename"]
  | FragmentSelf4048["typenameHint"] | FragmentToken4046 | FragmentToken4047;
