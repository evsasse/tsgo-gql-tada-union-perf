import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4501 } from "./fragment4501";
import type { FragmentToken4502 } from "./fragment4502";

export const FRAGMENT_4503 = gql(`
  fragment Fragment4503 on Member22 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_22
    memberCount_22
    memberMetric_22
  }
`);

type FragmentResult4503 = ResultOf<typeof FRAGMENT_4503>;
type FragmentSelf4503 = NonNullable<FragmentResult4503>;

export type FragmentToken4503 =
  | FragmentSelf4503["__typename"]
  | FragmentSelf4503["typenameHint"] | FragmentToken4501 | FragmentToken4502;
