import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4426 } from "./fragment4426";
import type { FragmentToken4427 } from "./fragment4427";

export const FRAGMENT_4428 = gql(`
  fragment Fragment4428 on Member227 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_227
    memberCount_227
    memberMetric_227
  }
`);

type FragmentResult4428 = ResultOf<typeof FRAGMENT_4428>;
type FragmentSelf4428 = NonNullable<FragmentResult4428>;

export type FragmentToken4428 =
  | FragmentSelf4428["__typename"]
  | FragmentSelf4428["typenameHint"] | FragmentToken4426 | FragmentToken4427;
