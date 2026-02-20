import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4508 } from "./fragment4508";
import type { FragmentToken4509 } from "./fragment4509";

export const FRAGMENT_4510 = gql(`
  fragment Fragment4510 on Member29 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_29
    memberCount_29
    memberMetric_29
  }
`);

type FragmentResult4510 = ResultOf<typeof FRAGMENT_4510>;
type FragmentSelf4510 = NonNullable<FragmentResult4510>;

export type FragmentToken4510 =
  | FragmentSelf4510["__typename"]
  | FragmentSelf4510["typenameHint"] | FragmentToken4508 | FragmentToken4509;
