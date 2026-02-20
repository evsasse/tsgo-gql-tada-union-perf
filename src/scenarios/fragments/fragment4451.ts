import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4449 } from "./fragment4449";
import type { FragmentToken4450 } from "./fragment4450";

export const FRAGMENT_4451 = gql(`
  fragment Fragment4451 on Member250 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_250
    memberCount_250
    memberMetric_250
  }
`);

type FragmentResult4451 = ResultOf<typeof FRAGMENT_4451>;
type FragmentSelf4451 = NonNullable<FragmentResult4451>;

export type FragmentToken4451 =
  | FragmentSelf4451["__typename"]
  | FragmentSelf4451["typenameHint"] | FragmentToken4449 | FragmentToken4450;
