import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4293 } from "./fragment4293";
import type { FragmentToken4294 } from "./fragment4294";

export const FRAGMENT_4295 = gql(`
  fragment Fragment4295 on Member94 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_94
    memberCount_94
    memberMetric_94
  }
`);

type FragmentResult4295 = ResultOf<typeof FRAGMENT_4295>;
type FragmentSelf4295 = NonNullable<FragmentResult4295>;

export type FragmentToken4295 =
  | FragmentSelf4295["__typename"]
  | FragmentSelf4295["typenameHint"] | FragmentToken4293 | FragmentToken4294;
