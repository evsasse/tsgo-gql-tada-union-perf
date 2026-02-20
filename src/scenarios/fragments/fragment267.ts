import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken265 } from "./fragment265";
import type { FragmentToken266 } from "./fragment266";

export const FRAGMENT_267 = gql(`
  fragment Fragment267 on Member266 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_266
    memberCount_266
    memberMetric_266
  }
`);

type FragmentResult267 = ResultOf<typeof FRAGMENT_267>;
type FragmentSelf267 = NonNullable<FragmentResult267>;

export type FragmentToken267 =
  | FragmentSelf267["__typename"]
  | FragmentSelf267["typenameHint"] | FragmentToken265 | FragmentToken266;
