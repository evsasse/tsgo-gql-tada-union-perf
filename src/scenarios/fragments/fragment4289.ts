import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4287 } from "./fragment4287";
import type { FragmentToken4288 } from "./fragment4288";

export const FRAGMENT_4289 = gql(`
  fragment Fragment4289 on Member88 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_88
    memberCount_88
    memberMetric_88
  }
`);

type FragmentResult4289 = ResultOf<typeof FRAGMENT_4289>;
type FragmentSelf4289 = NonNullable<FragmentResult4289>;

export type FragmentToken4289 =
  | FragmentSelf4289["__typename"]
  | FragmentSelf4289["typenameHint"] | FragmentToken4287 | FragmentToken4288;
