import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4401 } from "./fragment4401";
import type { FragmentToken4402 } from "./fragment4402";

export const FRAGMENT_4403 = gql(`
  fragment Fragment4403 on Member202 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_202
    memberCount_202
    memberMetric_202
  }
`);

type FragmentResult4403 = ResultOf<typeof FRAGMENT_4403>;
type FragmentSelf4403 = NonNullable<FragmentResult4403>;

export type FragmentToken4403 =
  | FragmentSelf4403["__typename"]
  | FragmentSelf4403["typenameHint"] | FragmentToken4401 | FragmentToken4402;
