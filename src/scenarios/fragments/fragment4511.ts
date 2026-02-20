import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4509 } from "./fragment4509";
import type { FragmentToken4510 } from "./fragment4510";

export const FRAGMENT_4511 = gql(`
  fragment Fragment4511 on Member30 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_30
    memberCount_30
    memberMetric_30
  }
`);

type FragmentResult4511 = ResultOf<typeof FRAGMENT_4511>;
type FragmentSelf4511 = NonNullable<FragmentResult4511>;

export type FragmentToken4511 =
  | FragmentSelf4511["__typename"]
  | FragmentSelf4511["typenameHint"] | FragmentToken4509 | FragmentToken4510;
