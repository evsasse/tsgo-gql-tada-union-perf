import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4739 } from "./fragment4739";
import type { FragmentToken4740 } from "./fragment4740";

export const FRAGMENT_4741 = gql(`
  fragment Fragment4741 on Member260 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_260
    memberCount_260
    memberMetric_260
  }
`);

type FragmentResult4741 = ResultOf<typeof FRAGMENT_4741>;
type FragmentSelf4741 = NonNullable<FragmentResult4741>;

export type FragmentToken4741 =
  | FragmentSelf4741["__typename"]
  | FragmentSelf4741["typenameHint"] | FragmentToken4739 | FragmentToken4740;
