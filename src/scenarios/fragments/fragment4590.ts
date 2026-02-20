import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4588 } from "./fragment4588";
import type { FragmentToken4589 } from "./fragment4589";

export const FRAGMENT_4590 = gql(`
  fragment Fragment4590 on Member109 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_109
    memberCount_109
    memberMetric_109
  }
`);

type FragmentResult4590 = ResultOf<typeof FRAGMENT_4590>;
type FragmentSelf4590 = NonNullable<FragmentResult4590>;

export type FragmentToken4590 =
  | FragmentSelf4590["__typename"]
  | FragmentSelf4590["typenameHint"] | FragmentToken4588 | FragmentToken4589;
