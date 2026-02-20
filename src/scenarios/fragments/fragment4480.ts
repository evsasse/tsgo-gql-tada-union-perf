import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4478 } from "./fragment4478";
import type { FragmentToken4479 } from "./fragment4479";

export const FRAGMENT_4480 = gql(`
  fragment Fragment4480 on Member279 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_279
    memberCount_279
    memberMetric_279
  }
`);

type FragmentResult4480 = ResultOf<typeof FRAGMENT_4480>;
type FragmentSelf4480 = NonNullable<FragmentResult4480>;

export type FragmentToken4480 =
  | FragmentSelf4480["__typename"]
  | FragmentSelf4480["typenameHint"] | FragmentToken4478 | FragmentToken4479;
