import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken264 } from "./fragment264";
import type { FragmentToken265 } from "./fragment265";

export const FRAGMENT_266 = gql(`
  fragment Fragment266 on Member265 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_265
    memberCount_265
    memberMetric_265
  }
`);

type FragmentResult266 = ResultOf<typeof FRAGMENT_266>;
type FragmentSelf266 = NonNullable<FragmentResult266>;

export type FragmentToken266 =
  | FragmentSelf266["__typename"]
  | FragmentSelf266["typenameHint"] | FragmentToken264 | FragmentToken265;
