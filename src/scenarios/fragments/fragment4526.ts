import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4524 } from "./fragment4524";
import type { FragmentToken4525 } from "./fragment4525";

export const FRAGMENT_4526 = gql(`
  fragment Fragment4526 on Member45 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_45
    memberCount_45
    memberMetric_45
  }
`);

type FragmentResult4526 = ResultOf<typeof FRAGMENT_4526>;
type FragmentSelf4526 = NonNullable<FragmentResult4526>;

export type FragmentToken4526 =
  | FragmentSelf4526["__typename"]
  | FragmentSelf4526["typenameHint"] | FragmentToken4524 | FragmentToken4525;
