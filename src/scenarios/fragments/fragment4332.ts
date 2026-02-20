import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4330 } from "./fragment4330";
import type { FragmentToken4331 } from "./fragment4331";

export const FRAGMENT_4332 = gql(`
  fragment Fragment4332 on Member131 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_131
    memberCount_131
    memberMetric_131
  }
`);

type FragmentResult4332 = ResultOf<typeof FRAGMENT_4332>;
type FragmentSelf4332 = NonNullable<FragmentResult4332>;

export type FragmentToken4332 =
  | FragmentSelf4332["__typename"]
  | FragmentSelf4332["typenameHint"] | FragmentToken4330 | FragmentToken4331;
