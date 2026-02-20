import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4626 } from "./fragment4626";
import type { FragmentToken4627 } from "./fragment4627";

export const FRAGMENT_4628 = gql(`
  fragment Fragment4628 on Member147 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_147
    memberCount_147
    memberMetric_147
  }
`);

type FragmentResult4628 = ResultOf<typeof FRAGMENT_4628>;
type FragmentSelf4628 = NonNullable<FragmentResult4628>;

export type FragmentToken4628 =
  | FragmentSelf4628["__typename"]
  | FragmentSelf4628["typenameHint"] | FragmentToken4626 | FragmentToken4627;
