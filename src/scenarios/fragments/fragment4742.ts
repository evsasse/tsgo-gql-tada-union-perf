import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4740 } from "./fragment4740";
import type { FragmentToken4741 } from "./fragment4741";

export const FRAGMENT_4742 = gql(`
  fragment Fragment4742 on Member261 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_261
    memberCount_261
    memberMetric_261
  }
`);

type FragmentResult4742 = ResultOf<typeof FRAGMENT_4742>;
type FragmentSelf4742 = NonNullable<FragmentResult4742>;

export type FragmentToken4742 =
  | FragmentSelf4742["__typename"]
  | FragmentSelf4742["typenameHint"] | FragmentToken4740 | FragmentToken4741;
