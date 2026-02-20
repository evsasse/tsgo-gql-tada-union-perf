import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4543 } from "./fragment4543";
import type { FragmentToken4544 } from "./fragment4544";

export const FRAGMENT_4545 = gql(`
  fragment Fragment4545 on Member64 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_64
    memberCount_64
    memberMetric_64
  }
`);

type FragmentResult4545 = ResultOf<typeof FRAGMENT_4545>;
type FragmentSelf4545 = NonNullable<FragmentResult4545>;

export type FragmentToken4545 =
  | FragmentSelf4545["__typename"]
  | FragmentSelf4545["typenameHint"] | FragmentToken4543 | FragmentToken4544;
