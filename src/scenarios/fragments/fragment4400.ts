import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4398 } from "./fragment4398";
import type { FragmentToken4399 } from "./fragment4399";

export const FRAGMENT_4400 = gql(`
  fragment Fragment4400 on Member199 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_199
    memberCount_199
    memberMetric_199
  }
`);

type FragmentResult4400 = ResultOf<typeof FRAGMENT_4400>;
type FragmentSelf4400 = NonNullable<FragmentResult4400>;

export type FragmentToken4400 =
  | FragmentSelf4400["__typename"]
  | FragmentSelf4400["typenameHint"] | FragmentToken4398 | FragmentToken4399;
