import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4628 } from "./fragment4628";
import type { FragmentToken4629 } from "./fragment4629";

export const FRAGMENT_4630 = gql(`
  fragment Fragment4630 on Member149 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_149
    memberCount_149
    memberMetric_149
  }
`);

type FragmentResult4630 = ResultOf<typeof FRAGMENT_4630>;
type FragmentSelf4630 = NonNullable<FragmentResult4630>;

export type FragmentToken4630 =
  | FragmentSelf4630["__typename"]
  | FragmentSelf4630["typenameHint"] | FragmentToken4628 | FragmentToken4629;
