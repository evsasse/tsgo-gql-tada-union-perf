import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4587 } from "./fragment4587";
import type { FragmentToken4588 } from "./fragment4588";

export const FRAGMENT_4589 = gql(`
  fragment Fragment4589 on Member108 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_108
    memberCount_108
    memberMetric_108
  }
`);

type FragmentResult4589 = ResultOf<typeof FRAGMENT_4589>;
type FragmentSelf4589 = NonNullable<FragmentResult4589>;

export type FragmentToken4589 =
  | FragmentSelf4589["__typename"]
  | FragmentSelf4589["typenameHint"] | FragmentToken4587 | FragmentToken4588;
