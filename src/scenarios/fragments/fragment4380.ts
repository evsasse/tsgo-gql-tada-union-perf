import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4378 } from "./fragment4378";
import type { FragmentToken4379 } from "./fragment4379";

export const FRAGMENT_4380 = gql(`
  fragment Fragment4380 on Member179 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_179
    memberCount_179
    memberMetric_179
  }
`);

type FragmentResult4380 = ResultOf<typeof FRAGMENT_4380>;
type FragmentSelf4380 = NonNullable<FragmentResult4380>;

export type FragmentToken4380 =
  | FragmentSelf4380["__typename"]
  | FragmentSelf4380["typenameHint"] | FragmentToken4378 | FragmentToken4379;
