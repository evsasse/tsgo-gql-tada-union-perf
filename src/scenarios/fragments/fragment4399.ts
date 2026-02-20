import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4397 } from "./fragment4397";
import type { FragmentToken4398 } from "./fragment4398";

export const FRAGMENT_4399 = gql(`
  fragment Fragment4399 on Member198 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_198
    memberCount_198
    memberMetric_198
  }
`);

type FragmentResult4399 = ResultOf<typeof FRAGMENT_4399>;
type FragmentSelf4399 = NonNullable<FragmentResult4399>;

export type FragmentToken4399 =
  | FragmentSelf4399["__typename"]
  | FragmentSelf4399["typenameHint"] | FragmentToken4397 | FragmentToken4398;
