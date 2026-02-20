import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4627 } from "./fragment4627";
import type { FragmentToken4628 } from "./fragment4628";

export const FRAGMENT_4629 = gql(`
  fragment Fragment4629 on Member148 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_148
    memberCount_148
    memberMetric_148
  }
`);

type FragmentResult4629 = ResultOf<typeof FRAGMENT_4629>;
type FragmentSelf4629 = NonNullable<FragmentResult4629>;

export type FragmentToken4629 =
  | FragmentSelf4629["__typename"]
  | FragmentSelf4629["typenameHint"] | FragmentToken4627 | FragmentToken4628;
